const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => { 
if(message.author.id !== ayarlar.sahip) return message.channel.send(" Bu komutu sadece geliştiricim kullanabilir.");
   
 const args0 = args[0];
  if(!args0) {
    message.channel.send(message.author.username + ", lütfen bir sunucu **id**'si yaz!")
  } else {
  
db.set(`premod_${args0}`)
  message.channel.send(" Başarıyla premium aktif edildi.")
}
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-ver'],
    permLevel: 4,
      
}

exports.help = {
    name: 'premiumver',
    description: '',
    usage: '',

}