const axios = require('axios');
const { GoatWrapper } = require('fca-liane-utils');

module.exports = {
  config: {
    name: "flux",
    aliases: ["ff"],
    version: "1.5",
    author: "Samir Œ || Modified By Priyanshi Kaur",
    countDown: 5,
    role: 2,
    shortDescription: "Image generator from Fluxpro API",
    longDescription: "",
    category: "ai",
    guide: {
      en: "{pn} <prompt> --ar 1:1"
    }
  },

  onStart: async function ({ message, args }) {
    const waitingMessages = [
      "🎨 Creating your masterpiece...\n(🎨 En train de créer ton chef-d'œuvre...)",
      "🖌️ Painting with pixels...\n(🖌️ Peindre avec des pixels...)",
      "🌈 Summoning colors from the digital realm...\n(🌈 Invocation des couleurs depuis le royaume numérique...)",
      "🔮 Consulting the AI oracle...\n(🔮 Consultation de l'oracle IA...)",
      "🚀 Launching your imagination into cyberspace...\n(🚀 Lancement de ton imagination dans le cyberespace...)"
    ];

    const randomWaitingMessage = waitingMessages[Math.floor(Math.random() * waitingMessages.length)];
    await message.reply(randomWaitingMessage);

    let prompt = args.join(" ");
    let aspectRatio = "1:1";

    // Extract aspect ratio if provided
    const arIndex = args.indexOf("--ar");
    if (arIndex !== -1 && args[arIndex + 1]) {
      aspectRatio = args[arIndex + 1];
      // Remove --ar and its value from the prompt
      args.splice(arIndex, 2);
      prompt = args.join(" ");
    }

    try {
      const apiUrl = `http://api-samirxz.onrender.com/fluxpro?prompt=${encodeURIComponent(prompt)}&ratio=${aspectRatio}`;
      const imageStream = await global.utils.getStreamFromURL(apiUrl);

      if (!imageStream) {
        return message.reply("❌ Oops! Tu veux de l’aide ? Contacte mfacebook.com/jr.Xx.Ghost.xX, ça pourrait sauver ce qui reste de ton cerveau 👻"

");
      }
      
      return message.reply({
        body: '✨ Ah, une image ! Ça change un peu de ton niveau habituel, mais bon, c’est un début 🖼️',
        attachment: imageStream
      });
    } catch (error) {
      console.error(error);
      return message.reply("Eh bien, même mon code commence à se poser des questions. Va demander du support avant que ça ne devienne un drame 💔. Clique ici pour de l’aide :\nhttps://t.me/Architectdevs 🆘"

");
    }
  }
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
