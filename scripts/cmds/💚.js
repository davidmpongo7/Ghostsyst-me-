module.exports = {
  config: {
    name: "greenHeartResponse",
    version: "1.1",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à 💚",
    longDescription: "Réponses drôles et variées à l'emoji 💚",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("💚")) {
      const responses = [
        // Phrases originales
        "💚 ? T'es sûr que tu veux un cœur de cette couleur ? C'est plus l'emoji d'un enfant de 6 ans.",
        "Un cœur vert... T'as volé ça dans un magasin de fruits et légumes ?",
        "💚, c'est l'emoji de ceux qui pensent qu'ils ont trouvé une nouvelle couleur d'amour.",
        "Vraiment 💚 ? T'es à fond dans la nature ou quoi ?",
        "Ce cœur vert ? C'est pas très sexy, désolé.",
        "💚, c'est le genre d'emoji que tu envoies quand t'as pas d'idées.",
        "Un cœur vert, hein ? T'es soit écolo, soit très naïf.",
        "💚 ? C'est un cœur où tu penses que tout le monde t'aime mais personne ne le fait.",
        "Cœur vert, mais ton niveau d'originalité est aussi faible qu'un cactus.",
        "💚 = l'emoji pour ceux qui pensent qu'ils sont originaux... mais non.",
        "Ce cœur vert, tu l'as pris dans le rayon des emojis douteux ?",
        "💚, c'est pour ceux qui veulent faire comme les autres mais qui échouent.",
        "Un cœur vert... Ah, donc t'es en mode 'je veux être unique', mais c'est raté.",
        "💚, c'est l'emoji pour les gens qui ont regardé trop de films Disney.",
        // Nouvelles phrases ajoutées
        "💚 ? T'es vraiment un amoureux de la nature, ou t'as juste un manque d'imagination ?",
        "Un cœur vert... On dirait que t'essaies d'être alternatif, mais c'est plus du cliché.",
        "💚, c'est l'emoji des gens qui pensent que les plantes ont des sentiments.",
        "Tu mets 💚 comme si ça allait rendre ton amour plus profond... Spoiler alert : ça ne marche pas.",
        "💚, c'est l'emoji des gens qui aiment se donner un air 'so cool', mais ça ne trompe personne.",
        "Un cœur vert ? C'est soit pour les fans de plantes, soit pour les gens qui pensent qu'ils sont spéciaux.",
        "💚, un choix de cœur un peu étrange. T'es végétarien ou tu veux juste être différent ?",
        "Cœur vert... Mais t'es sûr que tu veux pas essayer une couleur un peu plus adulte ?",
        "💚, c'est l'emoji des gens qui veulent paraître écolo, mais qui ne trient même pas leurs déchets.",
        "Un cœur vert, vraiment ? C'est plus l'emoji du type qui achète des smoothies au kale.",
        "💚, l'emoji des gens qui essaient trop de se démarquer et qui finissent par se fondre dans la masse.",
        "Ce cœur vert ? Tu le mets pour dire que t'es unique, mais en réalité tu es tout sauf ça.",
        "💚, c'est l'emoji des rêveurs qui croient qu'ils sont différents, mais qui sont juste banals.",
        "Un cœur vert ? Tu veux sauver la planète ou tu veux juste qu'on te remarque ?",
        "💚, un cœur pour les gens qui croient que l'originalité vient d'une couleur différente.",
        "Tu mets 💚 comme si c'était un acte révolutionnaire, mais tout le monde s'en fiche.",
        "💚, c'est l'emoji pour ceux qui pensent que le vert est la couleur de l'amour. Spoiler : c'est pas vrai.",
        "Cœur vert... Tu veux faire passer un message environnemental ou t'es juste en manque d'inspiration ?",
        "💚, pour ceux qui veulent être à la mode, mais qui n'ont toujours pas compris que ça ne marche pas comme ça.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
