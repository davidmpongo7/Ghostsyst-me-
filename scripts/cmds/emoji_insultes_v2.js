module.exports = {
  config: {
    name: "emoji_insultes_v2",
    version: "1.1",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses provocantes aux emojis",
    longDescription: "Réponses humoristiques et variées sans limite aux emojis spécifiques",
    category: "reply",
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const emoji = event.body.trim();

    const responses = {
      "🤥": [
        "T’es tellement mytho que même ta mère te croit pas.",
        "On devrait te louer pour écrire des scénarios de science-fiction.",
        "Mentir c’est gratuit, mais toi t’en abuses, avoue.",
        "Ton nez doit être plus long que ton avenir.",
        "Même un poisson rouge a plus de crédibilité que toi.",
        "Quand tu parles, on entend ‘bip’, comme une pub télé.",
        "Un mensonge de plus et t’auras ta statue sur la place publique.",
        "Tu mens tellement qu’on devrait t’appeler ‘légende urbaine’.",
        "Avec tes mensonges, même Pinocchio te fait un procès.",
        "T’es tellement bidon qu’on te prendrait pour une gourde.",
        "La NASA t’appelle, ils veulent étudier ton imagination débordante.",
      ],
      "😇": [
        "Un ange ? T’es surtout un escroc déguisé.",
        "T’es tellement faux qu’on te confond avec une copie chinoise.",
        "Ton auréole est fabriquée en plastique bas de gamme.",
        "T’as l’air innocent, mais on sait tous que t’es coupable.",
        "Saint ou pas, tu ferais peur même à Lucifer.",
        "Ton air angélique est aussi crédible qu’un clown triste.",
        "Descends de ton nuage, il va éclater avec ton poids.",
        "T’es le genre d’ange qu’on trouve au rayon des promos.",
        "Ton auréole est sponsorisée par Wish, avoue.",
        "Un ange déchu ? Non, t’es juste mal foutu.",
        "Même les démons ne veulent pas de toi, ça en dit long.",
      ],
      "🤡": [
        "Oh le clown, t’as oublié ton nez rouge ?",
        "T’es drôle comme un sketch raté.",
        "Un clown triste, ça te va bien, t’as déjà l’air pathétique.",
        "Ton existence est la blague, pas besoin de faire d’efforts.",
        "Un cirque te cherche, mais même eux hésitent à t’engager.",
        "Le roi des clowns, mais sans couronne ni talent.",
        "T’es tellement ridicule que t’es ton propre public.",
        "On t’appelle pour des soirées stand-up ? Non ? Étonnant.",
        "Arrête de forcer, même les blagues Carambar sont plus drôles.",
        "T’es un clown, mais on rigole pas avec toi, on rigole de toi.",
        "Le seul numéro que tu maîtrises, c’est celui de la honte.",
      ],
      "👿": [
        "Un démon ? Même les enfants rient de toi.",
        "T’as pas la tête de l’emploi, retournes-y.",
        "Même les enfers ont honte de t’avoir recruté.",
        "Lucifer te cherche pour te renvoyer dans ton trou.",
        "Arrête de jouer au méchant, t’as autant de charisme qu’un cactus.",
        "T’es tellement mauvais qu’on te prendrait pour un amateur.",
        "Ton niveau de méchanceté est au même point que ta dignité : bas.",
        "Un démon discount, c’est tout ce que tu es.",
        "T’effraies personne, même pas un chaton.",
        "Lucifer m’a dit qu’il t’a viré. Bravo, champion.",
        "Tu fais pitié même pour un démon, retourne faire la vaisselle.",
      ],
      "💀": [
        "Un crâne vide, c’est une belle représentation de toi.",
        "Ton cerveau doit être en vacances depuis longtemps.",
        "T’es mort de l’intérieur, mais t’inquiète, personne ne l’a remarqué.",
        "Ton look squelettique est parfait pour Halloween, mais c’est toute l’année, non ?",
        "Un crâne ? T’es aussi expressif qu’un vieux caillou.",
        "Même la mort a l’air plus vivante que toi.",
        "T’es tellement fade que même un fantôme t’évite.",
        "Ta personnalité est aussi creuse que ce crâne.",
        "Un squelette avec une vie sociale inexistante, bravo.",
        "T’as tellement peur de vivre que t’es déjà en mode mort-vivant.",
        "Ton ‘style mortel’ est juste mort, arrête de forcer.",
      ],
      "☠️": [
        "Danger ? Toi, t’es aussi inoffensif qu’un chaton mouillé.",
        "Un pirate raté, c’est tout ce que t’es.",
        "T’essayes de faire genre, mais on voit bien que t’es bidon.",
        "Ton symbole est flippant, mais toi, t’es juste pathétique.",
        "T’as le charisme d’une boîte de conserve vide.",
        "Même un drapeau pirate te trouve ridicule.",
        "Danger ? On rigole bien avec toi.",
        "Arrête, t’es plus gênant que dangereux.",
        "T’as l’air d’un gars qui joue au méchant devant son miroir.",
        "Même les jeux vidéo te refusent en tant que boss.",
        "Un danger public, mais uniquement pour toi-même.",
      ],
    };

    if (responses[emoji]) {
      const randomResponse = responses[emoji][Math.floor(Math.random() * responses[emoji].length)];
      return message.reply(randomResponse);
    }
  },
};
