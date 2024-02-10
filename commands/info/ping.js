const { MessageEmbed } = require('discord.js');
const { footer } = require('../../config.json');

module.exports = {
    name: "ping",
    aliases: ['p'],
    description: "ping bot",
    timeout: 3000,
    category: "info",
    run: async (client, message) => {

        const embed = new MessageEmbed()
            .setFooter(footer)
            .setTimestamp()
            .setColor('BLURPLE')
            .addField('API Pong', `${Math.round(client.ws.ping)} ms`)
            .addField('Latency', `${message.createdTimestamp - Date.now()}`)
            .addField('Uptime', `<t:${(Date.now() / 1000 - client.uptime / 1000).toFixed(0)}:R>`, false)
        return message.channel.send(embed).catch(err => console.log(err.message))
    }
}