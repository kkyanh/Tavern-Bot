module.exports = {
    name: "reactionrole",
    description: "sets up a reaction role message",
    async execute(message, args, Discord, client) {
        const channel = "997357755272798338";
        const d2 = message.guild.roles.cache.find(role => role.name === "Destiny 2");
        const mc = message.guild.roles.cache.find(role => role.name === "Minecraft");
   
        const d2Emoji = "🤢";
        const mcEmoji = "🟩";

        let embed = new Discord.MessageEmbed()
        .setColor("#FBEFDF")
        .setTitle("Gamer Roles Asf")
        .setDescription("Add role for specific game channels\n"
            + `${d2Emoji} for Destiny 2\n`
            + `${mcEmoji} for Minecraft`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(d2Emoji);
        messageEmbed.react(mcEmoji);

        client.on("messageReactionAdd", async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === d2Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(d2);
                }
                if (reaction.emoji.name === mcEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mc);
                }
            }
            else {
                return;
            }
        })

        client.on("messageReactionRemove", async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === d2Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(d2);
                }
                if (reaction.emoji.name === mcEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mc);
                }
            }
            else {
                return;
            }
        })
    }
}