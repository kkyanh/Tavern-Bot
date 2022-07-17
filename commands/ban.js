module.exports = {
    name: 'ban',
    description: 'bans specified user',
    execute(message, args) {
        if (!message.member.roles.cache.has('498894549800976388')) return;
        const member = message.mentions.users.first();

        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);

            memberTarget.ban();
            message.channel.send("User has been banned.");
        }
        else {
            message.channel.send('No user found.  No ban issued.');
        }
    }
}