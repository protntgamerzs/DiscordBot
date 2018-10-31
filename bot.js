const Discord = require('discord.js');
const bot = new Discord.Client()

bot.on("ready", () => {
    console.log("Ready");
});

const prefix = "!";
bot.on("message", (message) => {
  if (message.content.startWith(prefix)) return;
   
    if(message.content.startWith(prefix + "help")) {
        message.channel.send("OOF I CANT HELP YOU");
    } else

    if(message.console.startWith(prefix + "pls")) {
        message.channel.send("I SAID I CANT YOU MOTHER FUCKER!");    
    }
});
bot.login(BOT_TOKEN);
