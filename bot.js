const Discord = require("discord.js");
const bot = new Discord.Client();
 
// Set the prefix
let prefix = "!";
bot.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "hello")) {
    message.channel.send("FUCK OFF!");
  } else
  if (message.content.startsWith(prefix + "why")) {
    message.channel.send("ARE YOU DUMB!");
  }
});
 
bot.login(BOT_TOKEN);
