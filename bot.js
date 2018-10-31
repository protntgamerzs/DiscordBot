const Discord = require("discord.js");
const bot = new Discord.Client();
 
// Set the prefix
let prefix = "!";
bot.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "info")) {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "test.",
    fields: [{
        name: "Fields",
        value: "test."
      },
      {
        name: "Masked links",
        value: "test."
      },
      {
        name: "Markdown",
        value: "test."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
bot.login(code); 
