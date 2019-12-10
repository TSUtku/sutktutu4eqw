const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
      const juke = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor(`Botadı`, client.user.avatarURL) 
      .setDescription('**[Website]() [destek sunucumuz]() [oyver]()**')
      .setThumbnail(client.user.avatarURL)
      .addField('`espri`,`eyaz`, `ailemiz`, `koş`, `karat`, `tokatat`, `lafsok`')
      .addField('`çıkma-teklifi-et`,`avatar`, `aşkölçer`, `mcödül`, `köpek-resmi`, `zar-at`')
      .addField('`gol-at`,``,``,``,``,``')
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