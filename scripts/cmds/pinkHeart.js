module.exports = {
  config: {
    name: "pinkHeartResponse",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à 🩷",
    longDescription: "Réponses drôles et variées à l'emoji 🩷",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("🩷")) {
      const responses = [
        "🩷 ? T'as choisi l'emoji des princesses, ou t'es juste là pour faire comme tout le monde ?",
        "Ce cœur rose, c'est pour ceux qui veulent paraître sensibles, mais qui sont aussi superficiels que leurs vêtements.",
        "🩷, t'as mis ça pour essayer de briller, mais au final c'est juste un autre truc générique.",
        "T'as mis 🩷, on dirait que tu cherches à paraître mignon, mais c'est surtout... un peu désespéré.",
        "Un cœur rose ? T'essaies de faire genre, mais t'es plus transparent qu'un film de Noël.",
        "🩷, l'emoji des gens qui pensent que la vie est une comédie romantique... Spoiler : elle ne l'est pas.",
        "Tu mets 🩷 pour paraître sweet, mais ta personnalité est aussi sucrée qu'un sac de bonbons périmés.",
        "Ce cœur rose, c'est comme tes blagues : ça tombe à plat, mais tu continues à insister.",
        "🩷, l'emoji pour ceux qui veulent être des cœurs d'artichaut, mais qui finissent par se faire ignorer.",
        "Un cœur rose... T'es pas fatigué de toujours essayer de te donner une image parfaite ? Spoiler : ça marche pas.",
        "🩷, c'est pour ceux qui sont toujours dans l'illusion de l'amour, mais qui n'ont même pas de véritable relation.",
        "Ce cœur rose, c'est pour les rêveurs qui passent leur vie à fantasmer au lieu de vivre dans la réalité.",
        "T'as mis 🩷, mais ton côté 'cute' ressemble plus à une version 2.0 d'un dessin animé sans âme.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
