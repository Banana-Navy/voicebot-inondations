"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PageIntro, SiteFooter, SiteHeader } from "./site-chrome";
import { assetPath } from "./asset-path";

const AGENT_ID = "agent_4301m0hx235sf249h7gznvw3n9bg";

const reflexes = [
  ["/icons/flood/sandbags.png", "Protégez", "Surélevez les objets utiles, protégez les ouvertures et mettez les documents importants à l’abri."],
  ["/icons/flood/water-shield.png", "Coupez", "Coupez le gaz, l’électricité et l’eau si nécessaire et seulement si vous pouvez le faire sans danger."],
  ["/icons/flood/bell.png", "Écoutez", "Suivez BE-Alert, votre commune, les services de secours et les canaux officiels."],
];

const scenarios = [
  { icon: "/icons/flood/rain-cloud.png", label: "Pluies intenses", description: "Précipitations abondantes, ruissellement ou crue éclair" },
  { icon: "/icons/flood/gauge.png", label: "Montée des eaux", description: "Niveau inhabituel dans une rue, une cave ou près d’un cours d’eau" },
  { icon: "/icons/flood/car.png", label: "Route inondée", description: "Chaussée recouverte, circulation interrompue ou véhicule menacé" },
  { icon: "/icons/flood/house-flooded.png", label: "Habitation touchée", description: "Eau dans le logement, la cave ou aux abords immédiats" },
  { icon: "/icons/flood/lifebuoy.png", label: "Besoin d’évacuer", description: "Question sur le départ, l’hébergement ou les personnes vulnérables" },
  { icon: "/icons/flood/warning.png", label: "Je ne sais pas quoi faire", description: null },
];

const sources = [
  ["Centre de Crise National", "Préparation et bons réflexes avant, pendant et après", "https://centredecrise.be/fr/risques-en-belgique/risques-naturels/inondation-pluviale-eaux-de-ruissellement", "/icons/flood/water-shield.png"],
  ["SPW Environnement", "Conduite à tenir en cas de crue et d’évacuation", "https://environnement.wallonie.be/home/gestion-environnementale/risques-climatiques/inondations/gestion-de-crise/que-faire-en-cas-de-crue.html", "/icons/flood/map.png"],
  ["BE-Alert", "Canal officiel d’alerte de la population", "https://www.be-alert.be/fr", "/icons/flood/bell.png"],
  ["Wallonie", "Événements reconnus et retours d’expérience", "https://interieur.wallonie.be/home/calamites/reconnaissance-d-une-calamite-naturelle-publique/evenements-reconnus.html", "/icons/flood/folder.png"],
];

export default function Home() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [callState, setCallState] = useState<"idle" | "connecting" | "connected" | "error">("idle");
  const conversation = useRef<{ endSession: () => Promise<void> } | null>(null);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.setAttribute("data-visible", "true")), { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    const heroImage = document.querySelector<HTMLElement>(".hero-background");
    const onScroll = () => heroImage?.style.setProperty("--hero-y", `${Math.min(window.scrollY, 900) * 0.08}px`);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  async function startCall() {
    setPanelOpen(true);
    setCallState("connecting");
    try {
      const { Conversation } = await import("@elevenlabs/client");
      await navigator.mediaDevices.getUserMedia({ audio: true });
      conversation.current = await Conversation.startSession({ agentId: AGENT_ID, onConnect: () => setCallState("connected"), onDisconnect: () => setCallState("idle"), onError: () => setCallState("error") });
    } catch { setCallState("error"); }
  }

  async function endCall() {
    await conversation.current?.endSession();
    conversation.current = null;
    setCallState("idle");
    setPanelOpen(false);
  }

  return <main>
    <div className="safety-strip">Prototype d’information — en cas de danger immédiat, appelez le <strong>112</strong> · aide non urgente : <strong>1722</strong></div>
    <div className="home-stage">
      <SiteHeader active="home" onTest={startCall} transparent />
      <section className="home-hero" id="top">
        <picture><source media="(max-width: 700px)" srcSet={assetPath("/visuals/flood-hero-mobile-art.png")} /><img className="hero-background" src={assetPath("/visuals/flood-desktop-clean.png")} alt="Maison entourée par les eaux sous un ciel d’orage, illustration low-poly" /></picture>
        <div className="hero-overlay" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <h1 data-reveal><span>INFORMEZ.</span><strong>ALERTEZ.<br />PROTÉGEZ.</strong></h1>
            <h2>UNE VOIX FIABLE AVANT, PENDANT ET APRÈS L’INONDATION</h2>
            <p>Le voicebot diffuse des informations officielles, contextualisées et compréhensibles, sans rumeur, diagnostic ni invention.</p>
            <div className="hero-arguments">
              <article><img src={assetPath("/icons/flood/headset.png")} alt="" /><span>Information<br />vocale claire</span></article>
              <article><img src={assetPath("/icons/flood/bell.png")} alt="" /><span>Alerte<br />actualisable</span></article>
              <article><img src={assetPath("/icons/flood/lock.png")} alt="" /><span>Contrôle<br />et sécurité</span></article>
            </div>
            <div className="hero-actions" id="test"><button className="button button-primary button-large" onClick={startCall}><img src={assetPath("/icons/flood/phone.png")} alt="" />Tester le voicebot</button><a className="text-link" href="#guidance">Comment ça fonctionne</a></div>
          </div>
        </div>
        <div className="hero-trust shell"><img src={assetPath("/icons/flood/water-shield.png")} alt="" /><span>Ce test ne contacte pas les secours. Danger immédiat : 112. Aide non urgente des pompiers : 1722.</span></div>
      </section>
    </div>

    <section className="band band-sand" id="guidance">
      <div className="shell"><PageIntro kicker="Les bons réflexes officiels" title={<>Protégez. Coupez. Écoutez.</>}><p>La mise en sécurité et les instructions des autorités priment. Le voicebot les rend accessibles par la voix et les répète sans les déformer.</p></PageIntro>
        <div className="three-card-grid stack-mobile">{reflexes.map(([icon, title, text]) => <article className="content-card" data-reveal key={title}><img className="card-icon" src={assetPath(icon)} alt="" /><h3>{title}</h3><p>{text}</p></article>)}</div>
        <aside className="official-note" data-reveal><img src={assetPath("/icons/flood/warning.png")} alt="" /><div><h3>Ne traversez jamais une route inondée, même partiellement.</h3><p>L’eau peut masquer un affaissement, déplacer un véhicule et monter rapidement. Limitez vos déplacements et suivez les déviations officielles.</p></div><a href="https://environnement.wallonie.be/home/gestion-environnementale/risques-climatiques/inondations/gestion-de-crise/que-faire-en-cas-de-crue.html" target="_blank" rel="noreferrer">Consulter la source officielle</a></aside>
      </div>
    </section>

    <section className="band band-cool">
      <div className="shell"><PageIntro kicker="Situations couvertes" title={<>Décrivez ce que vous observez.<br />Le voicebot vous guide.</>}><p>Ces catégories structurent la conversation. Elles ne constituent ni une confirmation d’alerte actuelle, ni un ordre d’évacuation.</p></PageIntro>
        <div className="scenario-grid stack-mobile">{scenarios.map(({ icon, label, description }) => <article className="scenario-card" data-reveal key={label}><img src={assetPath(icon)} alt="" /><h3>{label}</h3>{description && <p>{description}</p>}</article>)}</div>
        <div className="center-link"><Link className="text-link" href="/architecture">Explorer la technologie et les couches de contrôle</Link></div>
      </div>
    </section>

    <section className="band band-dark">
      <div className="shell"><PageIntro kicker="Histoire & préparation" title={<>Les inondations passées expliquées sans confusion.</>}><p>L’histoire démontre l’utilité d’un canal vocal complémentaire. Elle ne devient jamais une alerte actuelle.</p></PageIntro>
        <div className="incident-preview stack-mobile"><article data-reveal><time>2021</time><h3>Vallée de la Vesdre</h3><p>39 décès en Wallonie, 100 000 personnes sinistrées et 209 communes touchées.</p></article><article data-reveal><time>2023</time><h3>Épisodes localisés</h3><p>Plusieurs événements reconnus à Ciney, Visé, Seneffe, La Louvière et Fosses-la-Ville.</p></article><article data-reveal><time>2024</time><h3>Crues & ruissellements</h3><p>Des événements reconnus dans plusieurs provinces et de nombreuses communes.</p></article></div>
        <div className="center-link"><Link className="text-link light" href="/incidents">Voir la chronologie officielle et l’utilité du voicebot</Link></div>
      </div>
    </section>

    <section className="band band-cream">
      <div className="shell"><PageIntro kicker="Sources officielles" title={<>Les sources avant les réponses.</>}><p>Aucune FAQ inventée : chaque réponse de sécurité doit renvoyer vers une autorité identifiée et une publication officielle.</p></PageIntro>
        <div className="source-preview">{sources.map(([name, desc, url, icon]) => <a key={url} href={url} target="_blank" rel="noreferrer" data-reveal><img src={assetPath(icon)} alt="" /><div><h3>{name}</h3><p>{desc}</p></div></a>)}</div>
        <div className="center-link"><Link className="text-link" href="/sources">Voir le registre complet des sources</Link></div>
      </div>
    </section>

    <section className="page-cta"><div className="shell"><div><h2>Écoutez le voicebot maintenant.</h2><p>Vérifiez sa voix, ses limites et sa manière de transmettre les consignes officielles.</p></div><button className="button button-primary button-large" onClick={startCall}><img src={assetPath("/icons/flood/phone.png")} alt="" />Tester le voicebot</button></div></section>
    <SiteFooter />

    {panelOpen && <div className="call-panel" role="dialog" aria-modal="true" aria-label="Test du voicebot"><button className="panel-backdrop" onClick={endCall} aria-label="Fermer" /><div className="panel-card"><button className="panel-close" onClick={endCall}>Fermer</button><img className="panel-logo" src={assetPath("/flood-logo.png")} alt="" /><p className="kicker accent">VOICEBOT INNONDATIONS</p><h2>{callState === "connecting" ? "Connexion…" : callState === "connected" ? "Je vous écoute" : callState === "error" ? "Connexion indisponible" : "Prêt"}</h2><p>{callState === "error" ? "Vérifiez l’autorisation du microphone et réessayez." : "Parlez naturellement. Vous pouvez interrompre le voicebot."}</p>{callState === "error" ? <button className="button button-primary" onClick={startCall}>Réessayer</button> : <button className="button button-secondary" onClick={endCall}>Terminer le test</button>}<small>Ce test n’est pas un service d’urgence.</small></div></div>}
  </main>;
}
