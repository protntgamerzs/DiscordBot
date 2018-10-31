const Discord = require('discord.js');
const bot = new Discord.Client()

bot.on("ready", function() {
    console.log("Ready");

});
const prefix = "!";
bot.on("message", (message) => {
  if (message.content.startWith(prefix)) return;
   
    if(message.content.startWith("Help")) {
        message.channel.send("OOF I CANT HELP YOU");
}
});

bot.login(BOT_TOKEN);
