var commando = require('discord.js-commando');
class PingPong extends commando.Command{
    constructor(client){
        super(client , {
            name: 'pong',
            group: 'random',
            memberName: 'pong',
            description: 'ping pong game',

        });
    }
    async run(message , args){
                message.reply('PING!!')
            
    }
}




module.exports = PingPong;
