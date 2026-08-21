"use client";
import { useState } from "react";
import { assetPath } from "./asset-path";

export function SiteHeader({ onCall }: { onCall?: () => void }) {
  const [open,setOpen]=useState(false);
  return <header className="site-header"><div className="shell header-inner">
    <a className="brand" href={assetPath("/")}>
      <img src={assetPath("/flood-logo.png")} alt="Logo Voicebot Inondations" />
      <span className="brand-copy"><strong>VOICEBOT INNONDATIONS</strong></span>
    </a>
    <nav className={open?"open":""}><a href={assetPath("/#reflexes")}>Réflexes</a><a href={assetPath("/#utilite")}>Utilité</a><a href={assetPath("/incidents/")}>Inondations passées</a><a href={assetPath("/sources/")}>Sources</a></nav>
    <button className="header-call" onClick={onCall}>☎ <span>Tester</span></button>
    <button className="menu" onClick={()=>setOpen(!open)} aria-label="Ouvrir le menu">☰</button>
  </div></header>;
}

export function SiteFooter(){return <footer className="site-footer"><div className="shell">
  <div className="footer-grid">
    <div className="footer-brand"><img src={assetPath("/brand/banana-navy-logo.png")} alt="Banana Navy" /><div><h2>Nos engagements</h2><p>Des outils de communication de crise utiles, audités et conçus pour renforcer — jamais remplacer — les canaux officiels.</p></div></div>
    <ul className="commitments"><li><b>✓</b>Protection des données</li><li><b>◎</b>Infrastructure européenne</li><li><b>◉</b>Contrôle humain</li><li><b>↗</b>Traçabilité des messages</li></ul>
    <div className="footer-contact"><strong>Annoncia Voicebot</strong><p>Projet d’information et de démonstration</p><a href="mailto:contact@annoncia.be">contact@annoncia.be</a></div>
  </div>
  <div className="partners"><div><strong>Écosystème & reconnaissances</strong><div className="partner-logos"><img src={assetPath("/brand/badge-defence.png")} alt="Défense"/><img src={assetPath("/brand/badge-cyberforce.png")} alt="CyberForce"/><img src={assetPath("/brand/badge-crest-royal.png")} alt="Écusson royal"/><img src={assetPath("/brand/badge-strike-it.png")} alt="Strike IT"/></div></div><p>Les logos présentés documentent l’écosystème et les reconnaissances du projet. Ils ne constituent pas une validation des consignes par ces organisations.</p></div>
  <div className="legal"><span>© 2026 Annoncia · Banana Navy</span><div><a href={assetPath("/sources/")}>Sources officielles</a><a href={assetPath("/mentions-legales/")}>Mentions légales</a><a href={assetPath("/confidentialite/")}>Confidentialité</a></div></div>
  </div></footer>}
