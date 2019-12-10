const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {

    const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Botadı`, client.user.avatarURL) 
      .setDescription('**[Website]() [destek sunucumuz]() [oyver]()**')
      .setThumbnail(client.user.avatarURL)
      .addField('** !yardım1 komut adı komut hakkında bilgi**','`ban`,`bankaldır`,`banlimit`,`bansorgulama`')
      .addField('`ust`,`uyar`,`uyarı-kaldır`,`uyarı-sayı`,`!reklamtaraması`,`!yavaş-mod`')
      .addField(' `güvenlik`,`güvenlik-sıfırla`,`sunucu-koruma`,`giriş-izni`')
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