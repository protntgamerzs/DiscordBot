const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
    console.log('I am ready!');
    if (!message.content.startsWith(prefix)) return;
 
});
 if (message.content.startsWith(prefix + "cmds")) {
    	message.reply("The commands Are :\n" +
"!buy\n" +
"!ping\n" +
"!gae");
  	}

});
client.on('message', message => {
    if (message.content.startsWith(prefix + "buy") {
    	message.reply('https://selly.gg/p/fe31a887');
  	}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "ping") {
    	message.reply('Fuck off');
  	}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "gea") {
    	message.reply('Yea You are Gae');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
