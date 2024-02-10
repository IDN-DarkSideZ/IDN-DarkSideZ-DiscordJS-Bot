const { MessageEmbed, Guild } = require('discord.js')
const { welcome_channel } = require('../config.json')
// const { server_name } = require('../config.json')

module.exports = (client) => {

  client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.get(welcome_channel)
    const embed = new MessageEmbed()
      .setTitle(`Selamat Datang! ${member.user.username}`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`Welcome to ${Guild.name}, ${member}.\n\n▬ Please take a few second for verification.\n\nif thereU+2019s any question, feel free to send our STAFF a message.\nHave a nice day!`)
      .setColor('#33FFEC')
      .setTimestamp()

    channel.send(embed);
  })

  client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.cache.get(welcome_channel)
    const embed = new MessageEmbed()
      .setTitle(`Goodbye! ${member.user.username}`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`See ya later...`)
      .setColor('#33FFEC')
      .setTimestamp()

    channel.send(embed);
  })
}
// ’