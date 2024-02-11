const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'advice',
    aliases: ['ad', 'vice'],
    description: 'Send a Random advice',
    timeout: 4000,
    category: 'fun',
    run: async (client, message) => {
        const data = await fetch('https://api.adviceslip.com/advice').then(res => res.json());

        const embed = new MessageEmbed()
            .setTitle('Advice')
            .setDescription(data.slip.advice)
            .setColor('BLURPLE')
        message.channel.send(embed).catch(err => console.log(err))
    }
}