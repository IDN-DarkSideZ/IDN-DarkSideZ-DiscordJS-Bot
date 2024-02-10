const { prefix } = require('../../config.json')

module.exports = client => {

    let botStatus = [
        `${prefix}help`,
        `With ${client.users.cache.size} Users!`,
        `With ${client.guilds.cache.size} Servers!`,
        `With KazuoYuuka <3`
    ]

    setInterval(function () {
        let status = botStatus[Math.floor(Math.random() * botStatus.length)];
        client.user.setActivity(status, { type: 'PLAYING' })
    }, 5000);

    console.log(`\n\nYour Darling "${client.user.username}" is online!\n`)
    client.generateInvite([
        'SEND_MESSAGES',
        'MANAGE_MESSAGES',
    ]).then(invite => {
        console.log(`Click here to invite the bot to your server:\n\n${invite}`);
    });
}