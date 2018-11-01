const Discord = require("discord.js");
const client = new Discord.Client();
 
// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("FUCK OFF! IF YOU SAY PLS I KILL YOU");
  } else
  if (message.content.startsWith(prefix + "PLS")) {
    message.channel.send("SHOOTS 🔫");
  }
});

client.login(procces.env.BOT_TOKEN);
