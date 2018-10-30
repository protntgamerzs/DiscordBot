const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'buy') {
    	message.reply('ProSploit Beta Buy it here ---> https://selly.gg/p/fe31a887
                       'Supports:'
                        'Full lua execution'
                        'Getobjects/HttpGet'
                        'fast injection');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
