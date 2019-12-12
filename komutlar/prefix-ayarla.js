const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (!message.guild) {
  return message.author.send(`:x: Bu komut özel mesajlarda kullanıma kapatılmıştır.`); }
if (message.author.bot === true) {
  return;
}

if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için \`Yönetici\` iznine sahip olmalısın!`);
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let nemesis = args.slice(0).join(' ');

  
  if (nemesis === "prefix-sıfırla") {
   db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`Bu sunucuya ayarlanmış olan prefix başarıyla \`${ayarlar.prefix}\` olarak değiştirildi. Artık bu prefix ile çalışacağım.`)
    return;
  }
  
  var yeniprefix = db.set(`prefix_${message.guild.id}`, nemesis)
    message.channel.send(`Prefix'im başarıyla değişti! Artık \`${yeniprefix}\` prefix'i ile çalışacağım.`)
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['prefiks', 'yeniprefix', 'yeni-prefix', 'ön-ek', 'önek', 'prefix-ayarla', 'prefixayarla', 'önekayarla', 'ön-ek-ayarla'],
  permLevel: 0
};

exports.help = {
  name: 'prefix-ayarla',
  description: 'Botun bulunulan sunucuya özel prefix\'ini değiştirirsiniz.',
  usage: 'prefix <prefix>'
};