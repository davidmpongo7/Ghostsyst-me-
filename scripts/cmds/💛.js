module.exports = {
  config: {
    name: "yellowHeartResponse",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à 💛",
    longDescription: "Réponses drôles et variées à l'emoji 💛",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("💛")) {
      const responses = [
        "💛 ? T'as pris l'emoji des gens qui s'intéressent trop aux pâquerettes ?",
        "Un cœur jaune ? C'est quoi, t'es fan du soleil mais t'as pas assez de bronzage ?",
        "💛, l'emoji parfait pour les gens qui essaient trop d'être joyeux mais ça marche pas.",
        "T'as pris 💛 pour cacher la tristesse dans ton âme, hein ?",
        "Ce cœur jaune... est-ce que t'as l'impression d'être un rayon de soleil ? Spoiler : non.",
        "💛, c'est pour les gens qui pensent que mettre des cœurs rend leur journée meilleure.",
        "Un cœur jaune ? T'es un peu trop bling-bling, non ?",
        "💛 = l'emoji des gens qui essaient de faire des bons vœux... mais sans vraiment y arriver.",
        "Tu mets 💛 pour faire genre, mais franchement, c'est un peu trop en mode 'je veux plaire à tout le monde'.",
        "💛, c'est pour ceux qui trouvent que c'est cool d'être trop flashy mais sans substance.",
        "Un cœur jaune pour briller, mais ta personnalité est un peu trop terne pour suivre.",
        "💛, c'est comme quand tu mets des lunettes de soleil, mais à l'intérieur.",
        "Ce cœur jaune, c'est comme tes blagues : ça ne fait pas vraiment rire.",
        "💛, t'essaies de te donner une vibe de super-héros, mais ça sonne plutôt comme un super flop.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
