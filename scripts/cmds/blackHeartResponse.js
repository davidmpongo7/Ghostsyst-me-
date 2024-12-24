module.exports = {
  config: {
    name: "blackHeartResponse",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à 🖤",
    longDescription: "Réponses drôles et variées à l'emoji 🖤",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("🖤")) {
      const responses = [
        "🖤 ? C'est quoi ça, ton cœur gothique ? T'es en pleine phase de crise existentielle ?",
        "Un cœur noir ? T'es sûr que t'as pas oublié de sourire dans ta vie ?",
        "🖤, t'es en mode dépression, ou c'est juste l'emoji de ceux qui n'ont rien de mieux à faire ?",
        "Ce cœur noir, c'est pas un peu cliché ? Comme tes tenues sombres.",
        "🖤, l'emoji des gens qui se croient mystérieux, mais au fond, c'est juste triste.",
        "T'as mis 🖤, parce que tu crois que ça te rend plus cool, mais tu es juste... bizarre.",
        "Un cœur noir, mais ton humour est aussi lumineux qu'une cave sombre.",
        "🖤, l'emoji parfait pour ceux qui veulent se donner un look 'je suis torturé', mais t'es juste ennuyant.",
        "Ce cœur noir, c'est comme tes journées : ternes, sans éclat.",
        "🖤, parce que la couleur de ton cœur est aussi fun que ton sens de l'humour.",
        "Un cœur noir, mais ton sourire c'est un peu comme une légende urbaine.",
        "🖤, c'est pour les gens qui mettent ça pour faire genre 'je suis mystérieux', mais qui sont juste antipathiques.",
        "T'as mis 🖤 comme si tu étais un personnage de film triste, mais même ça, ça ne te va pas.",
        "Un cœur noir, sérieux ? T'as l'air de sortir tout droit d'un film de Tim Burton.",
        "🖤, l'emoji des gens qui veulent être profonds, mais qui sont juste dans une phase d'adolescence prolongée.",
        "Ce cœur noir, c'est comme ton humour : déprimant et sans intérêt.",
        "🖤, l'emoji des gens qui essaient de cacher leur ennui sous un faux air de profondeur.",
        "Un cœur noir, ça t'irait mieux si tu arrêtais de vivre dans un roman de Stephen King.",
        "🖤, l'emoji de ceux qui pensent qu'être triste les rend intéressants. Spoiler : ça ne marche pas.",
        "Ce cœur noir, c'est un peu comme ton attitude : morbide, mais pas convaincante.",
        "🖤, vraiment ? T'es sûr que c'est pas juste pour cacher ton manque de personnalité ?",
        "Un cœur noir, t'as l'impression que ça te rend mystérieux, mais en réalité, ça fait juste pitié.",
        "🖤, l'emoji pour ceux qui veulent créer une ambiance, mais qui finissent par faire peur.",
        "T'as mis 🖤 pour te donner un style, mais tu ressembles plus à un personnage de dessin animé triste.",
        "Ce cœur noir, c'est comme un nuage de pluie permanent dans ta vie.",
        "🖤, t'es en mode 'je suis trop cool pour m'intégrer', mais au final, tu n'intéresses personne.",
        "Un cœur noir, c'est comme une tombe : tu sembles y avoir trouvé ton confort.",
        "🖤, l'emoji des gens qui aiment se donner des airs d'énigmes, mais c'est juste lourd.",
        "Un cœur noir, c'est le genre de truc qu'on envoie quand on veut être pris au sérieux, mais ça tombe à plat.",
        "🖤, c'est l'emoji des gens qui ont trop écouté de musique triste en pensant que ça leur allait bien.",
        "Tu mets 🖤 comme si ça allait ajouter de la profondeur à ta vie, mais tout ce que ça fait, c'est de l'ennui.",
        "Ce cœur noir, c'est comme une éclipse : ça cache tout, mais ça ne fait rien de spécial.",
        "🖤, t'es un peu en mode 'je veux être unique', mais t'es juste un cliché ambulant.",
        "Un cœur noir, tu l'as pris pour être 'profond', mais ça ressemble juste à une tentative ratée."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
