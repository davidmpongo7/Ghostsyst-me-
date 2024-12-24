module.exports = {
  config: {
    name: "brokenHeartResponse",
    version: "1.1",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses à 💔",
    longDescription: "Réponses drôles et variées à l'emoji 💔",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message }) {
    if (event.body && event.body.includes("💔")) {
      const responses = [
        // Phrases originales
        "💔 ? Un cœur brisé, vraiment ? C'est sûr que c'est pas juste une excuse pour ta mauvaise humeur ?",
        "Ce cœur brisé, c'est comme tes rêves : cassés, sans retour.",
        "💔, c'est l'emoji des gens qui veulent jouer à l'artiste triste, mais au final, personne ne les remarque.",
        "T'as mis 💔, mais au fond, on dirait que tu cherches juste à attirer l'attention.",
        "Un cœur brisé, t'es vraiment en mode 'je suis incompris', ou tu fais juste semblant ?",
        "💔, l'emoji pour ceux qui pensent qu'ils sont des âmes torturées, mais qui ne sont que des pleurnichards.",
        "Ce cœur brisé, c'est l'emoji parfait pour quelqu'un qui passe plus de temps à se lamenter qu'à vivre.",
        "💔, t'es en mode drama, mais tout ce que ça produit, c'est du bruit, rien de plus.",
        "Un cœur brisé ? C'est juste le reflet de tes décisions douteuses et de ta tendance à t'attacher aux mauvaises personnes.",
        "💔, c'est l'emoji des gens qui cherchent à se convaincre qu'ils sont profonds, mais qui ne sont que superficiels.",
        "Tu mets 💔 comme si ça allait réparer ton âme, mais désolé, il n'y a pas de pansement pour ça.",
        "💔, c'est juste l'excuse parfaite pour éviter la responsabilité et se concentrer sur la victime.",
        "Ce cœur brisé, c'est comme un film triste qui ne fait rire que ceux qui aiment regarder les autres souffrir.",
        // Nouvelles phrases ajoutées
        "💔 ? Ça se voit que tu veux qu'on te console, mais sérieux, y'a personne pour ça ici.",
        "Ton cœur est cassé, mais t'as pensé à réparer ton attitude avant ?",
        "💔, l'emoji qui crie 'Regardez-moi, je suis malheureux'... mais personne n'écoute.",
        "Un cœur brisé ? C'est surtout ton ego qui en a pris un coup, non ?",
        "💔, c'est mignon de pleurnicher sur un emoji, mais ça résout rien.",
        "Un cœur brisé ? On dirait que tu joues dans un drame que personne ne regarde.",
        "💔, arrête, même Netflix a des histoires plus convaincantes que ton chagrin.",
        "Ton cœur est brisé, mais je parie que ton ex n'a même pas remarqué.",
        "💔, c'est comme un panneau 'Attention, zone sinistrée', mais personne ne s'arrête.",
        "Tu utilises 💔 comme si c'était une carte de fidélité pour la tristesse.",
        "Un cœur brisé ? Sérieux, t'as juste besoin d'une bonne pizza et ça ira mieux.",
        "💔 ? Encore un mauvais choix de personne ? T'as pensé à te regarder avant ?",
        "Ce cœur brisé, c'est ton quotidien ou juste une excuse pour faire du bruit ?",
        "💔, ça symbolise pas ton cœur, juste ton goût douteux en relations.",
        "T'as mis 💔, mais c'est surtout ta capacité à choisir les bonnes personnes qui est brisée.",
        "💔, c'est l'emoji parfait pour les gens qui n'ont pas d'autre moyen d'attirer l'attention.",
        "Un cœur brisé ? La prochaine fois, essaye de briser moins de règles sociales.",
        "💔, ce symbole est plus cohérent que toutes tes excuses.",
        "Ton cœur est cassé ? Faut dire, vu comment tu t'y prends, c'était prévisible.",
        "Un cœur brisé ? T'aurais pas dû prêter ton cœur à une personne sans garantie.",
        "💔, l'emoji officiel des gens qui aiment le drama pour le fun.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
