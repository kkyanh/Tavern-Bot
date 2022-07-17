module.exports = {
    name: 'github',
    description: "sends link to github of author",
    execute(message, args) {
        message.channel.send('https://github.com/kkyanh');
    }
}