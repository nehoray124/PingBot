var commando = require('discord.js-commando');
var bot = new commando.Client({
    commandPrefix: '?',
    unknownCommandResponse: false,
    owner: '336527823571517443',
    disableEveryone: true
});
bot.registry.registerGroup('random' ,  'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');
bot.on('ready', () => {
    console.log('Logged in!');
bot.user.setActivity('Ping Pong!');
});
bot.login(process.env.BOT_TOKEN);

console.log('pingBot is online!')
