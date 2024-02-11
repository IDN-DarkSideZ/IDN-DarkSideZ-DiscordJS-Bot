const { author_id } = require('../../config.json')

module.exports = {
    name: "left",
    run: async (client, message, args) => {
        if (message.author.id !== `${author_id}`) return
        await client.emit('guildMemberRemove', message.member);
    }
}