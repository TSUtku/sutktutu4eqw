const Discord = require('discord.js');
const loglar = require('../ayarlar.json');
const db = require('quick.db');


var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Nemesis Bot Otorol Komutları`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("<a:f1:637967475530530816>| Otorol Ayarlamak İçin !oto-rol-ayarla @rol #kanal| <a:f1:637967475530530816>")
.addField("<a:f1:637967475530530816>| Otorol Kapat|<a:f1:637967475530530816>", "Otorol Kapatmak İçin Bunu Yazın `!oto-rol-kapat`")
.addField("<a:f1:637967475530530816>| !oto-rol-msg 》 Otorol Mesajını Ayarlar. |<a:f1:637967475530530816> ", "Örnek: `!oto-rol-msg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz.`")

            

return message.channel.sendEmbed(eğlence);
 

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'otorolyardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};