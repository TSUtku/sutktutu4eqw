const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyCni4JiJtaFvS2xEyyiqgdi6OcLKVtMGwY');


exports.run = async (client, message, args) => {

  
                   
exports.conf = {
    enabled: true,
    aliases: ['çal', 'play'],
    permLevel: 0
};

exports.help = {
    name: 'ara',
    description: 'müzik seçenekleri sunar.',
    usage: 'ara [şarkı adı]'
};