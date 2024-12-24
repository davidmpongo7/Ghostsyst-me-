module.exports = {
  config: {
    name: "purpleHeartResponse",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à 💜",
    longDescription: "Réponses drôles et variées à l'emoji 💜",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("💜")) {
      const responses = [
        "💜 ? T'es dans une secte ou quoi ?",
        "Le cœur violet, c'est pour les gens qui veulent être spéciaux.",
        "💜, t'essayes de montrer que t'as du goût, mais non.",
        "Cœur violet ? C'est ton niveau de créativité au max ?",
        "💜 = amour extraterrestre, t'as vu trop de films.",
        "Le violet c'est chic, mais sur toi, ça fait pitié.",
        "💜 ? L'emoji préféré des faux artistes.",
        "C'est quoi ce cœur violet ? T'as des tendances gothiques ou quoi ?",
        "💜, c'est beau... mais pas pour toi.",
        "Cœur violet ? On dirait une décoration de Noël ratée.",
        "Tu voulais être original mais c'est juste étrange.",
        "Le violet, c'est royal. Mais toi, t'es juste banal.",
        "💜 = j'aime mais j'ose pas trop le dire.",
        "C'est mignon, mais le violet ça te va pas.",
        "💜, l'emoji des gens qui veulent être mystérieux... et échouent.",
        "Tu mets 💜 pour essayer de paraître plus complexe, mais ça sonne juste faux.",
        "💜, un cœur qui essaie de paraître profond... mais c'est surtout superficiel.",
        "Le violet, c'est bien, mais c'est pas ce que tu crois.",
        "💜 ? T'as volé ça dans un magasin de bijoux en toc ?",
        "C'est censé être mystérieux, mais ça fait juste loser.",
        "💜, l'emoji des gens qui veulent être éthérés, mais qui sont juste gênants.",
        "Le cœur violet, c'est pour ceux qui veulent se donner un style de vieux film dramatique.",
        "💜, l'emoji parfait pour ceux qui veulent briller mais qui s'éteignent vite.",
        "T'as mis 💜 pour sembler poétique, mais c'est pas convaincant.",
        "💜, c'est comme une bougie parfumée qui brûle sans but.",
        "Le violet, c'est comme tes opinions : tout sauf original.",
        "💜, c'est comme une fausse promesse : ça brille, mais ça ne dure pas.",
        "T'as mis 💜 pour capter l'attention, mais t'as juste l'air de quelqu'un qui cherche à se vendre.",
        "💜, un cœur qui tente de paraître noble, mais qui finit par être ridicule.",
        "Le violet, c'est peut-être la couleur du royalisme, mais toi, t'es juste un prince du ridicule.",
        "💜, un emoji pour ceux qui essaient d'être élégants, mais qui échouent miserablement.",
        "C'est beau le violet, mais sur toi, c'est juste une mauvaise blague.",
        "💜, l'emoji des gens qui veulent être mystérieux, mais qui sont juste des drames ambulants.",
        "T'as mis 💜 pour essayer de paraître original, mais t'es plus banal que jamais."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
