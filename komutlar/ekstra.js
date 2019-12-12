const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
      const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Botadı`, client.user.avatarURL) 
    .setDescription('**!yardımkomut  Komut ismi yazarak komutların ne işe yaradığını bulabilirsiniz.**')
      .setThumbnail(client.user.avatarURL)
      .addField('**🔥 **','`davet`,`istatislik`, `sunucular` ')
      .addField('**🔥 **','`ailemiz`,`davet-oluştur`,`saat`,`endlesslove` ')
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
    name: 'ekstra',
      category: 'ekstra',
      description: 'ekstra komutlarını gösteir.',
};