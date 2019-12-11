const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {

    const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Botadı`, client.user.avatarURL) 
      .setDescription('**!yardımkomut  Komut ismi yazarak komutların ne işe yaradığını bulabilirsiniz.**')
      .setThumbnail(client.user.avatarURL)
      .addField('**:fire: **','`oynat`,`durdur`,`duraklat`,`geç`,`devamet`,`tekrar`')
      
    
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
    name: 'müzik',
      category: 'müzik',
      description: 'müzik komutlarını gösteir.',
};