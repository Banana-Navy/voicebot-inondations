import { PageCta, SiteFooter, SiteHeader } from "../site-chrome";
import { assetPath } from "../asset-path";

const incidents = [
  { year: "2021", icon: "/icons/flood/house-flooded.png", place: "14–16 juillet · Wallonie", level: "209 communes", title: "Les pires inondations de l’histoire moderne wallonne", body: "Le bilan wallon officiel mentionne 39 décès, 100 000 personnes sinistrées, près de 48 000 bâtiments touchés et 66 500 foyers privés d’électricité.", use: "Le voicebot aurait pu répéter par zone les évacuations, lieux d’accueil, coupures et contacts utiles, y compris auprès des personnes peu connectées.", url: "https://www.wallonie.be/sites/default/files/2022-07/%5BCP%5D%20-%20Inondations%20de%20juillet%202021%20-%20Bilan%20et%20perspectives.pdf" },
  { year: "2021", icon: "/icons/flood/map.png", place: "24 juillet · Namur et Luxembourg", level: "Calamité reconnue", title: "Nouvelle série d’inondations", body: "De nombreuses communes ont été reconnues touchées, notamment Dinant, Namur, Rochefort, Walcourt et Yvoir.", use: "Un scénario vocal préparé par commune aurait pu annoncer les routes impraticables, l’évolution locale et les contacts utiles sans rédiger chaque appel manuellement.", url: "https://interieur.wallonie.be/home/calamites/reconnaissance-d-une-calamite-naturelle-publique/evenements-reconnus.html" },
  { year: "2023", icon: "/icons/flood/phone-alert.png", place: "Juin à septembre · plusieurs communes", level: "Épisodes localisés", title: "Inondations et fortes pluies reconnues", body: "La Wallonie répertorie des événements à Bièvre, Ciney, Hamois, Oupeye, Visé, La Louvière, Oreye, Seneffe et Fosses-la-Ville.", use: "Le voicebot aurait pu cibler uniquement les zones concernées, confirmer la diffusion des consignes et fournir un suivi d’appels à la cellule de crise.", url: "https://interieur.wallonie.be/home/calamites/reconnaissance-d-une-calamite-naturelle-publique/evenements-reconnus.html" },
  { year: "2024", icon: "/icons/flood/megaphone.png", place: "Janvier à août · Wallonie", level: "Plusieurs provinces", title: "Crues et ruissellements successifs", body: "Des inondations ont été reconnues à Bouillon, Chiny, Aubange, dans l’est de la province de Liège, le Brabant wallon et le Hainaut occidental.", use: "Une bibliothèque de messages validés aurait accéléré l’information sur la vigilance, les voiries, l’interdiction de traverser une zone inondée et le retour à domicile.", url: "https://interieur.wallonie.be/home/calamites/reconnaissance-d-une-calamite-naturelle-publique/evenements-reconnus.html" },
];

export default function Incidents() {
  return <main>
    <SiteHeader active="incidents" />
    <section className="subpage-hero shell"><p className="kicker accent">Chronologie officielle</p><h1>Des faits historiques,<br />jamais des alertes actuelles.</h1><div className="lead"><p>Cette sélection s’appuie sur des bilans et reconnaissances officiels. L’utilité du voicebot est une analyse contrefactuelle : il n’était pas intégré à ces dispositifs.</p></div></section>
    <section className="band band-cool"><div className="shell incident-list">{incidents.map((incident) => <article className="incident-item" key={incident.year + incident.place}><div className="incident-year"><time>{incident.year}</time><span>{incident.level}</span></div><img src={assetPath(incident.icon)} alt="" /><div><p className="kicker accent">{incident.place}</p><h2>{incident.title}</h2><p>{incident.body}</p><aside className="incident-use"><strong>Comment le voicebot aurait pu aider</strong>{incident.use}</aside><a className="official-link" href={incident.url} target="_blank" rel="noreferrer">Lire la source officielle</a></div></article>)}</div></section>
    <PageCta />
    <SiteFooter />
  </main>;
}
