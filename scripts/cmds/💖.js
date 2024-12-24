module.exports = {
  config: {
    name: "sparklingHeartResponse",
    version: "1.1",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à 💖",
    longDescription: "Réponses drôles et variées à l'emoji 💖",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("💖")) {
      const responses = [
        // Phrases originales
        "💖 ? T'as mis l'emoji pour attirer l'attention ? T'inquiète, ça ne marche plus.",
        "Ce cœur brillant... C'est sûrement pour masquer ta personnalité éclatante de nullité.",
        "💖, l'emoji des gens qui croient que briller fait tout. Mais désolé, ça ne cache pas ton manque de charisme.",
        "Tu mets 💖, mais c'est un peu comme une lampe clignotante : ça attire l'œil, mais c'est vide.",
        "💖, c'est l'emoji parfait pour ceux qui sont dans le 'je veux faire briller mon ego', mais c'est assez pathétique.",
        "Ce cœur brille tellement que tu crois que c'est de l'or, mais en réalité, c'est juste du plastique.",
        "💖, l'emoji pour les gens qui essaient de rendre tout mignon, mais qui sont plus agaçants qu'autre chose.",
        "Tu mets 💖 comme si ça allait tout résoudre, mais désolé, ça ne fait pas oublier ton côté fade.",
        "💖, l'emoji des gens qui veulent tellement être adorés, mais qui finissent par être énervants.",
        "Un cœur brillant pour cacher ta vérité un peu trop ordinaire.",
        "💖, c'est l'emoji pour les faux-sourires et les faux-espoirs.",
        "Ce cœur brillant, c'est juste une illusion de ce que tu aimerais être.",
        "💖, c'est pour ceux qui pensent que mettre des cœurs les rend spéciaux, mais désolé, ça ne marche pas comme ça.",
        // Nouvelles phrases ajoutées
        "💖 ? Sérieusement, t'essayes de mettre des paillettes dans ta vie misérable ?",
        "Ce cœur brillant, c'est un peu comme ton humour : inutile, mais t'insistes quand même.",
        "💖, l'emoji parfait pour ceux qui aiment briller... dans leur solitude.",
        "Un cœur brillant ? Tu devrais plutôt chercher une personnalité qui brille.",
        "💖, l'illusion parfaite pour cacher un cœur vide. Beau travail !",
        "Tu mets 💖 comme si ça allait camoufler ton manque d'originalité. Spoiler : ça ne marche pas.",
        "Ce cœur brillant, c'est l'équivalent d'un filtre Instagram : joli, mais fake.",
        "💖, c'est comme une boule disco : ça brille de loin, mais c'est ridicule de près.",
        "Un cœur brillant, mais aucune lumière dans tes idées, c'est triste.",
        "💖, t'essayes d'imiter les étoiles, mais désolé, t'es loin de leur niveau.",
        "Ton cœur brille ? Dommage que ton cerveau ne fasse pas pareil.",
        "💖, ça brille tellement qu'on dirait un feu d'artifice... mais raté.",
        "Ce cœur brillant est là pour cacher quoi, exactement ? Ton manque d'efforts, peut-être ?",
        "💖, l'emoji des gens qui aiment se mentir sur leur propre importance.",
        "Un cœur brillant ? On dirait un panneau 'regardez-moi', mais personne ne regarde.",
        "💖, c'est comme mettre une couche de peinture dorée sur une fissure : inutile.",
        "Ton cœur brille, mais ça n'empêche pas ton ego de prendre trop de place.",
        "💖 ? T'as volé ça d'une carte de Saint-Valentin pour enfant, non ?",
        "Un cœur qui brille ? Ce serait mieux si c'était accompagné d'une âme un peu plus sincère.",
        "💖, l'emoji des gens qui veulent tout sauf être eux-mêmes.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
