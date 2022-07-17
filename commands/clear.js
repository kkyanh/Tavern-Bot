module.exports = {
    name: "clear",
    description: "clear messages",
    async execute(message, args) {
        if (!message.member.roles.cache.has("498894549800976388")) return;
        if (!args[0]) return message.reply("Specify how many messages to clear.");
        if (isNaN(args[0])) return message.reply("Specify a number.");

        if (args[0] > 100) return message.reply("100+ messages? Fr?");
        if (args[0] < 1) return message.reply("I only delete an unsigned amount greater than 0.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}