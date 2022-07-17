module.exports = {
    name: "help",
    description: "sends link to current stream",
    execute(message, args, Discord) {
        const help = new Discord.MessageEmbed()
        .setColor("#FBEFDF")
        .setTitle("Help")
        .setDescription("List of Commands")
        .addFields(
            {name: "help", value: "Shows help tab"},
            {name: "question", value: "Sends a random question"},
            {name: "github", value: "Links the GitHub of creator"},
            {name: "twitch", value: "Links the twitch of creator"},
            {name: "kick", value: "Admin Only: Kicks the specified user"},
            {name: "ban", value: "Admin Only: Bans the specified user"},
            {name: "clear", value: "Admin Only: Deletes messages equal to integer value given"},
            {name: "mute", value: "Admin Only: Mutes the specified user"},
            {name: "unmute", value: "Admin Only: Unmutes the specified user"}
        )
        
        message.channel.send(help);
    }
}