module.exports = {
  config: {
    name: "lightBlueHeartResponse",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à 🩵",
    longDescription: "Réponses drôles et variées à l'emoji 🩵",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("🩵")) {
      const responses = [
        "🩵 ? T'es en mode pastel ou t'as juste pas d'originalité ?",
        "Ce cœur bleu pâle est aussi fade que ton humour.",
        "🩵, la couleur des gens qui ont trop écouté des chansons tristes.",
        "Ce cœur ? C'est comme ton style : un peu trop innocent pour être pris au sérieux.",
        "🩵, l'emoji des gens qui ne savent pas comment être cool sans forcer.",
        "Un cœur bleu clair, vraiment ? T'as laissé ta personnalité au vestiaire.",
        "🩵, c'est comme si t'essayais de créer un mème mais tu échoues complètement.",
        "C'est quoi ce cœur bleu pastel ? Un sous-produit de l'emoji 💙 ?",
        "🩵, t'es comme un personnage secondaire dans un film romantique bas de gamme.",
        "T'as pris 🩵 pour faire genre, mais ça te va pas.",
        "Ce cœur pastel... sérieux, t'essaies de ressembler à un nuage ?",
        "🩵 = le cœur des gens qui veulent être gentils, mais c'est juste un peu trop.",
        "Si l'emoji 🩵 était une personne, ce serait un hipster dans un café sans wifi.",
        "🩵 ? T'es dans ta phase 'je veux faire le cool mais je suis pas'.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
