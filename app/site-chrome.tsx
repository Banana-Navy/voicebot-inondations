"use client";

import Link from "next/link";
import { useState } from "react";
import { assetPath } from "./asset-path";

type HeaderProps = {
  active?: "home" | "architecture" | "incidents" | "sources";
  onTest?: () => void;
  transparent?: boolean;
};

const links = [
  { href: "/", label: "Accueil", key: "home" },
  { href: "/#test", label: "Appeler quelqu’un", key: null },
  { href: "/architecture", label: "Technologie", key: "architecture" },
  { href: "/sources", label: "Sources", key: "sources" },
] as const;

export function SiteHeader({ active, onTest, transparent = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${transparent ? "is-transparent" : ""}`}>
      <div className="shell header-inner">
        <Link className="site-brand" href="/" aria-label="Voicebot Inondations, accueil">
          <img src={assetPath("/flood-logo.png")} alt="" />
          <span><b>VOICEBOT</b><em>INNONDATIONS</em></span>
        </Link>
        <nav className={open ? "is-open" : ""} aria-label="Navigation principale">
          {links.map((link) => <Link key={link.href} className={link.key && active === link.key ? "active" : ""} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        </nav>
        {onTest ? (
          <button className="button button-primary header-action" aria-label="Appeler le bot" onClick={onTest}><img src={assetPath("/icons/flood/phone.png")} alt="" /><span>Appeler le bot</span></button>
        ) : (
          <Link className="button button-primary header-action" aria-label="Appeler le bot" href="/#test"><img src={assetPath("/icons/flood/phone.png")} alt="" /><span>Appeler le bot</span></Link>
        )}
        <button className="menu-button" type="button" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  );
}

const commitments = [
  ["/icons/flood/clock.png", "Disponible 24 h/24"],
  ["/icons/flood/lock.png", "Protection anti-hallucination"],
  ["/icons/flood/water-shield.png", "Sécurité et RGPD"],
  ["/icons/flood/folder.png", "Bases de données complexes"],
];

export function SiteFooter() {
  return (
    <footer id="site-footer" className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src={assetPath("/brand/banana-navy-logo.png")} alt="Banana Navy" />
          <div><h2>Trusted voice agents<br />&amp; agentic systems</h2><p>Nous concevons des VoiceBot sécurisés et hybrides, alliant intelligence vocale et systèmes de contrôle fiables.</p></div>
        </div>
        <div>
          <h2 className="kicker muted">Nos engagements</h2>
          <ul className="commitment-grid">{commitments.map(([icon, label]) => <li key={label}><span><img src={assetPath(icon)} alt="" /></span><b>{label}</b></li>)}</ul>
        </div>
        <div className="footer-contact">
          <h2 className="kicker muted">Contact</h2>
          <address><strong>Marc-Antoine Cajot</strong><a href="tel:+32495277044">+32 495 277 044</a><a href="mailto:marc@banana-navy.com">marc@banana-navy.com</a><a href="https://www.banana-navy.ai" target="_blank" rel="noreferrer">www.banana-navy.ai</a><span>Rue Antoine de Saint-Exupéry 2<br />6041 Charleroi, Belgique</span></address>
        </div>
      </div>
      <div className="shell partner-band">
        <div><p className="kicker muted">Programme &amp; institutions partenaires</p><div className="partner-logos"><img src={assetPath("/brand/badge-defence.png")} alt="Défense belge" /><img src={assetPath("/brand/badge-crest-royal.png")} alt="Écusson royal" /><img src={assetPath("/brand/badge-strike-it.png")} alt="STRIKE IT" /><img src={assetPath("/brand/badge-cyberforce.png")} alt="Cyber Force" /></div></div>
        <div><p>Banana Navy a été sélectionnée et est soutenue par la Défense belge dans le cadre du programme STRIKE IT, pour le développement d&apos;une technologie de VoiceBot sécurisée et fiable.</p><p lang="en">Banana Navy has been selected and is supported by the Belgian Defence through the STRIKE IT program for the development of a secure and reliable VoiceBot technology.</p></div>
      </div>
    </footer>
  );
}

export function PageIntro({ kicker, title, children }: { kicker: string; title: React.ReactNode; children: React.ReactNode }) {
  return <div className="section-intro"><p className="kicker accent">{kicker}</p><h2>{title}</h2><div className="lead">{children}</div></div>;
}

export function PageCta() {
  return <section className="page-cta"><div className="shell"><div><h2>Parlez au voicebot, maintenant.</h2><p>Une démonstration dure moins d&apos;une minute : vous lancez l&apos;échange et le VoiceBot vous présente les bons réflexes face aux inondations.</p></div><Link className="button button-primary" href="/#test"><img src={assetPath("/icons/flood/phone.png")} alt="" />Appeler le bot</Link></div></section>;
}
