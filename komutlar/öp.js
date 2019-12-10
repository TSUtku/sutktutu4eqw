const Discord = require('discord.js');
let ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix

exports.run = function(client, msg, author) {
let yazi msg.mentions.members.first();
if (!yazi) {
msg.channel.sendMessage(
"**Örnek Kullanım:** `" +
prefix +
"!öp @kullanıcı"
);
}
if (yazi) {
const embed = Discord.RichEmbed()
.setTitle("bot adı")
.setDescripton(
`wooaw ❤ ** <@${msg.authot.id}> Adlı kullanıcı ${yazi} Adlı kullanıcıyı öptü!**`
)
.setColor("BLUE")
.setImage(
"https://cdn.discordapp.com/attachments/634056817017880586/645300230790840360/tenor-1.gif"
);
msg.channel.sendMessage(embed);
}
};

exports.conf => {
guildOnly: false,
}