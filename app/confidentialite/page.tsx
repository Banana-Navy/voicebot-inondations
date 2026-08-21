import { SiteFooter, SiteHeader } from "../site-chrome";

export default function Privacy() {
  return <main>
    <SiteHeader />
    <section className="subpage-hero shell"><p className="kicker accent">Données &amp; transparence</p><h1>Confidentialité</h1><div className="lead"><p>Ce que le prototype utilise pendant un test vocal et les limites applicables avant tout usage opérationnel.</p></div></section>
    <section className="legal-content shell">
      <article><h2>Microphone</h2><p>Le navigateur demande votre autorisation avant d’activer le microphone. Vous pouvez arrêter le test à tout moment. Aucun microphone n’est nécessaire pour lire le site.</p></article>
      <article><h2>Conversation de démonstration</h2><p>L’accueil en français identifie le service et rappelle que le danger immédiat exige d’appeler le 112. L’agent actuel ne conserve pas l’enregistrement audio.</p></article>
      <article><h2>Informations à ne pas communiquer</h2><p>Le service d’information générale n’a pas besoin de votre nom, de votre adresse complète, de votre numéro national ou d’un dossier médical. Si une personne est en danger, fermez le test et appelez le 112.</p></article>
      <article><h2>Finalité</h2><p>Les éventuelles données de test servent uniquement à évaluer le comportement du voicebot, identifier les défaillances et documenter les versions.</p></article>
      <article><h2>Contact</h2><p>Pour toute question : <a href="mailto:marc@banana-navy.com">marc@banana-navy.com</a>.</p></article>
    </section>
    <SiteFooter />
  </main>;
}
