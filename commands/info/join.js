const { author_id } = require('../../config.json')

module.exports = {
    name: "join",
    run: async (client, message, args) => {
        if (message.author.id !== `${author_id}`) return
        await client.emit('guildMemberAdd', message.member);
    }
}