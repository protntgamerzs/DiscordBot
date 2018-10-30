const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

if (command === 'gae'){
        message.author.send("spit or swallow?");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "spit") {
                message.channel.send("You are Gae");
            } else if (message.content == "swallow") {
                message.channel.send("You are Very Gae");
            }
        })
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
