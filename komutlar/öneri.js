const Discord = require('discord.js');

exports.run = function(client, message, args) {
//Komutun Kodları
  const öneri = args.join(' ');
  if(!öneri) return message.channel.send('Ne önereceğim');
  const oneri_kanal = client.channels.get('654789853187276830');
    oneri_kanal.send(
  new Discord.RichEmbed()  
  .setTitle('Bir öneri var')
    .setDescription('Öneri:'+öneri+'\n Öneren:'+message.author.tag+'\nKomut kullandığı sunucu  : '+message.guild.name)
    .setThumbnail(message.author.avatarURL)
    .setColor('RANDOM')
  )
  oneri_kanal.send('');
message.channel.send('**Öneriniz iletildi!**');
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'öneri',//Komutun adı (Komutu girerken lazım olucak)
  description: 'önerinizi bize söylersiniz.',//Komutun Açıklaması
  usage: 'öneri' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}