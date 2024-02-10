const { badwords } = require('../data.json')

module.exports = (client) => {
    client.on("message", message => {
        if (message.author.bot) return;
        if (!message.member.hasPermission("ADMINISTRATOR") | message.member.hasPermission("ADMINISTRATOR")) {
            let confirm = false;
            //NOW WE WILL USE FOR LOOP
            var i;
            for (i = 0; i < badwords.length; i++) {

                if (message.content.toLowerCase().includes(badwords[i].toLowerCase()))
                    confirm = true;

            }
            if (confirm) {
                message.delete()
                return message.channel.send(`Delete The Message, Badword Detected`)
            }
        }

        function reply(ask, answer) {
            if (message.content.toLowerCase() === ask && !message.author.bot) {
                return message.channel.send(answer)
            }
            if (message.guild === ask && !message.author.bot) {
                return message.channel.send(answer)
            }
            if (message.channel.type === 'dm') {
                if (message.guild === ask && !message.author.bot) {
                    return message.channel.send(answer)
                }
                if (message.content.toLowerCase() === ask && !message.author.bot) {
                    return message.channel.send(answer)
                }
            }
        }

        // by Risky, Discord: KazuoYuuka#0799
        reply('halo', `Haii... '<@${message.author.id}>'`)
        reply('hai', `Haloo.. '<@${message.author.id}>'`)
        reply('hallo', 'Hallo...')
        reply('tes', 'tastestastes')
        reply('test', 'Aku Sudah Online...')
        reply('testing', 'Aku Sudah Online')

        // by Leon, Discord: Optix
        reply('halo saki', 'Hayyy~~')
        reply('halo mbak', 'Ya?.. Halo Mas')
        reply('punya perasaan ga?', 'Enggak Aku-kan Robot')
        reply('saki udah makan belum?', 'Udah makan listrik')
        reply('yo', 'Yoyoyo Saki disini')
    })
}
