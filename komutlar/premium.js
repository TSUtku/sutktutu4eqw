const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
      const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Eğlence`, client.user.avatarURL) 
    .setDescription('**!yardımkomut  Komut ismi yazarak komutların ne işe yaradığını bulabilirsiniz.**')
      .setThumbnail(client.user.avatarURL)
      .addField('**🔥 **','`reklamtaraması`,`banlimit` ')
      .addField('**🔥 **','`öneri`,`ust`, `kayıtsistemi` ')
       .setFooter(``, client.user.avatarURL)
      .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'premiım',
      usage: 'ekstra',
      description: 'ekstra komutlarını gösteir.',
};