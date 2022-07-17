module.exports = {
    name: 'unmute',
    description: 'unmutes specified user',
    execute(message, args) {
        if (!message.member.roles.cache.has('498894549800976388')) return;
        const target = message.mentions.users.first();

        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Real')
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Not Real')
        
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`)
        }
        else {
            message.channel.send('No user found.  No unmute issued.');
        }
    }
}