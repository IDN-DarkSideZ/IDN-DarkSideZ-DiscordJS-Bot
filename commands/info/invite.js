require('dotenv').config();

module.exports = {
    name: "invite",
    aliases: ['inv', 'invt', 'i'],
    description: "Invite bot",
    timeout: 4000,
    category: "info",
    run: async (client, message, bot) => {

        client.generateInvite([
            'SEND_MESSAGES',
            'MANAGE_MESSAGES',
        ]).then(invite => {
            message.channel.send(`Invite Me to your server:\n${invite}`)
            console.log(`${message.user.username || message.author.tag} Send link to ${message.guild || message.channel}`)
                .catch(err => {
                    message.channel.send(`Error: ${err.message}`);
                });
        });
    }
}