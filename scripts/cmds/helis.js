const axios = require("axios");
const fs = require('fs-extra');
const path = require('path');

const fileExtensions = {
  "googlevideo.com": ".mp3",
  "pinimg.com": ".jpg",
  "tiktokcdn-us.com": ".mp4",
};

async function checkAuthor(authorName) {
  try {
    const response = await axios.get('https://author-check.vercel.app/name');
    const apiAuthor = response.data.name;
    return apiAuthor === authorName;
  } catch (error) {
    console.error("Erreur lors de la vérification de l'auteur :", error);
    return false;
  }
}

async function helis(api, event, args, message) {
  try {
    const input = args.join(" ");
    const response = await axios.get(`https://helis-ai.vercel.app/kshitiz?input=${encodeURIComponent(input)}`);
    const responseData = response.data;

    if (responseData.response.startsWith("https://")) {
      const responseLink = responseData.response;
      let fileExtension = "";

      if (responseLink.includes("googlevideo.com")) {
        fileExtension = ".music.mp3";
      } else if (responseLink.includes("pinimg.com")) {
        fileExtension = ".image.jpg";
      } else if (responseLink.includes("tiktokcdn-us.com")) {
        fileExtension = ".video.mp4";
      }

      if (fileExtension !== "") {
        const fileName = `helis_${Date.now()}${fileExtension}`;
        const filePath = path.join(__dirname, "cache", fileName);

        const fileResponse = await axios.get(responseLink, { responseType: 'stream' });
        const writer = fs.createWriteStream(filePath);

        fileResponse.data.pipe(writer);

        writer.on('finish', async () => {
          const fileStream = fs.createReadStream(filePath);
          const sentMessage = await message.reply({ body: "Voici ton contenu tout frais, même plus rapide que ta connexion !", attachment: fileStream });
          api.setMessageReaction("✅", event.messageID, () => {}, true);

          global.GoatBot.onReply.set(sentMessage.messageID, {
            commandName: "helis",
            uid: event.senderID
          });
        });

        writer.on('error', (error) => {
          console.error("Erreur lors du téléchargement du fichier :", error);
          message.reply("Quelque chose ne va pas. Il semblerait que le fichier a décidé de disparaître dans le cyberespace.");
        });
      } else {
        message.reply("Ce lien ne me dit rien, va plutôt jouer à un autre jeu.");
      }
    } else {
      message.reply(responseData.response, (c, e) => {
        global.GoatBot.onReply.set(e.messageID, {
          commandName: module.exports.config.name,
          uid: event.senderID
        });
      });
    }
  } catch (error) {
    console.error("Erreur:", error);
    message.reply("Une erreur s'est produite, mais ne t'inquiète pas, ça arrivera encore.");
  }
}

module.exports = {
  config: {
    name: "helis",
    version: "1.0",
    author: "Vex_Kshitiz",
    role: 0,
    shortDescription: "helis ai made by kshitiz",
    longDescription: "helis ai ( capable d'envoyer de la musique, des vidéos et des images et d'interagir avec les utilisateurs)",
    category: "ai",
    guide: "{p}helis {input}"
  },

  handleCommand: helis,
  onStart: async function ({ api, event, message, args }) {
    const isAuthorValid = await checkAuthor(module.exports.config.author);
    if (!isAuthorValid) {
      await message.reply("Alerte changement d'auteur ! Cette commande appartient à Vex_Kshitiz.");
      return;
    }

    return helis(api, event, args, message);
  },
  onReply: async function ({ api, message, event, args }) {
    if (event.type === 'message_reply') {
      const replyData = global.GoatBot.onReply.get(event.messageReply.messageID);

      if (replyData && replyData.uid === event.senderID) {
        global.GoatBot.onReply.delete(event.messageReply.messageID);
        const newArgs = event.body.split(" ");
        return helis(api, event, newArgs, message);
      }
    }
  }
};
