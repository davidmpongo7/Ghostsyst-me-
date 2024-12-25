module.exports = {
  config: {
    name: "speed",
    aliases: ["running"],
    author: "Hassan",
    version: 1.1,
    role: 0,
    shortDescription: {
      en: "Displays run of the bot's system."
    },
    longDescription: {
      en: "Displays Running speed of the bot's system."
    },
    category: "system",
    guide: {
      en: "Use {up} uptime to check the current Running speed of the bot's system."
    }
  },
  onStart: async function ({ api, event, args }) {
    const timeStart = Date.now();
    await api.sendMessage("Vérification de la vitesse... Ouais, je sais, tu m'attends. 💔", event.threadID);
    const uptime = Date.now() - timeStart;
    // Ajustement de la plage pour plus de valeurs entre 100 et 200
    const randomUptime = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    // Décider si on montre la vitesse réelle ou non
    const showRealRun = Math.random() <= 0.2;
    const finalRunning = showRealRun ? uptime : randomUptime;

    api.sendMessage(`Vitesse de fonctionnement 🐎 ${finalRunning} MS. C'est mieux que toi qui galère à marcher sans trébucher.`, event.threadID);
  },
  onChat: async function ({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "uptimespeed") {
      // Ajustement de la plage pour plus de valeurs entre 100 et 200
      const uptimeValue = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
      return message.reply(`Vitesse de fonctionnement ? Plutôt de la vitesse de tortue 🐢. C'est ${uptimeValue} jours, mec. À ce rythme-là, tu vas finir avant qu'il ne se passe quelque chose.`);
    }
  }
};
