var commando = require('discord.js-commando');
class DiceRoll2 extends commando.Command{
    constructor(client){
        super(client , {
            name: 'roll2',
            group: 'random',
            memberName: 'roll22',
            description: 'random number generator 2',

        });
    }
    async run(message , args){
        var rollOne = Math.floor(Math.random () * 6) + 1 ;
        var rollTwo = Math.floor(Math.random () * 6) + 1 ;
        
        if(rollOne == 6 && rollTwo == 6){
        message.reply(' המספרים שיצאו לך הם ' + rollOne + ' , ' + rollTwo);
            message.reply(' !הוצאת שש שש! תותח אתה ')
        }else{
            
        if(rollOne == rollTwo){
        message.reply(' המספרים שיצאו לך הם ' + rollOne + ' , ' + rollTwo);
        message.reply(' !הוצאת שני מספרים שווים! תותח אתה ')

        }else{
            message.reply(' המספרים שיצאו לך הם ' + rollOne + ' , ' + rollTwo);

        }}


    
}}




module.exports = DiceRoll2;
