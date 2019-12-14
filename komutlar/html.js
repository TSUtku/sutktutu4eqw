const Discord = require('discord.js');


exports.run = (client, message, args) => {
   const embed = new Discord.RichEmbed()
   .setColor('RED')         
.setTitle('html kodlarımız Burda paylaşılıyor ** https://endlesslove-kodpaylasim.glitch.me/**.')

return message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["js"]
};

exports.help = {
  name: 'html',
  description: 'Send a Minecraft Achievement image to the channel',
  usage: 'mcödül Title|Text (/achievement Achievement Get|Used a Command!)'
};