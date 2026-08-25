import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the French flood landing with the Canicule header and footer information", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Voicebot Inondations<\/title>/i);
  assert.match(html, /INFORMEZ\./);
  assert.match(html, /ALERTEZ\./);
  assert.match(html, /PROTÉGEZ\./);
  assert.match(html, /<b>VOICEBOT<\/b><em>INNONDATIONS<\/em>/);
  assert.doesNotMatch(html, /Appeler quelqu’un/);
  assert.match(html, /href="tel:\+3271499817"/);
  assert.match(html, /Appeler \+3271499817/);
  assert.doesNotMatch(html, /Tester le voicebot/i);
  assert.match(html, /href="\/architecture"[^>]*>Technologie<\/a>/);
  assert.match(html, /Trusted voice agents/);
  assert.match(html, /Protection anti-hallucination/);
  assert.match(html, /Bases de données complexes/);
  assert.match(html, /Belgian Defence through the STRIKE IT program/);
  assert.doesNotMatch(html, /VOICEBOT INONDATIONS<\/p>/i);
});

test("renders the complete Canicule technology architecture adapted to floods", async () => {
  const response = await render("/architecture/");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Un appel\./);
  assert.match(html, /Plusieurs couches de contrôle\./);
  assert.match(html, /De l’appel à la décision, en sept étapes/);
  assert.match(html, /Trois couches travaillent en parallèle/);
  assert.match(html, /Une pile modulaire, interopérable et auditable/);
  assert.match(html, /Sélectionné dans le programme STRIKE-IT 2026/);
  assert.match(html, /Ce qu’on nous demande le plus/);
  assert.match(html, /Protection anti-hallucination/);
  assert.match(html, /Marc-Antoine Cajot/);
  assert.match(html, /href="tel:\+3271499817"/);
  assert.match(html, /Appeler \+3271499817/);
});

test("keeps the active voicebot name and pronunciation in French", async () => {
  const config = JSON.parse(await readFile(new URL("../config/elevenlabs-agent.json", import.meta.url), "utf8"));
  const dictionary = JSON.parse(await readFile(new URL("../agent/pronunciation-rules.json", import.meta.url), "utf8"));
  const prompt = await readFile(new URL("../agent/system-prompt.md", import.meta.url), "utf8");

  assert.equal(config.language, "fr");
  assert.equal(config.name, "Voicebot Inondations FR");
  assert.equal(config.pronunciation_dictionary.id, "NpX7ibay1gXIWTPQfCdr");
  assert.deepEqual(dictionary.rules, [{
    string_to_replace: "Voicebot",
    case_sensitive: false,
    word_boundaries: true,
    type: "alias",
    alias: "voïce-botte",
  }]);
  assert.match(prompt, /diction entièrement française, sans accent anglais/);
  assert.doesNotMatch(prompt, /Annoncia/i);
});
