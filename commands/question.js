const randomQ = require('random-question')

module.exports = {
    name: 'question',
    description: 'gives random question',
    execute(message, args) {
        const question = randomQ.randomQuestion();
        message.channel.send(question);
    }
}