# Construire un Blog avec Next.js 14 et Sanity CMS

Ce dépôt contient le code de mon tutoriel YouTube sur la construction d'un blog avec Next.js 14 et Sanity CMS.

## Technologies utilisées

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sanity.io](https://www.sanity.io/)

## Pour commencer

Tout d'abord, ajoutez votre ID de projet Sanity et le nom de votre ensemble de données au fichier `.env.local` :

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=votre_id_de_projet
NEXT_PUBLIC_SANITY_DATASET=le_nom_de_votre_ensemble_de_données
```

Si vous souhaitez avoir un système de commentaires, vous devez ajouter votre jeton d'API Sanity au fichier `.env.local` :

```bash
NEXT_PUBLIC_SANITY_TOKEN=votre_jeton_d_api
```

Ensuite, installez les dépendances :

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

Lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat. Ouvrez [http://localhost:3000/studio](http://localhost:3000/studio) pour Sanity Studio.

## Déployer sur Vercel

La façon la plus simple de déployer votre application Next.js est d'utiliser la [Plateforme Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) des créateurs de Next.js.
