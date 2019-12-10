const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('BotAdı yardım menüsü')
    .setAuthor(`Botadı`, client.user.avatarURL) 
      .setDescription('**[Website]() [destek sunucumuz]() [oyver]()**')
.setThumbnail(client.user.avatarURL)
      .addField('`!espri: Güzel Espriler Yapar.`,`!eyaz: Yazdığınız Yazıyı Embed Yazı Biçimine Çevirir.`, `!ailemiz: Botun Olduğu Sunucuları ve Sunuculardaki Olan Kişileri Gösterir.`, `!koş: Koşarsınız.`, `!karat: Etiketlediğiniz Kişiye Kar Topu Atarsınız.`, `tokatat: Etiketlediğiniz Kişiye Tokat Atarsınız!`, ``, ``, ``, ``, ``, ``, ``, ``')
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
    name: 'eğlence',
      category: 'eğlence',
      description: 'eğlence komutlarını gösteir.',
};