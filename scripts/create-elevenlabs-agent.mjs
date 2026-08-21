import { readFile, writeFile, mkdir } from "node:fs/promises";

if (!process.argv.includes("--confirm-create")) throw new Error("Ajoutez --confirm-create pour autoriser la création distante.");
const apiKey = process.env.ELEVENLABS_API_KEY;
const referenceId = process.env.ELEVENLABS_AGENT_ID;
if (!apiKey || !referenceId) throw new Error("Configuration ElevenLabs absente.");

const headers = { "xi-api-key": apiKey, "content-type": "application/json" };
const referenceResponse = await fetch(`https://api.elevenlabs.io/v1/convai/agents/${referenceId}`, { headers });
if (!referenceResponse.ok) throw new Error(`Agent de référence indisponible (${referenceResponse.status}).`);

const reference = await referenceResponse.json();
const prompt = await readFile(new URL("../agent/system-prompt.md", import.meta.url), "utf8");
const config = structuredClone(reference.conversation_config);
const existingTools = config.agent.prompt.tools ?? [];
const endCall = existingTools.find((tool) => tool.type === "system" && tool.name === "end_call");
const voicemail = existingTools.find((tool) => tool.type === "system" && tool.name === "voicemail_detection");

config.agent.first_message = '<break time="0.8s" />Bonjour, ici Claire, le Voicebot Inondations d’Annoncia. Je peux vous expliquer les bons réflexes avant, pendant ou après une inondation. Si une personne est en danger immédiat, appelez le cent douze. De quelle information avez-vous besoin ?';
config.agent.language = "fr";
config.agent.disable_first_message_interruptions = true;
config.agent.prompt.prompt = prompt;
config.agent.prompt.llm = "claude-sonnet-4-5";
config.agent.prompt.temperature = 0;
config.agent.prompt.max_tokens = 180;
config.agent.prompt.tools = [endCall, voicemail].filter(Boolean);
config.agent.prompt.tool_ids = [];
config.agent.prompt.mcp_server_ids = [];
config.agent.prompt.native_mcp_server_ids = [];
config.agent.prompt.knowledge_base = [];
config.agent.prompt.rag = { ...(config.agent.prompt.rag ?? {}), enabled: false, optional_rag_enabled: false };
config.language_presets = {};
config.tts = { ...config.tts, model_id: "eleven_flash_v2_5", speed: 0.92, stability: 0.5, similarity_boost: 0.85 };
config.asr.keywords = ["inondation", "crue", "ruissellement", "évacuation", "sacs de sable", "BE-Alert", "cent douze", "dix-sept vingt-deux", "Vesdre", "pompiers", "eau potable"];
config.turn.turn_eagerness = "patient";
config.turn.speculative_turn = false;
config.turn.turn_timeout = 12;
config.conversation.file_input.enabled = false;

const platform = structuredClone(reference.platform_settings);
platform.archived = false;
platform.workspace_overrides = {};
platform.data_collection = {};
platform.analysis_items = {};
delete platform.webhook;
platform.privacy = { ...platform.privacy, record_voice: false, retention_days: 30, delete_audio: true, delete_transcript_and_pii: false, zero_retention_mode: false };

const payload = { name: "Annoncia — Voicebot Inondations FR", tags: ["inondations", "belgique", "français", "information", "prototype"], conversation_config: config, platform_settings: platform };
const response = await fetch("https://api.elevenlabs.io/v1/convai/agents/create", { method: "POST", headers, body: JSON.stringify(payload) });
const result = await response.json();
if (!response.ok) throw new Error(`Création refusée (${response.status}): ${JSON.stringify(result)}`);

await mkdir(new URL("../config/", import.meta.url), { recursive: true });
await writeFile(new URL("../config/elevenlabs-agent.json", import.meta.url), JSON.stringify({ agent_id: result.agent_id, name: payload.name, language: "fr", phone_number_attached: false }, null, 2) + "\n");
console.log(JSON.stringify({ agent_id: result.agent_id, name: payload.name, language: "fr", phone_number_attached: false }, null, 2));
