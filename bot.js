const Discord = require("discord.js");
const bot = new Discord.Client();
 
// Set the prefix
let prefix = "!";
bot.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "info")) {
    const info = new Discord.RichEmbed()
    .setTitle("You can Buy ProSploit Here")
    .setAuthor("ProSploit", "https://i.imgur.com/lm8s41J.png")
    .setColor(0x00AE86)
    .setFooter("Message From BotSploit", "http://i.imgur.com/CdYHQbi.png")
    .setImage("http://i.imgur.com/CdYHQbi.png")                         
    .setThumbnail("http://i.imgur.com/bZoA012.png") 
    .setTimestamp()
    .setURL("https://selly.gg/p/fe31a887")
    .addBlankField(true)
    .addField("Supports:",
    "Full lua execution", "HttpGet", "Fast Injection")
 
  message.channel.send({info});
}});
bot.login("NDUyNDYzMjUxNDk4ODYwNTk2.Drn6qA.yznePHjwvON9J5FtfVTpeCLCjfI"); 
