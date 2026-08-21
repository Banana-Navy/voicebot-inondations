import { PageCta, PageIntro, SiteFooter, SiteHeader } from "../site-chrome";
import { assetPath } from "../asset-path";

const flow = [
  ["1", "/icons/flood/phone.png", "Entrée télécom", "Réception des appels ou interactions via les canaux officiels de l’organisation.", "SIP trunk, VMS, lignes dédiées, numéro officiel"],
  ["2", "/icons/flood/water-shield.png", "Protection réseau", "Filtrage des appels anormaux, tentatives de fraude, surcharge ou comportements automatisés.", "SBC, anti-DDoS, contrôle d’admission"],
  ["3", "/icons/flood/megaphone.png", "Analyse audio", "Le signal est analysé pour repérer bruit, replays, anomalies ou signaux suspects.", "Analyse vocale et détection d’anomalies"],
  ["4", "/icons/flood/chat.png", "Compréhension métier", "Le moteur comprend la langue, l’intention, le contexte et les règles propres à l’organisation.", "Intentions, contexte, base de connaissance"],
  ["5", "/icons/flood/tasks.png", "Décision & routage", "Réponse automatisée, escalade, transfert humain ou déclenchement d’un scénario précis.", "Règles métier, priorités, niveaux de risque"],
  ["6", "/icons/flood/bell.png", "Sorties sécurisées", "Envoi d’informations, notifications, transferts et mises à jour vers les systèmes autorisés.", "CRM, SMS, messagerie, opérateurs"],
  ["7", "/icons/flood/headset.png", "Optimisation vocale", "Réduction du bruit et amélioration de la qualité pour maintenir une conversation intelligible.", "Nettoyage audio et restitution claire"],
];

const protections = [
  { num: "01", icon: "/icons/flood/phone.png", title: "Téléphonie & accès", summary: "Protège le point d’entrée du système.", points: ["Contrôle des connexions entrantes et sortantes", "Gestion des flux et de la charge", "Limitation des abus et des usages répétés", "Isolation de l’infrastructure vocale", "Protection contre certains comportements anormaux"] },
  { num: "02", icon: "/icons/flood/lock.png", title: "Sécurité conversationnelle", summary: "Fonctionne parallèlement au moteur, pas à l’intérieur.", points: ["Analyse des entrées pendant l’échange", "Restrictions conversationnelles", "Protection contre les tentatives de détournement", "Contrôle des actions autorisées", "Gestion des comportements hors périmètre"] },
  { num: "03", icon: "/icons/flood/folder.png", title: "Connaissance & règles métier", summary: "Le bot travaille dans un périmètre défini, pas en roue libre.", points: ["Sources validées comme unique matière première", "Règles propres au dispositif déployé", "Limites explicites de ce qui peut être dit", "Escalade prévue quand la situation le demande"] },
];

const parallel = [
  { icon: "/icons/flood/megaphone.png", title: "Sécurité audio", summary: "Surveille le signal en temps réel avant qu’une réponse métier soit exécutée.", items: [["Analyse et normalisation", "Nettoyage, contrôle du signal et stabilité audio."], ["Détection voix / bruit", "Différenciation entre parole utile, silence et perturbations."], ["Détection d’anomalies", "Replay, signaux suspects, comportements audio atypiques."]] },
  { icon: "/icons/flood/chat.png", title: "Moteur conversationnel métier", summary: "Comprend, contextualise et formule une réponse selon des règles contrôlées.", items: [["Détection langue & intention", "FR, NL, EN ou autres langues selon le déploiement."], ["Réponse contextualisée", "Réponses guidées par des procédures et des contenus validés."], ["Connexion aux systèmes", "CRM, bases officielles, ticketing, ERP ou outils internes."]] },
  { icon: "/icons/flood/sync.png", title: "Décision & routage", summary: "Applique les priorités de l’organisation avant toute action automatisée.", items: [["Évaluation multi-critères", "Contexte, priorité, niveau de risque et scénario métier."], ["Escalade humaine", "Transfert vers un opérateur dès qu’un seuil défini est atteint."], ["Traçabilité", "Journalisation des décisions, actions et événements techniques."]] },
];

const technology = [
  ["/icons/flood/phone.png", "Téléphonie sécurisée", "SBC, trunks sécurisés, filtrage SIP, anti-fraude et protection contre la surcharge."],
  ["/icons/flood/headset.png", "Traitement audio temps réel", "Nettoyage audio, analyse du signal, détection de voix et d’anomalies."],
  ["/icons/flood/chat.png", "Moteur conversationnel vocal", "Intentions, contexte, RAG, réponses guidées, multilingue et scénarios déterministes."],
  ["/icons/flood/folder.png", "Base de connaissances contrôlée", "Bases relationnelles, vectorielles, historiques de conversation et référentiels métiers."],
  ["/icons/flood/lock.png", "Couche de sécurité parallèle", "Analyse des entrées, restrictions conversationnelles et décisions de sécurité, appliquées indépendamment du moteur qui parle."],
  ["/icons/flood/gear.png", "Orchestration des workflows", "Déclenchements, escalades, notifications, mises à jour et règles métier."],
  ["/icons/flood/analytics.png", "Interfaces & supervision", "Tableaux de bord, monitoring, suivi des incidents et contrôle opérateur."],
  ["/icons/flood/tasks.png", "Journalisation & traçabilité", "Logs centralisés, alertes, auditabilité, politiques de conservation et traçabilité."],
  ["/icons/flood/cloud-upload.png", "API sécurisées", "Connexion aux outils existants via API, webhooks et connecteurs dédiés, sans imposer de remplacement complet du système."],
];

const faqs = [
  ["Pourquoi cette architecture est-elle plus fiable qu’un simple voicebot ?", "Parce que la compréhension conversationnelle n’est qu’une couche parmi d’autres. Le trafic télécom, le signal audio, les règles métier, le routage et la traçabilité sont contrôlés séparément. Une anomalie peut donc être bloquée ou escaladée sans dépendre uniquement du modèle d’IA."],
  ["Peut-on intégrer la solution à un CRM, un ERP ou un système interne ?", "Oui. L’architecture est pensée comme une couche d’orchestration qui se connecte aux systèmes existants via API, webhooks, files d’événements ou connecteurs dédiés."],
  ["Est-ce uniquement destiné aux situations de crise ?", "Non. La même technologie peut être utilisée pour l’accueil téléphonique, les pics de charge, l’assistance, la qualification, l’orientation, les alertes, les opérations terrain ou les processus métiers récurrents."],
  ["Que se passe-t-il en cas de doute ou de situation sensible ?", "Les seuils de sécurité sont configurables. Lorsqu’une demande dépasse un niveau défini, le système peut stopper l’automatisation, demander une validation, transférer vers un humain ou déclencher un scénario de secours."],
];

const partnerBadges = [
  ["/brand/badge-defence.png", "Belgian Defence"],
  ["/brand/badge-crest-royal.png", "Per Ardua Gradior — écusson royal"],
  ["/brand/badge-strike-it.png", "CY.D3F Factory — STRIKE IT"],
  ["/brand/badge-cyberforce.png", "Cyber Force"],
];

export default function Architecture() {
  return <main>
    <SiteHeader active="architecture" />
    <section className="page-hero"><div className="shell page-hero-grid"><div><p className="kicker accent">Architecture &amp; sécurité</p><h1>Un appel.<br />Plusieurs couches de contrôle.</h1><div className="lead"><p>Le Voicebot Inondations combine infrastructure télécom, analyse du signal, moteur conversationnel contrôlé et règles déterministes.</p><p>Chaque étape <strong>vérifie la précédente</strong> avant qu’une réponse ou une action ne soit autorisée.</p></div></div><ControlDiagram /></div></section>

    <section className="band flow-band"><div className="shell"><PageIntro kicker="Flux opérationnel" title={<>De l’appel à la décision, en sept étapes</>}><p>Chaque étape est un point de contrôle distinct. Aucune ne fait confiance à la précédente sur parole.</p></PageIntro><div className="flow-list">{flow.map(([n, icon, title, text, meta]) => <article className="flow-row" key={n}><b>{n}</b><img src={assetPath(icon)} alt="" /><div><h3>{title}</h3><p>{text}</p></div><small>{meta}</small></article>)}</div></div></section>

    <section className="band band-cream"><div className="shell"><PageIntro kicker="Trois couches de protection" title={<>Chaque couche protège un endroit différent</>}><p>Elles ne se remplacent pas : elles se contrôlent. Une défaillance à un niveau reste visible aux autres.</p></PageIntro><div className="protection-grid stack-mobile">{protections.map((item) => <article className="protection-card" key={item.num}><b>{item.num}</b><img src={assetPath(item.icon)} alt="" /><h3>{item.title}</h3><p>{item.summary}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div></div></section>

    <section className="band parallel-band"><div className="shell"><PageIntro kicker="La différence" title={<>Trois couches travaillent en parallèle</>}><p>Cette architecture limite la dépendance à un seul moteur d’intelligence artificielle et ajoute des garde-fous indépendants.</p></PageIntro><div className="parallel-grid stack-mobile">{parallel.map((item) => <article className="parallel-card" key={item.title}><img src={assetPath(item.icon)} alt="" /><h3>{item.title}</h3><p>{item.summary}</p><dl>{item.items.map(([term, definition]) => <div key={term}><dt>{term}</dt><dd>{definition}</dd></div>)}</dl></article>)}</div></div></section>

    <section className="band band-sand"><div className="shell"><PageIntro kicker="Périmètre" title={<>Ce que le bot fait, et ce qu’il ne fera pas</>}><p>Ces limites ne sont pas des précautions de langage : ce sont les règles du dispositif.</p></PageIntro><div className="scope-grid"><article className="scope-card"><img className="card-icon" src={assetPath("/icons/flood/house-shield.png")} alt="" /><h3>Le bot peut</h3><ul><li>Transmettre des consignes officielles validées</li><li>Rappeler les bons réflexes avant, pendant et après une inondation</li><li>Poser des questions simples pour orienter la demande</li><li>Détecter certaines réponses nécessitant une escalade</li><li>Suivre son scénario de vérification</li></ul></article><article className="scope-card"><img className="card-icon" src={assetPath("/icons/flood/warning.png")} alt="" /><h3>Le bot ne doit pas</h3><ul><li>Prédire une crue ou établir un diagnostic</li><li>Inventer une recommandation locale</li><li>Remplacer le 112, le 1722 ou les autorités</li><li>Déclarer une route praticable sans donnée officielle</li><li>Sortir librement de son périmètre</li></ul></article></div></div></section>

    <section className="band band-cool"><div className="shell"><PageIntro kicker="Briques technologiques" title={<>Une pile modulaire, interopérable et auditable</>}><p>Les composants s’adaptent aux contraintes de sécurité, d’hébergement et d’intégration de l’organisation qui déploie le dispositif.</p></PageIntro><ul className="tech-grid">{technology.map(([icon, title, description]) => <li key={title}><img src={assetPath(icon)} alt="" /><div><h3>{title}</h3><p>{description}</p></div></li>)}</ul></div></section>

    <section className="band band-cream"><div className="shell"><article className="validation-card"><p className="kicker accent">Validation en environnement exigeant</p><h2>Sélectionné dans le programme STRIKE-IT 2026 de la Défense belge</h2><p>Le projet Voice Bot Navy a été sélectionné dans le cadre du programme STRIKE-IT 2026, porté par la Cyber Defence Factory / Cyber Command. Le programme vise des innovations de cybersécurité dual-use devant progresser vers une réalité opérationnelle, avec un objectif de maturité TRL 7.</p><p><strong>Cette sélection conforte le choix architectural : un agent vocal ne doit pas seulement être intelligent — il doit être protégé, supervisé, traçable et capable de basculer vers des scénarios sûrs lorsque la situation l’exige.</strong></p><div className="validation-partners"><p className="kicker muted">Programme &amp; institutions partenaires</p><div>{partnerBadges.map(([src, alt]) => <img key={src} src={assetPath(src)} alt={alt} />)}</div></div></article></div></section>

    <section className="band band-sand"><div className="shell"><div className="section-intro"><p className="kicker accent">Questions fréquentes</p><h2>Ce qu’on nous demande le plus</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">⌄</span></summary><p>{answer}</p></details>)}</div></div></section>

    <PageCta />
    <SiteFooter />
  </main>;
}

function ControlDiagram() {
  return <div className="control-diagram flood-control-diagram" aria-label="Architecture sécurisée à trois couches"><div className="diagram-ring ring-one" /><div className="diagram-ring ring-two" /><img className="diagram-core" src={assetPath("/flood-logo.png")} alt="Protection du canal d’information Inondations" /><div className="diagram-node node-a"><img src={assetPath("/icons/flood/headset.png")} alt="" /><span>Audio</span></div><div className="diagram-node node-b"><img src={assetPath("/icons/flood/chat.png")} alt="" /><span>Dialogue</span></div><div className="diagram-node node-c"><img src={assetPath("/icons/flood/lock.png")} alt="" /><span>Contrôle</span></div></div>;
}
