import { PageCta, SiteFooter, SiteHeader } from "../site-chrome";
import { assetPath } from "../asset-path";

const sources = [
  ["Belgique", "Centre de Crise National", "Inondation pluviale : préparation et bons réflexes avant, pendant et après", "https://centredecrise.be/fr/risques-en-belgique/risques-naturels/inondation-pluviale-eaux-de-ruissellement", "/icons/flood/water-shield.png"],
  ["Wallonie", "SPW Environnement", "Que faire en cas de crue ?", "https://environnement.wallonie.be/home/gestion-environnementale/risques-climatiques/inondations/gestion-de-crise/que-faire-en-cas-de-crue.html", "/icons/flood/map.png"],
  ["Belgique", "BE-Alert", "Canal officiel d’alerte de la population", "https://www.be-alert.be/fr", "/icons/flood/bell.png"],
  ["Belgique", "Belgium.be", "Prévention et démarches en cas de dégâts", "https://www.belgium.be/fr/logement/problemes_de_logement/catastrophes_naturelles/inondations", "/icons/flood/house-shield.png"],
  ["Wallonie", "Service régional des calamités", "Événements officiellement reconnus par année et commune", "https://interieur.wallonie.be/home/calamites/reconnaissance-d-une-calamite-naturelle-publique/evenements-reconnus.html", "/icons/flood/folder.png"],
  ["Wallonie", "Gouvernement wallon", "Bilan et perspectives des inondations de juillet 2021", "https://www.wallonie.be/sites/default/files/2022-07/%5BCP%5D%20-%20Inondations%20de%20juillet%202021%20-%20Bilan%20et%20perspectives.pdf", "/icons/flood/analytics.png"],
  ["Wallonie", "Géoportail de la Wallonie", "Information géographique au service des inondations de juillet 2021", "https://geoportail.wallonie.be/home/ressources/autour-du-geoportail/linformation-geographique-et-la-geomatique-au-service-des-inondations-de-juillet-2021.html", "/icons/flood/pin.png"],
  ["Belgique", "Centre de Crise National", "Belgian National Risk Assessment 2023–2026", "https://centredecrise.be/fr/documentation/publications/belgian-national-risk-assessment-2023-2026", "/icons/flood/tasks.png"],
];

export default function Sources() {
  return <main>
    <SiteHeader active="sources" />
    <section className="subpage-hero shell"><p className="kicker accent">Sources officielles</p><h1>Nos sources de référence</h1><div className="lead"><p>Le contenu du voicebot n’est pas improvisé. Son corpus repose sur les consignes des autorités belges et wallonnes.</p><p>Une source permanente explique un principe général. Une situation actuelle exige une publication récente, applicable et validée.</p></div></section>
    <section className="band band-sand"><div className="shell"><div className="source-list">{sources.map(([zone, name, description, url, icon]) => <a className="source-item" href={url} target="_blank" rel="noreferrer" key={url}><img src={assetPath(icon)} alt="" /><div><p className="kicker">{zone}</p><h2>{name}</h2><p>{description}</p><small>{url}</small></div></a>)}</div><aside className="method-card"><h2>Règle de publication</h2><p>Sans période de validité, source accessible et validation humaine, le voicebot indique que l’information officielle actuelle vérifiée est indisponible. Il ne transforme jamais un événement historique en alerte actuelle.</p></aside></div></section>
    <PageCta />
    <SiteFooter />
  </main>;
}
