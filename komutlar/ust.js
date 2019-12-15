

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")



let g = await db.fetch(`pre_${message.guild.id})`)
if(!g) return message.reply("gold değilsin yaprak")
if(g === "acik") {

//komut buraya
}
})
  
  
const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu komutu kullanmak için`MESAJLARI_YÖNET` yetkisine sahip olmalısın!')
  let kanal = message.mentions.channels.first()

  if (!kanal) return message.channel.send(`Kanalıda etiketlemelisiniz.`)
  
    db.set(`otobsilici_${kanal.id+message.guild.id}`, "<#"+kanal.id+">")
    
        db.set(`otobsilicia_${kanal.id+message.guild.id}`, "acik")

      message.channel.send(`**Artık ${kanal} adlı kanalda bir bot mesaj yazarsa 3 saniye sonra silinecek.**`)
    
  
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: `Yeterli Yetki Yok`
};

exports.help = {
  name: 'ust',
  description: 'Botun pingini gösterir.',
  usage: ''
};
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ust',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};