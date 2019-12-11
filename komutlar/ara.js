const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyCni4JiJtaFvS2xEyyiqgdi6OcLKVtMGwY');


	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
exports.run = async (client, message, args) => {
	let command = msg.content.toLowerCase().split(' ')[0];

	 {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
    .setDescription('❎ | Lütfen Seli Bir Kanala Giriş Yapınız!'));
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('❎ | Lütfen Seli Bir Kanala Giriş Yapınız!'));
		}
		if (!permissions.has('SPEAK')) {
			 return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('❎ | Şarkıyı Çalamıyorum Bu Kanalda Konuşma Yetkim Yok!'));
        }

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			 return msg.channel.sendEmbed(new Discord.RichEmbed)
    
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
          
				 msg.channel.sendEmbed(new Discord.RichEmbed()                  
         .setTitle('Şarkı Seçimi')
         .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
         .setFooter('Lütfen 1-10 Arasında Bir Rakam Seçiniz 10 Saniye İçinde Liste İptal Edilecektir!')
	 .setFooter('Örnek Kullanım 1')
         .setColor('0x36393E'));
          msg.delete(5000)
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						 return msg.channel.sendEmbed(new Discord.RichEmbed()
            .setColor('0x36393E')
            .setDescription('❎ | **10 Saniye İçinde Şarkı Seçmediğiniz İçin seçim İptal Edilmiştir!**.'));
                    }
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.sendEmbed(new Discord.RichEmbed()
          .setColor('0x36393E')
          .setDescription('❎ | YouTubede Böyle Bir Şarkı Yok !**'));
                }
            }
 }
   
   };
  
                   
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