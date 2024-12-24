module.exports = {
  config: {
    name: "🤐",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Bouche scellée",
    longDescription: "Réponses sarcastiques pour un visage avec la bouche scellée.",
    category: "reply",
  },
  onStart: async function() {},
  onChat: async function({
    event,
    message,
    getLang
  }) {
    if (event.body && event.body.toLowerCase() == "🤐") {
      const responses = [
        "Ah, tu te tais volontairement ? Ou tu viens juste de réaliser que ce que tu voulais dire n'était pas pertinent ?",
        "Tu veux qu'on devine ce que tu penses ou tu préfères continuer à te taire pour toujours ?",
        "Ce silence, c'est plus gênant que toute une journée sans Wi-Fi.",
        "Tu essaies d'appliquer la politique du silence pour faire comme les sages ? Spoiler : ça ne marche pas.",
        "Si tu t'étais un peu plus intéressé à ce qu'on disait, tu n'aurais pas eu besoin de faire cette tête-là.",
        "On dirait que tu fais ton mime. C'est bien, mais tu n'as rien à dire, hein ?",
        "Ce silence, c'est juste une excuse pour ne pas avoir à dire quelque chose de plus ridicule que ce qu'on entend déjà.",
        "Est-ce que tu essaies de nous impressionner avec ton mutisme ? Parce que ça marche... mais dans le mauvais sens.",
        "Tu veux garder le secret ? Ne t'inquiète pas, ton expression nous dit tout.",
        "Ce visage, c'est celui de quelqu'un qui s'est rendu compte qu'il aurait dû se taire dès le départ.",
        "Alors, c'est le silence qui parle maintenant ? D'accord, on t'écoute… pas vraiment.",
        "Tu fais ton impression de statue, hein ? J'espère que tu n'es pas aussi vide à l'intérieur.",
        "Quand tu essaies de dire quelque chose mais que même tes silences sont gênants.",
        "Ah, donc le mutisme est devenu ta nouvelle stratégie ? Spoiler : c'est pas plus intéressant que tes paroles.",
        "Si tu avais juste ouvert la bouche, tu aurais pu éviter de rendre tout le monde encore plus mal à l'aise.",
        "Le mutisme, c'est bien pour une séance de yoga, mais ici, c'est juste lourd.",
        "Ce visage 🤐, c'est comme une carte blanche pour dire des trucs inutiles.",
        "On dirait que t'as mis ta bouche sous clé, mais franchement, ça ne change rien à la situation.",
        "Tu crois que ton silence attire l'attention ? Non, il nous fait juste regretter de t'avoir demandé quelque chose.",
        "Si tu gardais la bouche fermée pour de bon, peut-être que ça améliorerait la qualité des discussions.",
        "Ce silence… on dirait une tentative désespérée de cacher quelque chose d'encore plus gênant.",
        "Tu veux qu'on te félicite pour avoir trouvé un emoji qui dit rien du tout ? Bien joué.",
        "Est-ce que ton silence fait partie d'une performance artistique ou tu as juste oublié comment parler ?",
        "Ce visage, c'est celui de quelqu'un qui vient de se rendre compte qu'il a trop dit de bêtises.",
        "Le 🤐, un emoji pour ceux qui essaient d'être mystérieux mais qui finissent juste par être lourds.",
        "Tu sais que tu peux aussi juste dire quelque chose, mais bon, rester silencieux, c'est une option.",
        "Ce visage scellé, c'est comme si tu te préparais à entrer dans une pièce où tout le monde s'en fout de ta présence.",
        "Ce silence, c'est peut-être ta meilleure option… mais c'est aussi la moins intéressante.",
        "Tu crois que rester muet va ajouter de la profondeur à la conversation ? Spoiler : non.",
        "On dirait que tu t'es transformé en statue de cire, félicitations pour l'originalité.",
        "Tu as quelque chose à dire ou tu te contentes de rester là comme un meuble ?",
        "Silence radio, mais toujours aussi inconfortable à entendre.",
        "Ce mutisme, c'est ton idée de faire un grand effet ? Disons juste qu'on n'est pas impressionné.",
      ];
      return message.reply(responses[Math.floor(Math.random() * responses.length)]);
    }
  }
};
