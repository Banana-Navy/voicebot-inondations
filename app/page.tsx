"use client";

import { useRef, useState } from "react";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { assetPath } from "./asset-path";

const officialReflexes = [
  ["01", "Restez informé", "Suivez les bulletins de l’IRM, les autorités locales, BE-Alert et les services de secours."],
  ["02", "Limitez les déplacements", "Ne vous engagez jamais sur une route inondée, même partiellement, et évitez les eaux troubles."],
  ["03", "Mettez-vous en sécurité", "Montez les biens, coupez les arrivées si nécessaire et préparez-vous à évacuer sur instruction des secours."],
];

const useCases = [
  ["Avant", "Prévenir sans saturer les équipes", "Appels sortants ciblés par quartier : niveau de vigilance, préparation du logement, rappel BE-Alert et consignes locales."],
  ["Pendant", "Diffuser une consigne qui évolue", "Mise à jour instantanée d’un message vocal : rues fermées, centre d’accueil, évacuation, eau potable ou coupure de réseau."],
  ["Après", "Accompagner le retour", "Informations répétables sur le nettoyage, les photos pour l’assurance, l’eau du robinet et les démarches communales."],
];

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [callState, setCallState] = useState<"idle" | "connecting" | "connected" | "error">("idle");
  const conversation = useRef<{ endSession: () => Promise<void> } | null>(null);

  async function startCall() {
    setDemoOpen(true);
    setCallState("connecting");
    try {
      const { Conversation } = await import("@elevenlabs/client");
      await navigator.mediaDevices.getUserMedia({ audio: true });
      conversation.current = await Conversation.startSession({
        agentId: "agent_4301m0hx235sf249h7gznvw3n9bg",
        onConnect: () => setCallState("connected"),
        onDisconnect: () => setCallState("idle"),
        onError: () => setCallState("error"),
      });
    } catch { setCallState("error"); }
  }

  async function endCall() {
    await conversation.current?.endSession();
    conversation.current = null;
    setCallState("idle");
    setDemoOpen(false);
  }
  return <main>
    <div className="emergency-strip">Danger vital : <strong>112</strong> · Aide non urgente des pompiers : <strong>1722</strong></div>
    <SiteHeader onCall={startCall} />

    <section className="hero" id="accueil">
      <picture className="hero-picture">
        <source media="(max-width: 700px)" srcSet={assetPath("/visuals/flood-mobile-clean.png")} />
        <img src={assetPath("/visuals/flood-desktop-clean.png")} alt="Maison entourée par les eaux sous un ciel d’orage, illustration low-poly" />
      </picture>
      <div className="hero-shade" />
      <div className="shell hero-content">
        <p className="eyebrow">Voicebot Inondations</p>
        <h1>Informez.<br />Alertez.<br />Protégez.</h1>
        <p className="hero-lead">Le voicebot qui relaie vos messages d’alerte et d’information avant, pendant et après une inondation, avec clarté, fiabilité et empathie.</p>
        <div className="hero-actions">
          <button className="primary" onClick={startCall}>☎ Tester le voicebot</button>
          <a className="secondary" href="#utilite">Voir son utilité</a>
        </div>
      </div>
      <div className="shell signal-grid" aria-label="Points forts">
        <article><b>◖))</b><span><strong>Diffusion vocale</strong>Messages clairs et naturels</span></article>
        <article><b>!</b><span><strong>Alertes en temps réel</strong>Information immédiatement actualisée</span></article>
        <article><b>✓</b><span><strong>Fiable et sécurisé</strong>Traçabilité et contrôle humain</span></article>
      </div>
    </section>

    <section className="band light" id="reflexes">
      <div className="shell">
        <p className="eyebrow">Les bons réflexes officiels</p>
        <h2>Une consigne utile est une consigne comprise.</h2>
        <p className="intro">Le voicebot ne remplace ni le 112, ni BE-Alert, ni les autorités. Il complète leurs canaux en donnant une information vocale cohérente, accessible et répétable.</p>
        <div className="three-grid">
          {officialReflexes.map(([n,t,d]) => <article className="number-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
        <a className="official-note" href="https://centredecrise.be/fr/risques-en-belgique/risques-naturels/inondation-pluviale-eaux-de-ruissellement" target="_blank" rel="noreferrer">Consulter les consignes du Centre de Crise National ↗</a>
      </div>
    </section>

    <section className="band navy" id="utilite">
      <div className="shell">
        <p className="eyebrow">Avant · pendant · après</p>
        <h2>Une voix fiable quand chaque minute compte.</h2>
        <div className="three-grid">
          {useCases.map(([phase,t,d]) => <article className="phase-card" key={phase}><span>{phase}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </div>
    </section>

    <section className="band history">
      <div className="shell history-grid">
        <div>
          <p className="eyebrow">Retours d’expérience belges</p>
          <h2>Les événements passés montrent le besoin.</h2>
          <p className="intro">Les exemples ci-contre décrivent ce qu’un canal vocal complémentaire aurait pu apporter. Ils ne prétendent pas réécrire la gestion réelle des crises.</p>
          <a className="text-link" href={assetPath("/incidents/")}>Voir tous les cas documentés →</a>
        </div>
        <div className="timeline">
          <article><time>2021</time><div><h3>Vallée de la Vesdre et Wallonie</h3><p>39 décès en Wallonie, 100 000 personnes sinistrées et 209 communes touchées. Le voicebot aurait pu relayer par zone les évacuations, centres d’accueil et coupures de réseaux.</p></div></article>
          <article><time>2023</time><div><h3>Plusieurs communes wallonnes</h3><p>Des événements reconnus à Bièvre, Ciney, Hamois, Oupeye, Visé, La Louvière, Oreye, Seneffe et Fosses-la-Ville. Un message vocal localisé aurait complété l’alerte numérique.</p></div></article>
          <article><time>2024</time><div><h3>Crues et ruissellements localisés</h3><p>Des inondations reconnues dans plusieurs provinces. Le voicebot aurait permis de segmenter les informations rue par rue et de rappeler 112/1722.</p></div></article>
        </div>
      </div>
    </section>

    <section className="band capabilities">
      <div className="shell">
        <p className="eyebrow">Architecture opérationnelle</p>
        <h2>Conçu pour s’intégrer à une cellule de crise.</h2>
        <div className="six-grid">
          {["Appels sortants massifs","Multilingue","Ciblage géographique","Suivi et rapports","Intégrations simples","Voix naturelles et empathiques"].map((x,i)=><article key={x}><b>{["☎","◎","⌖","▥","⌁","◉"][i]}</b><h3>{x}</h3></article>)}
        </div>
        <p className="guardrail">Chaque campagne reste déclenchée et validée par une autorité habilitée. Les messages officiels font foi.</p>
      </div>
    </section>

    <SiteFooter />

    {demoOpen && <div className="modal" role="dialog" aria-modal="true" aria-label="Démonstration du voicebot">
      <button className="modal-backdrop" onClick={endCall} aria-label="Fermer" />
      <div className="modal-card"><button className="close" onClick={endCall}>Fermer ×</button><img src={assetPath("/annoncia-logo.png")} alt="" /><p className="eyebrow">Démonstration vocale</p><h2>{callState === "connected" ? "Claire vous écoute." : callState === "connecting" ? "Connexion…" : callState === "error" ? "Microphone indisponible." : "Appel terminé."}</h2><p>{callState === "connected" ? "Posez votre question en français. En cas de danger immédiat, appelez toujours le 112." : callState === "error" ? "Autorisez l’accès au microphone puis réessayez, ou contactez-nous pour une démonstration." : "Préparation de la conversation sécurisée."}</p>{callState === "error" ? <button className="primary" onClick={startCall}>Réessayer</button> : <button className="primary" onClick={endCall}>Terminer l’appel</button>}</div>
    </div>}
  </main>;
}
