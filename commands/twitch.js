module.exports = {
    name: 'twitch',
    description: "sends link to current stream",
    execute(message, args, Discord) {
        const newStream = new Discord.MessageEmbed()
        .setColor('#FBEFDF')
        .setTitle('Ho\'s Stream')
        .setURL('https://www.twitch.tv/kkyanh')
        .setDescription('Currently streaming :)')
        .addFields(
            {name: 'Twitch Stream', value: 'Streaming'}
        )
        .setImage('https://acegif.com/wp-content/gifs/dancing-cat-33.gif')
        .setFooter('FOLLOW ME OR YOU GO TO JAIL');
        
        message.channel.send(newStream);
    }
}