const Discord = require('discord.js');

const bot = new Discord.Client();
var prefix = "µ";

bot.on('ready', () => {
    bot.user.setGame("LMDG Bot|En dév")
    console.log("Démarré sans problème !");
});

bot.login('NDczMTE1NjQ4OTUyNjMxMjk3.Dj9S-A.cl3m5MQ56uW9Xye4AHcSHmHsgc0');
