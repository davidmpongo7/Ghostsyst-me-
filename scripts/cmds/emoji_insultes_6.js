module.exports = {
  config: {
    name: "emoji_insultes_6",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses sarcastiques et drôles aux emojis",
    longDescription: "Réponses humoristiques adaptées aux émotions exprimées par les emojis",
    category: "reply",
  },

  onStart: async function() {},

  onChat: async function({ event, message }) {
    const emoji = event.body.trim();

    // Réponses pour l'emoji 😵
    if (emoji === "😵") {
      const responses = [
        "Ah, t’es KO ? C’est ce qui arrive quand on essaye de réfléchir trop fort.",
        "On dirait que ton cerveau vient de buguer… mais franchement, est-ce que ça marche bien d'habitude ?",
        "T’as la tête qui tourne ? Peut-être parce que t'as essayé de comprendre un truc compliqué pour une fois.",
        "On dirait que tu viens de recevoir une info que ton cerveau a refusé de traiter. Courage, ça va passer.",
        "Wow, t’as l’air aussi perdu qu’un touriste sans carte dans un pays étranger.",
        "C’est l’effet de la réalité qui te frappe ou t’es juste tombé de ta chaise en essayant de penser ?",
        "T’es dans quel état là ? Ça fait peur. On dirait que t'as vu ton historique bancaire.",
        "On dirait que t’as reçu une claque de la vie. Respire un peu, tu vas survivre.",
        "Ah, le cerveau en surcharge ! T’inquiète pas, ça arrive quand on dépasse sa limite habituelle.",
        "T’es tombé ? Ou c’est juste ton ego qui a glissé sur une pente savonneuse ?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 😵‍💫
    if (emoji === "😵‍💫") {
      const responses = [
        "Tourne, tourne, petit moulin… ou est-ce ton cerveau qui essaie de redémarrer ?",
        "T’as l’air aussi confus qu’un enfant dans un cours de philosophie.",
        "Je te conseille de t’asseoir. Ça a l’air sérieux, là.",
        "On dirait que tu viens de perdre une bataille contre la logique. RIP.",
        "T’es sûr que tout va bien ? T’as l’air d’un robot qui bugue en boucle.",
        "Calme-toi, c’est juste un petit vertige existentiel. Rien qu’un café ne peut régler.",
        "T’as vu quoi ? Une équation compliquée ? Ou juste ton reflet dans le miroir ?",
        "Tu viens de découvrir un secret de famille ou quoi ? Cette tête-là, c’est pas pour rien.",
        "T’es sur le point de t’effondrer ou c’est juste ton imagination qui te joue des tours ?",
        "Oh non, encore un de ces moments où le cerveau abandonne le navire. Courage.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 🫨
    if (emoji === "🫨") {
      const responses = [
        "T’as vu un fantôme ou quoi ? Non, attends, c’est juste la vie qui te met une claque.",
        "On dirait que t’as découvert que les licornes n’existent pas. Triste, hein ?",
        "Oh, c’est la tête de quelqu’un qui vient d’apprendre une vérité qui fait mal.",
        "T’as l’air secoué comme un vieux téléphone Nokia. Respire, ça ira mieux.",
        "T’as entendu un truc choquant ? Rassure-toi, c’est sûrement pas aussi grave que ça en a l’air.",
        "Wow, t’es aussi tremblant qu’une feuille dans une tempête. Qu’est-ce qui t’arrive ?",
        "On dirait que ton cerveau vient de subir un court-circuit. Prends une pause.",
        "T’es aussi secoué qu’un soda qu’on vient d’agiter. Respire, ça va se calmer.",
        "Tu veux un câlin ou un sac en papier ? Parce que là, t’as vraiment l’air d’en avoir besoin.",
        "C’est quoi ? Une révélation ? Ou juste le stress de la vie quotidienne ?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 🥶
    if (emoji === "🥶") {
      const responses = [
        "T’as froid ou c’est juste ton cœur qui gèle à cause de ta solitude ?",
        "Wow, t’as l’air aussi gelé qu’un frigo oublié en hiver.",
        "Un conseil : mets un pull et arrête de te plaindre. Ça va aller.",
        "On dirait que t’es dans une situation glaciale… Genre ton crush qui t’ignore ?",
        "Tu veux un chocolat chaud ? Parce que là, t’as l’air d’en avoir vraiment besoin.",
        "T’as froid au cœur ou c’est juste ton âme qui gèle à cause de la vie ?",
        "T’es aussi figé qu’un glaçon dans un verre de soda. Allez, réchauffe-toi un peu.",
        "Si c’est le froid qui te met dans cet état, imagine ce que la vérité pourrait te faire.",
        "On dirait que t’as croisé l’hiver de plein fouet. Tiens bon, le printemps arrive.",
        "Oh, t’es congelé ? Peut-être que c’est juste ton cerveau qui a pris une pause hivernale.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 🥵
    if (emoji === "🥵") {
      const responses = [
        "T’as chaud ? Peut-être que c’est parce que t’as fait une grosse bêtise et que tu t’en rends compte.",
        "On dirait que t’es en surchauffe. Éteins ton cerveau, il chauffe pour rien.",
        "T’as l’air aussi brûlant qu’une pizza sortie du four. Mais, t’es pas aussi appétissant.",
        "Wow, t’as chaud comme si t’avais couru un marathon… Ou juste réfléchi cinq minutes.",
        "Calme-toi, c’est pas la fin du monde. Bois un verre d’eau et tout ira mieux.",
        "T’es aussi rouge qu’une tomate, qu’est-ce qui t’arrive ? T’as vu ton historique de messages ?",
        "Oh, t’es en train de fondre. Peut-être que c’est parce que t’as enfin réalisé à quel point tu galères.",
        "T’es chaud comme ça pour quoi ? Une réunion gênante ou juste la météo ?",
        "C’est quoi ce coup de chaud ? T’as vu ton crush ou c’est juste ton cerveau qui bugue ?",
        "Respire un coup, t’as l’air de quelqu’un qui a vu l’enfer de près. Spoiler : c’est pas fini.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }

    // Réponses pour l'emoji 🤢
    if (emoji === "🤢") {
      const responses = [
        "T’as mangé quoi pour faire cette tête ? Un plat préparé par quelqu’un sans goût ?",
        "Wow, t’as l’air dégoûté comme si t’avais vu ton historique de recherches. Je comprends.",
        "C’est l’effet d’une mauvaise décision ou juste la nourriture qui ne passe pas ?",
        "On dirait que tu viens de goûter à la réalité. C’est dur, hein ?",
        "T’es aussi malade qu’un lundi matin. Courage, ça va passer.",
        "Respire par le nez, c’est juste un petit moment de dégoût passager.",
        "T’as l’air d’avoir vu quelque chose d’horrible. C’est ton reflet ou quoi ?",
        "On dirait que la vie vient de te donner un plat immangeable. Mais bon, t’as signé pour ça.",
        "C’est dur, hein ? Quand tout semble nauséabond, il faut juste fermer les yeux.",
        "T’es dégoûté ? Imagine ce que ça ferait si tu devais vivre ma vie.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return message.reply(randomResponse);
    }
  }
};
