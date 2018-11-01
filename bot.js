const Discord = require('discord.js');
const botConfig = require("./botconfig.json");
const bot = new Discord.Client();

bot.on("ready", async () => {

	console.log(`${bot.user.username} Is Online!`);

	bot.user.setActivity("with Gae", {type: "PLAYING"});
	

	//bot send message back
	if (Message.author.bot) return;

	if(Message.channel.type === "dm") return;

	var prefix = botConfig.prefix;
	
	var messageArray = message.content.split("");

	var command = messageArray[0];

	var arguments = messageArray.slice(1);

	if( command === `${prefix}Hi`){

		return Message.Channel.send("Hey You are Gae");
	
	}	

});
bot.login(BOT_TOKEN);
