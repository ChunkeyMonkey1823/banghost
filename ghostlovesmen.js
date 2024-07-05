const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS] });

// Replace with your Discord bot token
const token = 'https://discord.com/api/webhooks/1258585693148545085/yLGfTcJNHMYls2arzW_YJYC0OiHPRODYNWa-UdD9qRc0LoG4f54_cguJ_kWap_aP_odZ';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    
    // Replace with your server (guild) ID and the user ID you want to ban
    const guildId = '1164552816602390629';
    const userId = '111865544859007405';

    const guild = client.guilds.cache.get(guildId);
    if (guild) {
        guild.members.ban(userId)
            .then(() => console.log(`Banned user with ID ${userId}`))
            .catch(console.error);
    } else {
        console.log('Guild not found');
    }
});

client.login(token);
