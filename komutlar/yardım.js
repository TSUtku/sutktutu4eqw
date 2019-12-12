const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.setTitle("Nemesis")
.addField(":robot: !moderasyon","Moderasyon komutlarını atar.")
.addField(":robot: !eğlence","eğlence komutlarını atar.")
.addField(":robot: !genel","genel komutlarını atar.")
.addField(":robot: !kullanıcı","ekstra komutları atar.")

.setDescription("genel ve ekstra komutları bakımda")
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