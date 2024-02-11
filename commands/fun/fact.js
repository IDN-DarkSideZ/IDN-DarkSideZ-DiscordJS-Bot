const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'fact',
    aliases: ['fa', 'ft'],
    description: 'Sends a Random useless fact',
    timeout: 4000,
    category: 'fun',

    run: async (client, message) => {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        await response.json().then(res => {
            const embed = new MessageEmbed()
                .setTitle('Fact')
                .setDescription(res.text)
                .setColor('BLURPLE')
            return message.channel.send(embed).catch(err => console.log(err))
        })
    }
}