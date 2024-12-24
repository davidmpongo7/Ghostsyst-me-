module.exports = {
  config: {
    name: "😱",
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

    if (emoji === "😱") {
      const responses = [
        "Sérieusement, tu fais cette tête à cause de ça ? J’ai vu des films d’horreur moins effrayants.",
        "Si t’as peur de ça, alors je suis vraiment désolé pour toi, la vie doit être un vrai cauchemar.",
        "Vraiment ? C’est tout ? T’as l’air d’avoir vu un film d’horreur de série Z.",
        "Si tu veux être terrifié, il te suffit de regarder ton reflet dans un miroir.",
        "Tu paniques pour ça ? J’espère que tu as une meilleure raison de crier.",
        "C’est censé être effrayant ? Ça m’a donné plus de rire qu’autre chose.",
        "T’es encore plus flippant que cet emoji avec ta tête comme ça.",
        "C’est ton visage après avoir vu la note de ton dernier contrôle ?",
        "C’est ça, fais comme si la vie allait t’engloutir. C’est dramatique, mais tellement pathétique.",
        "Tu veux qu’on te trouve un coin sombre pour pleurer ou tu préfères continuer à faire l’enfant ?",
        "Tu veux crier à qui exactement ? Les autres sont aussi impressionnés par ta peur que par ton emoji.",
        "On dirait que tu vois un monstre, mais je t’assure, c’est juste toi.",
        "Arrête de crier, ce n’est pas un film d’horreur, c’est juste ta vie quotidienne.",
        "Détends-toi, ce n’est pas la fin du monde… C’est juste ton idée de la peur.",
        "Si cet emoji représente ce que tu vois tous les jours, je compatis. C’est une sacrée vie.",
        // Nouvelles phrases ajoutées
        "Tu fais cette tête comme si t'avais vu le prix de ton loyer augmenter.",
        "Ton niveau de panique est ridicule, même les chats sont plus courageux.",
        "On dirait que tu viens de découvrir qu’il faut travailler pour gagner de l’argent.",
        "Cette expression, c’est quand tu réalises que ta vie est une blague.",
        "T’as peur de quoi ? De toi-même ? Je te comprends.",
        "Ce cri silencieux, c’est sûrement ta dignité qui te quitte.",
        "Si c’est ça ta peur, j’aimerais pas être dans ta tête. Ça doit être le chaos.",
        "T’as vu ton avenir ou quoi ? Je ferais la même tête à ta place.",
        "Cette expression, c’est quand tu comprends que personne ne t’aime vraiment.",
        "Arrête avec cette tête, même ton reflet commence à en avoir marre.",
        "Tu fais plus peur que ce qui te terrifie, et c’est un exploit.",
        "T’as crié comme ça la dernière fois qu’on t’a demandé de faire un effort, non ?",
        "Si crier pouvait arranger les choses, tu serais déjà une star du silence.",
        "Ton emoji est plus crédible que toi dans la vraie vie.",
        "On dirait que tu viens de comprendre que t’es médiocre dans tout ce que tu fais.",
        "T’as cette tête à chaque fois que tu dois prendre une responsabilité ?",
        "Si ton expression faciale était un métier, tu serais riche.",
        "J’espère que tu paniques pas autant quand on te demande une blague drôle.",
        "C’est quoi ça ? Une audition pour un rôle de victime professionnelle ?",
        "On dirait que quelqu’un a volé ton intelligence, mais elle n’est jamais revenue.",
        "T’as crié comme ça en voyant le prix de ton sandwich ou quoi ?",
        "Cette tête, c’est ta manière de dire que t’as enfin compris que t’es inutile.",
        "Si tu continues, on va devoir organiser une collecte pour ton ego détruit.",
        "T’as paniqué comme ça la dernière fois qu’on t’a demandé de réfléchir, non ?",
        "On dirait que t’as vu un fantôme… ah non, c’est juste ton avenir.",
        "Cette panique, c’est quand tu réalises que tu seras jamais aussi drôle que moi.",
        "Si tu veux faire cette tête, fais-le devant un public. Ils auront de quoi rire.",
        "Ton emoji est plus expressif que toi dans une conversation réelle.",
        "T’as l’air de quelqu’un qui vient d’apprendre qu’il doit bosser demain.",
        "Si cette expression pouvait résoudre tes problèmes, t’aurais plus rien à faire."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
