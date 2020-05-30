const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const AccessToken = JSON.parse(fs.readFileSync('./accessToken.json')).token;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

process.on('SIGINT', function() {
    console.log('exiting program...');
    client.destroy();
    process.exit();
});

client.login(AccessToken);