const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");

});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "gae":
         message.channel.sendMessage("Ye We know you are Gae!");
         

         

        case "info":
        const embed = new Discord.RichEmbed()
  .setTitle("You can Buy ProSploit Here")
  .setAuthor("ProSploit", "https://i.imgur.com/lm8s41J.png")
  .setColor(0x00AE86)
  .setFooter("Message From BotSploit", "http://i.imgur.com/CdYHQbi.png")
  .setImage("http://i.imgur.com/CdYHQbi.png")                         
  .setThumbnail("http://i.imgur.com/bZoA012.png") 
  .setTimestamp()
  .setURL("https://selly.gg/p/fe31a887")
  .addField("Supports:",
    "Full lua execution", "HttpGet", "Fast Injection")
  message.channel.send({embed});
        break;
    default:
        message.channel.sendMessage("Invalide Command! Sorry");

    }
    
});

bot.login(BOT_TOKEN);
