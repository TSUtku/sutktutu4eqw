const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('BotAdı yardım menüsü')
    .setAuthor(`Botadı`, client.user.avatarURL) 
      .setDescription('**[Website]() [destek sunucumuz]() [oyver]()**')
.setThumbnail(client.user.avatarURL)
      .addField('`!ban : Etiketlediğiniz kişiye sunucudan yasaklar.`,`!bankaldır : Etiketlediğiniz kişinin banını kaldırır.`, `!banlimit : Sunucunuzda Ban limiti belirlediğinizde o sayıdan sonra ban atan kişinin rollerini alır.`, `!bansorgulama : etiketlediğiniz kişinin ban nedenini at`, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``')
      .addField('``,``, ``, ``, ``, ``')
 
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
    name: 'moderasyon',
      category: 'moderasyon',
      description: 'moderasyon komutlarını gösteir.',
};