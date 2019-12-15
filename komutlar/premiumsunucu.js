const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  if (message.author.id !== ayarlar.sahip) return message.channel.send(`Bu komutu sadece \`Sahibim\` kullanabilir.`)
    let id = client.guilds.get(args[0])
    var args = args[1]
    if( args == "aç" ) {
      
      
      db.set(`pre_${id.id}`, "açık")
      message.channel.send("Başarıyla `" + id.name + "` adlı sunucunun premium özelliği ni açtınız")
      
      
    }
    if( args == "kapat" ) {
      
      
      db.delete(`pre_${id.id}`)
      message.channel.send("Başarıyla `" + id.name + "` adlı sunucunun premium özelliği ni kapattınız")
      
    }
    
    
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 6
};

exports.help = {
  name: 'pre',
  description: 'Bir sunucuya premium vermenizi / almanızı sağlar.',
  usage: 'pre <sunucu id>'
};