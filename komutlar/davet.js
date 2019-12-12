const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Beni sunucuna davet etmek için tıkla.")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot yapımıcılari:** <@636666776972820490> <@639430589493018644> <@611624362277077012> <@444919402543054848>")
  .setFooter('Yapımcı : | The Dark Knight#7113 | ', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("» Linkler", `[Davet Linki](https://discordapp.com/oauth2/authorize?client_id=654061697606090752&scope=bot&permissions=2147483127)`+ "**\n**"+`[Destek Sunucusu]( )`, false)
  .setURL(' ')
      .setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};