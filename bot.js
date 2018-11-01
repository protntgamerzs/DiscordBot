const Discord = require("discord.js");
const client = new Discord.Client();
 
// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "gae")) {
    message.channel.send("NO U");
  } else
  if (message.content.startsWith(prefix + "NO U")) {
    message.channel.send("BRO YOU SUCK DICKS 24/7");
  }
});
client.login(BOT_TOKEN);
