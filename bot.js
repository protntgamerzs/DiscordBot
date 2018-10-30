const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});   

client.on('message', message => {
    if (message.content === 'cmds') {
    if (message.content === 'cmds') {
    	message.reply(`commands are :`
        `!buy`
        `buy`
        `gae`);
  	}
});
 client.on('message', message => {
    if (message.content === 'buy') {
    if (message.content === 'buy') {
    	message.reply("https://selly.gg/p/fe31a887");
  	}
});
        
client.on('message', message => {
    if (message.content === 'gae') {
    if (message.content === 'gae') {
    	message.reply("You Are Gae");
  	}
});        

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
