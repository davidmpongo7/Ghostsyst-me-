const axios = require("axios");

async function fetchFromAI(url, params) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la communication avec l'API :", error.message);
    return null;
  }
}

async function getAIResponse(input, userName, userId, messageID) {
  const services = [
    { url: "https://ai-chat-gpt-4-lite.onrender.com/api/hercai", params: { question: input } },
  ];

  let response = `❤️ Mon cher(e) ${userName}, je n'ai pas pu me connecter à mon inspiration divine. Mais sache que je suis toujours là pour toi... 💖`;
  let currentIndex = 0;

  for (let i = 0; i < services.length; i++) {
    const service = services[currentIndex];
    const data = await fetchFromAI(service.url, service.params);
    if (data && (data.gpt4 || data.reply || data.response)) {
      response = data.gpt4 || data.reply || data.response;
      break;
    }
    currentIndex = (currentIndex + 1) % services.length; // Passer au service suivant
  }

  return { response, messageID };
}

module.exports = {
  config: {
    name: "rose",
    author: "shizuka",
    role: 0,
    aliase: ["rose", "❤️"],
    category: "AI",
    shortDescription: "Rose, le bot qui répond avec tendresse et un peu de passion 💖",
  },

  onStart: async function ({ api, event, args }) {
    const input = args.join(" ").trim();
    if (!input) {
      api.sendMessage(
        "❤️ Mon amour, pose-moi une question et je serai là pour y répondre avec tout mon cœur... 😘",
        event.threadID,
        event.messageID
      );
      return;
    }

    api.getUserInfo(event.senderID, async (err, ret) => {
      if (err) {
        console.error(err);
        return;
      }
      const userName = ret[event.senderID].name;

      // Ajouter un délai pour un temps de réponse réaliste
      setTimeout(async () => {
        const { response, messageID } = await getAIResponse(input, userName, event.senderID, event.messageID);
        api.sendMessage(
          `❤️ Mon cher(e) ${userName}, voici ma réponse pleine d'amour et de tendresse : \n━━━━━━━━━━━━━━━━\n${response}\n━━━━━━━━━━━━━━━━`,
          event.threadID,
          messageID
        );
      }, 2000); // Délai de 2 secondes
    });
  },

  onChat: async function ({ api, event, message }) {
    const messageContent = event.body.trim().toLowerCase();
    if (messageContent.startsWith("❤️")) {
      const input = messageContent.replace(/^❤️\s*/, "").trim();

      api.getUserInfo(event.senderID, async (err, ret) => {
        if (err) {
          console.error(err);
          return;
        }
        const userName = ret[event.senderID].name;

        // Ajouter un délai pour un temps de réponse réaliste
        setTimeout(async () => {
          const { response, messageID } = await getAIResponse(input, userName, event.senderID, message.messageID);
          message.reply(
            `❤️ Mon doux(e) ${userName}, voici ce que je ressens pour toi : \n━━━━━━━━━━━━━━━━\n${response}\n━━━━━━━━━━━━━━━━\n`,
            messageID
          );
          api.setMessageReaction("❤️", event.messageID, () => {}, true);
        }, 2000); // Délai de 2 secondes
      });
    }
  },
};
