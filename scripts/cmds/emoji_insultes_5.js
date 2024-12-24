module.exports = {
  config: {
    name: "emoji_insultes_5",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses sarcastiques et insultantes aux emojis",
    longDescription: "Réponses sarcastiques et insultantes aux emojis envoyés",
    category: "reply",
  },

  onStart: async function() {},

  onChat: async function({ event, message }) {
    const emoji = event.body.trim();

    // Réponses pour l'emoji 😲
    if (emoji === "😲") {
      const responses = [
        "Oh, t'es choqué comme ça pour un rien ? Je suis sûr que tu fais cette tête à chaque fois que ton Wi-Fi déconne.",
        "Quoi, t'as vu ton futur dégringoler comme une montagne russe ? Calme-toi, c'est juste un petit contretemps.",
        "T'as l'air aussi choqué que quelqu'un qui vient d'apprendre que les licornes n'existent pas.",
        "Wow, t'as l'air choqué comme si tu venais de découvrir que la Terre est ronde. Détends-toi, ça va aller.",
        "Je suis à peu près sûr que t’as vu une pizza qui se livre froide et que ça t’a fait ça.",
        "T’es surpris comme ça pour si peu ? C’est pas comme si t’avais découvert que ton futur est aussi passionnant qu’un épisode de télé-réalité.",
        "C’est juste un peu de réalité qui frappe. Respire, ce n’est pas la fin du monde. Du moins, pas encore.",
        "T’es étonné par quoi, exactement ? Que tes choix de vie t’ont mené jusque-là ? C’est surprenant, hein ?",
        "Je vois que tu viens d'apprendre que la vie n'est pas aussi lisse que ta routine. Quelle révélation, vraiment.",
        "Tu fais cette tête parce que tu viens de comprendre que tes rêves sont probablement aussi irréalistes que ta manière de gérer ton budget ?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😳
    if (emoji === "😳") {
      const responses = [
        "Ah, donc là t’es gêné ? C’est mignon, c’est presque comme si t’avais fait une erreur... juste une petite erreur monumentale.",
        "T’as l’air d'avoir vu un fantôme… Ou c'est juste toi qui t’es rendu compte que t’avais dit quelque chose de stupide ?",
        "La surprise est palpable… c’est comme si t'avais réalisé que tout ce que tu fais dans la vie est une blague.",
        "T'as l'air gêné… Tu viens de comprendre que la dernière fois que tu parlais, ça n’avait aucun sens ?",
        "Ooooh, c’est mignon, t’es tout rouge. Mais c’est pas comme si t’avais fait une grosse bourde, hein ?",
        "Ah, tu te rends compte que t’es en train de faire un énorme flop, c’est ça ? Bienvenue dans le club.",
        "C'est pas grave, on a tous fait des erreurs. Mais toi, tu les fais à un niveau que je qualifierais d'épique.",
        "Regarde-toi, t’es gêné, comme si t’avais oublié ton propre nom. C’est pas grave, t’inquiète.",
        "C’est la tête que tu fais quand tu réalises que personne n’en a rien à faire de tes opinions ?",
        "C’est normal de rougir, surtout après avoir dit quelque chose de complètement absurde, non ?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 🤯
    if (emoji === "🤯") {
      const responses = [
        "Tu viens de comprendre que la vie n'est pas un film ? Bravo, t'as enfin ouvert les yeux !",
        "Tu veux une crème glacée ? Parce que là, t'as l'air d’avoir découvert que tout ce que tu pensais savoir était faux.",
        "C’est une explosion de cerveau ou juste la conséquence d’un mauvais choix de vie ?",
        "C’est pas la fin du monde, respire un peu, on dirait que tu viens de voir ton reflet dans un miroir cassé.",
        "T’as l'air de quelqu'un qui vient de comprendre que la maturité n'est pas un choix, mais une nécessité.",
        "C’est pas si grave, c’est juste la dure réalité qui te frappe. C’est ce qui arrive quand tu arrêtes de vivre dans une bulle.",
        "Sérieusement, t’as l’air de quelqu’un qui a découvert que la pizza n’est pas livrée gratuitement. T’as raison, c’est un choc.",
        "Je pense que ta tête vient de se surchauffer à cause de toutes ces révélations. Pas de panique, on gère.",
        "Si tu savais vraiment ce que c’est, tu serais encore plus choqué. Tu devrais prendre ça comme un entraînement.",
        "Tu viens de réaliser que tes plans à long terme sont aussi solides qu’un château de cartes ? La chute doit être brutale.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😖
    if (emoji === "😖") {
      const responses = [
        "Oooooh, pauvre petit, t’as l'air de souffrir pour rien. T’es sûr que c’est pas juste ton ego qui prend un coup ?",
        "C'est quoi ce regard ? T'as l'air d’avoir vu ton compte bancaire après une grosse soirée shopping.",
        "Je suis désolé, mais t'as l'air aussi désespéré qu’un rat qui cherche une sortie dans un piège.",
        "On dirait que t'as vu un monstre… Non, attends, c’est juste la réalité qui t’a rattrapé.",
        "T’as l’air de quelqu’un qui réalise que tout ce qu’il a construit est aussi stable qu’un château de cartes sous la pluie.",
        "Si t'as l’air aussi abattu, je vais te conseiller de te coucher et d’espérer que demain ça ira mieux.",
        "Ça doit être super dur de se rendre compte que tes rêves sont aussi réalistes qu’une licorne.",
        "T'es dans quel état là ? T’as l’air d’avoir appris que la vie est un peu plus compliquée que ton application de méditation.",
        "On dirait que t'as vécu une déception à la hauteur de tes attentes. Pas de panique, ça arrive même aux meilleurs.",
        "C’est pas un drame, respire un peu. C’est juste la vie qui te met une claque, tu t’y habitueras.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😣
    if (emoji === "😣") {
      const responses = [
        "T'as l'air de quelqu'un qui a vu une montagne d'obstacles. Mais, hé, t’as signé pour ça, non ?",
        "Oh, tu souffres comme ça pour un petit truc ? Si seulement tu savais ce que c’est que des vrais problèmes.",
        "T’as l’air aussi détendu qu’un chat qui tombe dans l’eau. Allez, respire, ça va passer.",
        "C’est juste un peu de stress, arrête de faire comme si tu venais de découvrir que tes rêves sont en morceaux.",
        "Cette tête-là, c'est celle de quelqu'un qui vient de comprendre que la vie est dure. Bienvenue au club.",
        "Si tu souffres pour ça, je vais t'envoyer quelques vrais problèmes à gérer. Ne t’inquiète pas, ce n’est qu’un petit obstacle.",
        "Allez, respire, ce n'est rien. Si tu fais cette tête pour ça, je n'ose imaginer comment tu réagirais à une vraie catastrophe.",
        "Calme-toi, ce n’est même pas la fin du monde. C’est juste un petit échec, rien de dramatique.",
        "T’es dans un mauvais film ? Parce que là, t’as l'air aussi épuisé qu'un personnage qui vient de tout perdre.",
        "C'est pas si grave. Ça pourrait être pire, tu pourrais être comme moi et être obligé de répondre à tes messages.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😩
    if (emoji === "😩") {
      const responses = [
        "T’as l'air d'être à bout. Peut-être que t’es juste fatigué d’être aussi mauvais dans tout ce que tu fais.",
        "Si tu fais cette tête à cause de ça, je ne veux même pas savoir ce que ça serait si t'avais un vrai problème.",
        "C’est pas un drame, t’as juste un peu de fatigue mentale. Allez, une bonne nuit de sommeil et ça ira mieux.",
        "Là, tu fais la tête comme si la fin du monde était arrivée. Respire un coup, ce n’est même pas la moitié du chemin.",
        "Tu viens de comprendre que tes rêves sont encore plus lointains que tes objectifs ? Bienvenue à la réalité.",
        "Tu te sens abattu ? Bienvenue dans le monde adulte, là où les rêves sont parfois aussi décevants que ton état actuel.",
        "T’es fatigué, hein ? C’est marrant, t’as l’air aussi épuisé qu'un marathonien qui a couru un sprint.",
        "On dirait que tu te laisses envahir par la fatigue de la vie. Allez, un petit coup de boost et tu y arriveras.",
        "Je te conseille de prendre une pause. Si tu te sens aussi fatigué, un peu de réconfort est bien mérité.",
        "Sérieusement, t’as l’air aussi épuisé qu’un hamster qui court dans une roue sans fin. Peut-être qu’un peu de sommeil t’aidera.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
``
