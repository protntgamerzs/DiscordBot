const Discord = require('discord.js');
const superagent = require("superagent");
const Client = new Discord.Client();
const OwnerID = "228066680268390400";

const prefix = "/"



Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `Hello world`, type: 0} });
});

Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "ping") {
		message.channel.send(`Gae! Time took: ${Date.now() - message.createdTimestamp} ms`);
	} else

	if (command === "say") {
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(message.author.username + " says: " + args.join(" "));
		message.channel.send({embed})
	} else

	if (command == "help") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("!help", "Will give the current command list")
		.addField("!ping", "WIll show the ping time for the bot")
		.addField("!say [text]", "Will make the bot say something")
		.addField("!buy", "To buy the exploit");
		message.channel.send({embed})
	} else

	if (command == "buy") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("ProSploit")
		.addField("Supports:")
		.addField("Full lua execution")
		.addField("loadstrings")
		.addField("fast injection");
		message.channel.send({embed})
	}

});

Client.login(BOT_TOKEN);
