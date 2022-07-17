const Discord = require("discord.js");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const prefix = "-";
const fs = require("fs");
const qotd = require("random-question");
const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args));

const populationCounter = require("./counters/population-counter");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

function questionOfTheDay() {
    const todaysQuestion = qotd.randomQuestion();
    const guild = client.guilds.cache.get("417492563159678976");
    
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then((data) => {
        let catPic = data[0].url;

        const channel = guild.channels.cache.get("997407135224836186");
        const catEmbed = new Discord.MessageEmbed()
        .setColor("#FBEFDF")
        .setTitle("Question of the Day")
        .setDescription(todaysQuestion)
        .setImage(catPic);
        channel.send(catEmbed);
    })
}

client.on("ready", () => {
    console.log("Tavern Bot has awoken.");
    populationCounter(client);

    setTimeout(() => {
        questionOfTheDay();
        const dayMilliseconds = 1000 * 60 * 60 * 24;
        setInterval(() => {
            questionOfTheDay();
        }, dayMilliseconds)
    }, 1000);
});

client.on("guildMemberAdd", guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === "Real");

    guildMember.roles.add(welcomeRole);
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "help") {
        client.commands.get("help").execute(message, args, Discord);
    }
    else if (command === "github") {
        client.commands.get("github").execute(message, args);
    }
    else if (command === "twitch") {
        client.commands.get("twitch").execute(message, args, Discord);
    }
    else if (command === "clear") {
        client.commands.get("clear").execute(message, args);
    }
    else if (command === "kick") {
        client.commands.get("kick").execute(message, args);
    }
    else if (command === "ban") {
        client.commands.get("ban").execute(message, args);
    }
    else if (command === "mute") {
        client.commands.get("mute").execute(message, args);
    }
    else if (command === "unmute") {
        client.commands.get("unmute").execute(message, args);
    }
    else if (command === "reactionrole") {
        client.commands.get("reactionrole").execute(message, args, Discord, client);
    }
    else if (command === "question") {
        client.commands.get("question").execute(message, args);
    }
    else {
        message.channel.send("Huh?");
    }
});

client.login('OTk3MjU0NjE5MjMzMjYzNjQ3.G9rGLy.HgWrYQotmngQf2lzcwnM8A2JgnYqUat6yDo0h0');