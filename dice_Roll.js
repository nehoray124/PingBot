var commando = require('discord.js-commando');
class DiceRoll extends commando.Command{
    constructor(client){
        super(client , {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'random number generator',

        });
    }
    async run(message , args){
        var roll = Math.floor(Math.random () * 6) + 1 ;
        message.reply(' המספר שיצא לך הוא ' + roll);

    }
}




module.exports = DiceRoll;
