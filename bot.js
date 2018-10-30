const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'cmds') {
    	message.reply('The commands are /n buy,ping and gea ');
  	}
});
client.on('message', message => {
    if (message.content === 'buy') {
    	message.reply('https://selly.gg/p/fe31a887');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('Fuck off');
  	}
});

client.on('message', message => {
    if (message.content === 'gea') {
    	message.reply('Yea You are Gae');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
