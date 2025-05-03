import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'fr-FR',
  title: 'QuantumCraft Studios',
  description: 'La documentation officielle de QuantumCraft Studios',

  themeConfig: {
    outlineTitle: 'Sur cette page',

    logo: 'https://i.imgur.com/46BL0Kx.png',

    nav: [
      { text: 'Tutoriels', link: '/tutoriels' },
      { text: 'QuantumCraft Studios', link: 'https://quantumcraft-studios.com' }
    ],

    sidebar: [
      {
        text: '📚 Accueil & Général',
        collapsible: true,
        items: [
          { text: '🚀 Accueil des tutoriels', link: '/tutoriels' }
        ]
      },
      {
        text: '🧩 Présentation du Panel',
        collapsible: true,
        items: [
          { text: '🖥️ Introduction au Panel', link: '/présentation-panel/introduction-panel' },
          { text: '📁 Gestionnaire de fichiers', link: '/présentation-panel/gestionnaire-de-fichiers' },
          { text: '🗄️ Base de données', link: '/présentation-panel/gestionnaire-de-base-de-donnee' },
          { text: '⏰ Planification des tâches', link: '/présentation-panel/planification-des-taches' },
          { text: '👥 Gestion des utilisateurs', link: '/présentation-panel/gestion-des-utilisateurs' },
          { text: '💾 Sauvegardes (Backups)', link: '/présentation-panel/sauvegardes' },
          { text: '🌐 Réseau (Network)', link: '/présentation-panel/réseau' },
          { text: '⚙️ Démarrage (Startup)', link: '/présentation-panel/démarrage' },
          { text: '⚙️ Paramètres du serveur (Settings)', link: '/présentation-panel/paramètres-du-serveur' },
          { text: '🧾 Historique d’activité (Activity / Logs)', link: '/présentation-panel/historique-d-activité' },
          { text: '👤 Mon compte (Account)', link: '/présentation-panel/mon-compte' },
          { text: '🔑 API', link: '/présentation-panel/api' },
          { text: '🔐 SSH', link: '/présentation-panel/ssh' },
        ]
      },
      {
        text: '🎮 Hébergement de jeux',
        collapsible: true,
        items: [
          { text: '🧱 Choisir son offre Minecraft', link: '/hébergement-jeux/choisir-offre-minecraft' },
          { text: '🪐 Choisir son offre Palword', link: '/hébergement-jeux/choisir-offre-palworld' },
          { text: '🪵 Choisir son offre Vintage Story', link: '/hébergement-jeux/choisir-offre-vintage-story' }
        ]
      },
      {
        text: '🌐 Hébergement de Dev',
        collapsible: true,
        items: [
          { text: '⚙️ Choisir son offre NodeJs', link: '/hébergement-devops/choisir-offre-nodejs' },
          { text: '🐍 Choisir son offre Python', link: '/hébergement-devops/choisir-offre-python' }
        ]
      },
    ],

    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },

    lastUpdatedText: 'Dernière mise à jour',

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/quantumcraft-studios' }
    ],

    footer: {
      message: 'Documentation créée par QuantumCraft Studios',
      copyright: '© 2025 QuantumCraft Studios'
    }
  }
})
