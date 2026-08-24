# Voicebot Inondations

Landing page française et configuration du Voicebot Inondations.

## Contenu

- consignes officielles belges avant, pendant et après une inondation ;
- cas historiques documentés et utilité potentielle du canal vocal ;
- pages Sources, Mentions légales et Confidentialité ;
- agent ElevenLabs français avec garde-fous 112/1722 ;
- déploiement automatique sur GitHub Pages.

## Commandes

```bash
npm run dev
npm run build
npm run build:pages
```

La configuration distante ElevenLabs n’est pas publiée avec des secrets. Le fichier `config/elevenlabs-agent.json` ne contient que l’identifiant public de l’agent créé.
