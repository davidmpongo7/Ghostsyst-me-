module.exports = {
    config: {
        name: "prefix",
        version: "1.2",
        author: "XxGhostxx",
        countDown: 5,
        role: 0,
        shortDescription: "Affiche le préfixe du bot",
        longDescription: "Répond avec une réponse aléatoire pour montrer le préfixe du bot",
        category: "reply"
    },
    onStart: async function () {
        // Code à exécuter au démarrage du module, si nécessaire
    },
    onChat: async function ({ event, message, getLang }) {
        if (event.body && event.body.toLowerCase() === "prefix") {
            // Liste étendue des réponses possibles
            const responses = [
                "MON PREFIX EST [%]",
                "Tu veux connaître mon prefix ? C'est 👉% !",
                "Utilise [%], c'est mon prefix",
                "Facile : mon prefix est [%] !",
                "Ah, tu l’as oublié ? C’est [%]",
                "Le secret ? Mon prefix est [%]",
                "Je te donne un indice... [%]",
                "Tu me cherches ? Utilise [%] pour m’appeler !",
                "Mon préfixe préféré ? [%]",
                "C’est pas compliqué, c’est [%]",
                "Tu rêves de moi ? Utilise [%] !",
                "Besoin d'aide ? Mon prefix est [%]",
                "Hey, c’est % qu’il faut taper !",
                "Un bot comme moi mérite un prefix stylé : [%].",
                "Petit rappel : [%] est mon prefix."
            ];

            // Sélectionner une réponse aléatoire
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            // Envoyer la réponse
            return message.reply(randomResponse);
        }
    }
};
