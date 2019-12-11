
const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":no_entry: Yeterli yetkiniz yok");
{
      let args = message.content.split(' ').slice(1).join(" ");
    if (!args) return message.channel.send(" Lütfen oynuyor `yazısını` yazınız.")
client.user.setActivity(args);
message.channel.send('Durum '+args+' olarak değiştirildi.');
}

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

module.exports.help = {
  name: 'oynuyorsahip',
  description: 'botun oynuyor kısmını değiştirirsiniz',
  usage: '!oynuyor'
};