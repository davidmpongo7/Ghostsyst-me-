module.exports = {
  config: {
    name: "big_smile",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses ultra joyeuses",
    longDescription: "Réponses hyper enthousiastes et débordantes de joie pour l'emoji 😃",
    category: "reply",
  },

  onStart: async function () { },

  onChat: async function ({ event, message }) {
    if (event.body && event.body === "😃") {
      const responses = [
        "Oh là là, si ta joie était une énergie, tu alimenterais toute la ville ! ⚡️",
        "Je suis presque jaloux de ton niveau de bonheur, tu rayonnes ! ✨",
        "Wouah, ce sourire me donne envie de courir un marathon, mais sans me fatiguer ! 🏃‍♂️",
        "Tu es vraiment une pile électrique, ou tu caches des bonbons dans ton sourire ? 🍬",
        "Est-ce que tu as un abonnement à la joie de vivre ou c'est naturel ? 😆",
        "Avec ce sourire, t'as presque plus d'ondes positives que ma batterie quand elle est pleine ! 🔋",
        "C'est pas un sourire, c'est une explosion de bonheur, tu fais sauter tous les plafonds ! 💥",
        "Tu veux vraiment que tout le monde ici soit de bonne humeur ? Parce que c'est réussi ! 😎",
        "Si t'étais une chanson, tu serais l'hymne du bonheur. 🎶",
        "T'as une version du bonheur dans ta poche ou t'es né comme ça ? 😄",
        "Je vais devoir mettre des lunettes de soleil tellement tu brilles de bonheur ! 🕶",
        "Avec toi, même un lundi matinal devient un vendredi soir ! 🎉",
        "On dirait que tu viens de gagner à la loterie de la bonne humeur. 💸",
        "Un sourire comme ça, c'est une invitation à sourire avec toi, ça m'infecte ! 😂",
        "Si le bonheur était une compétition, t'aurais déjà ta médaille d'or ! 🏅",
        "C'est comme si ton sourire était une centrale électrique. Tu éclaires tout autour ! 🌞",
        "T'es tellement heureux que même les nuages se dissipent quand tu passes ! ☁️",
        "Laisse-moi deviner, t'as bu un litre de jus d'orange ce matin ? C'est du pur vitamine ! 🍊",
        "J'espère que ton sourire est enregistré quelque part, parce que c'est une œuvre d'art ! 🎨",
        "Avec ce sourire, tu pourrais rendre le monde meilleur en 2 minutes chrono. 🌍",
        "Tu es officiellement l'emoji du jour, et personne ne peut rivaliser ! 😁",
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      message.reply(randomResponse);
    }
  },
};
