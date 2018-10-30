const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

if (command === 'choose'){
        message.author.send("spit swallow?");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content === "spit") {
                message.channel.send("YOU ARE GAE");
            } else if (message.content === "swallow") {
                message.channel.send("YOU ARE VERY GAY");
            }
        })
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
