//consts (for glitch)
// GEREKLİ YERLER

const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
// GEREKLİ YERLER
// -------------------------------------------------------------




const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const Jimp = require('jimp');
const db = require('quick.db');
client.queue = new Map()
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};







client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
///bankoruma
client.on("guildBanAdd", async(guild, user) => {
  const entry = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())
  let yashinubanlimit = await db.fetch(`banlimit_${guild.id}`)
  let yashinukullanıcıban = await db.fetch(`banlimitkullanici_${guild.id}_${entry.executor.id}`)
  
    if(yashinubanlimit) {
      if(entry.executor.id !== guild.owner.user.id) {
        if(entry.executor.bot) return
        await db.add(`banlimitkullanici_${guild.id}_${entry.executor.id}`, 1)
        //client.channels.get("LOG KANAL ID").send(`\`${user.id}\` - \`${user.tag}\` kişisi ${entry.executor} tarafından **${entry.reason ? entry.reason : "girilmedi"}** nedeni ile yasaklandı! \n${entry.executor} Banları: ${yashinukullanıcıban}`)
        //LOG Kanal varsa yukarıdaki satıra gerekli yere ID girip // kaldırabilirsiniz.
        if(yashinukullanıcıban >= yashinubanlimit) {
          //client.channels.get("LOG KANAL ID").send(`${entry.executor} kişisi ban limiti doldurdu ve rolü alındı!`)
          // LOG kanal varsa yukarıdaki satıra gerekli yere ID girip // kaldırabilirsiniz.
          try {
            guild.member(entry.executor).roles.filter(a => a.hasPermission('BAN_MEMBERS')).forEach(x => guild.member(entry.executor).removeRole(x.id))
            guild.owner.user.send(`Sunucundan bir yetkili ban limitine ulaştı ve ban yetkisi olan rolleri alındı! İşte bilgileri => \n\n\`Kullanıcı:\`  ${entry.executor} | ${entry.executor.id} \n\`Discord'a ve Sunucuya Katılım Tarihi:\` \n• **Discord:** ${moment(entry.executor.createdAt).format('DD/MM/YYYY | HH:mm:ss')} • **Sunucu:** ${moment(guild.member(entry.executor).joinedAt).format('DD/MM/YYYY | HH:mm:ss')}`)
          } catch(err) { }
          db.delete(`banlimitkullanici_${guild.id}_${entry.executor.id}`)
        }
      }
    }
})

client.login(ayarlar.token);