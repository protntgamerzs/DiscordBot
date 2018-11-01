const Discord = require("discord.js");
const client = new Discord.Client();
 
// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("no!");
  } else
  if (message.content.startsWith(prefix + "pls")) {
    message.channel.send("YOU ARE SO STUPID SPOOKYGAMES MADE ME FOR BANNING PEOPLE NOT FOR HELPING!");
  }
});
 
client.run(BOT_TOKEN);
