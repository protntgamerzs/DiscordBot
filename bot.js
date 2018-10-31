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

         case "buy":
        var buy = new Discord.RichEmbed()
        .addField("Buy the Exploit To click ---->", "https://selly.gg/p/fe31a887", true) 
        .addField("It Supports:", "Full lua", "Getobject/Httpget","Fast Injection", true) 
        .setColor(0xFFAB00)
        message.channel.sendEmbed(buy);

        case "info":
        var info = new Discord.RichEmbed()
        .addField("gae", "an Awesome Command", true) 
        .addField("buy", "To buy the Product ProSploit", true) 
        .setColor(0xFFAB00)
        message.channel.sendEmbed(info);
        break;
    default:
        message.channel.sendMessage("Invalide Command! Sorry");

    }
    
});

bot.login(BOT_TOKEN);
