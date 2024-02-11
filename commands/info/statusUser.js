const { MessageEmbed } = require('discord.js');
const { footer } = require('../../config.json');

module.exports = {
    name: "status-user",
    aliases: ['status', 'suser', 'su'],
    description: "List of all Status user in a guild",
    timeout: 4000,
    category: "info",
    run: async (client, message) => {

        const embed = new MessageEmbed()
            .setTitle('**Status of Users**')
            .setFooter(footer)
            .setColor('#00f050')
            .setTimestamp()
            .addField("🟢 **Online**", `${message.guild.members.cache.filter(m => m.user.presence.status == "online").size}`, true)
            .addField("🌕 **Idle**", `${message.guild.members.cache.filter(m => m.user.presence.status == "idle").size}`, true)
            .addField("😡 **Do not Distrub**", `${message.guild.members.cache.filter(m => m.user.presence.status == "dnd").size}`, true)
            .addField("💀 **Dead**", `${message.guild.members.cache.filter(m => m.user.presence.status == "offline").size}`, true)

        return message.channel.send(embed).catch(err => console.log(err.message))
    }
}