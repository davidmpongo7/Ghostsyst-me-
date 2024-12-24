module.exports = {
  config: {
    name: "emoji_insultes",
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

    // Réponses pour l'emoji 🤗
    if (emoji === "🤗") {
      const responses = [
        "Ah, t’es tout content ? Laisse-moi deviner, t’as juste vu ton reflet dans le miroir.",
        "T’es aussi enthousiaste qu’un robot qui a juste appris à sourire.",
        "Franchement, avec cette expression, t’es à un pas de gagner le titre de champion du monde de la fake enthusiasm.",
        "Tu veux un câlin ou tu veux juste me donner la nausée avec ton enthousiasme mal placé ?",
        "Ah, l’emoji qui veut dire : 'Je suis trop content de rien'.",
        "T’es sûr que t’es pas juste en train de t’étirer après une sieste ?",
        "Un câlin pour moi ? Non merci, je préfère encore me faire attaquer par un tigre.",
        "C’est mignon, mais j’ai plus envie de rire que de te donner un câlin.",
        "Si ça c’est ton idée de la joie, je suis vraiment désolé pour toi.",
        "Franchement, t’es aussi crédible avec cet emoji que si tu te mettais à vendre de l’eau à un poisson.",
        "Tu veux vraiment me faire croire que tu es content avec cet emoji ? Sérieusement ?",
        "T’as l’air plus faux qu’un sourire de vendeur de voitures d’occasion.",
        "Je vois, tu es tout content… De quoi ? De faire semblant d’être heureux ?",
        "Tu sembles tellement excité… pour rien. C’est adorable.",
        "Un câlin virtuel ? Si je peux éviter, je préfère largement.",
        "Ton enthousiasme est aussi authentique qu'une publicité pour un produit miracle.",
        "Tu te sens bien avec ça ? Parce que moi, je me sens juste mal à l’aise.",
        "Ce sourire forcé, c’est aussi naturel qu’un poisson qui fait du vélo.",
        "C’est pas un câlin que tu veux, c’est juste l’attention, hein ?",
        "Ce emoji 🤗, c’est tout ce qu’il te reste après une journée de non-achèvement.",
        "Ouais, super ton emoji, on dirait presque que tu essaies de convaincre tout le monde que t’es heureux.",
        "Ton enthousiasme a autant de crédibilité que la météo du jour.",
        "Ce 🤗 ressemble plus à un signal de détresse qu’à un vrai câlin.",
        "C’est bien d’être joyeux, mais faut pas que ça fasse aussi forcé que ton sourire.",
        "Franchement, tu pourrais faire un câlin à un cactus, ce serait plus agréable.",
        "Tu veux qu’on t’applaudisse pour ton emoji ? Ah non, je préfère économiser mes mains.",
        "Ce 🤗, ça sent plus l’emoji que tu envoies quand t’as rien à dire mais que tu veux quand même faire genre.",
        "Un câlin ? Avec toi ? Fais-moi rêver, mais je préfère encore une session de yoga.",
        "L’emoji est adorable, mais tes intentions sont tellement transparentes.",
        "Un câlin virtuel, c’est ça ta solution pour résoudre tes problèmes ?",
        "T’es en mode câlin ou en mode je-voudrais-qu’on-m’abandonne-tous-silencieusement ?",
        "Si t’étais aussi enthousiaste en vrai, ce serait un miracle.",
        "Tu sais, je préfère un emoji qui parle que celui qui essaie de me faire croire qu'il est sincère.",
        "T’es tout mignon avec ton enthousiasme, mais c’est juste une comédie en deux actes.",
        "Ce 🤗 ? T’essaies d’être mignon ou t’es vraiment ce niveau de faux ?",
        "Ton emoji 🤗 c’est l’expression parfaite pour cacher une vie intérieure aussi excitante qu’un document Word vide.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
