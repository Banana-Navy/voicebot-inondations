import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export default function Legal() {
  return <main>
    <SiteHeader />
    <section className="subpage-hero shell"><p className="kicker accent">Informations juridiques</p><h1>Mentions légales</h1><div className="lead"><p>Informations relatives au prototype Voicebot Inondations.</p></div></section>
    <section className="legal-content shell">
      <article><h2>Éditeur et contact</h2><p><strong>Banana Navy</strong><br />Rue Antoine de Saint-Exupéry 2<br />6041 Charleroi, Belgique</p><p>Contact : Marc-Antoine Cajot<br /><a href="tel:+32495277044">+32 495 277 044</a><br /><a href="mailto:marc@banana-navy.com">marc@banana-navy.com</a><br /><a href="https://www.banana-navy.ai">www.banana-navy.ai</a></p></article>
      <article><h2>Nature du service</h2><p>Ce site présente un prototype vocal d’information en français. Il ne représente pas le Centre de Crise National, une commune ou un service de secours. Il ne remplace ni BE-Alert, ni le 1722, ni le 112.</p></article>
      <article><h2>Responsabilité</h2><p>Les principes généraux renvoient vers les publications officielles. Lors d’un événement réel, suivez toujours les consignes actuelles des autorités. Le service ne prédit pas une crue, ne déclare pas une route praticable et n’ordonne pas une évacuation.</p></article>
      <article><h2>Propriété intellectuelle</h2><p>Les textes, interfaces et éléments techniques originaux du prototype sont protégés. Les marques, publications et emblèmes de tiers restent la propriété de leurs titulaires respectifs.</p></article>
      <article><h2>Sources</h2><p>Le registre de référence et les liens directs vers les organismes compétents sont disponibles sur la page <Link href="/sources">Sources officielles</Link>.</p></article>
    </section>
    <SiteFooter />
  </main>;
}
