module.exports = async(client) => {
    const guild = client.guilds.cache.get("417492563159678976");
    setInterval(() => {
        const populationCount = guild.memberCount;
        const channel = guild.channels.cache.get("997373074775212092");
        channel.setName(`Population of Tavern: ${populationCount.toLocaleString()}`);
        console.log("Updating Population Count");
    }, 100000);
}