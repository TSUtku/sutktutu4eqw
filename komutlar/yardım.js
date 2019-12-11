const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.setTitle("Bot adı")
.addField("!moderasyon","Moderasyon komutlarını atar.")
.addField("!eğlence","eğlence komutlarını atar.")
.addField("!genel","genel komutlarını atar.")
.addField("!ekstra","ekstra komutları atar.")
.addField("!müzik","müzik komutlarını atar.")
message.channel.sendEmbed(lembed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
  };