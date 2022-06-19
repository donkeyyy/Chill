const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.DIRECT_MESSAGES] });
const fetch = require("node-fetch");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');


const ACTIVITIES = {
    "poker": {
        id: "755827207812677713",
        name: "Poker Night"
    },
    "betrayal": {
        id: "773336526917861400",
        name: "Betrayal.io"
    },
    "fishington": {
        id: "814288819477020702",
        name: "Fishington.io"
    },
    "chess": {
        id: "832012774040141894",
        name: "Chess In The Park"
    },
    "sketchy": {
        id: "879864070101172255",
        name: "Sketchy Artist"
    },
    "awkword": {
        id: "879863881349087252",
        name: "Awkword"
    },
    "doodle": {
        id: "878067389634314250",
        name: "Doodle Crew"
    },
    "sketch": {
        id: "902271654783242291",
        name: "Sketch Heads"
    },
    "letter": {
        id: "879863686565621790",
        name: "Letter League"
    },
    "word": {
        id: "879863976006127627",
        name: "Word Snacks"
    },
    "spellcast": {
        id: "852509694341283871",
        name: "SpellCast"
    },
    "checkers": {
        id: "832013003968348200",
        name: "Checkers In The Park"
    },
    "blazing": {
        id: "832025144389533716",
        name: "Blazing 8s"
    },
    "putt": {
        id: "945737671223947305",
        name: "Putt Party"
    },
    "landio": {
        id: "903769130790969345",
        name: "Land.io"
    }
};

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'help') {
        const dumbEmbed = new MessageEmbed()
        .setColor('#d08cff')
          .setTitle('Chill Commands List & Info')
          .setAuthor({ name: 'Chill', iconURL: 'https://cdn.discordapp.com/avatars/906593380056825876/9fa99273a31776a869ac71b82190e676.webp', url: 'https://chill-bot-discord.donkeyyy.repl.co' })
          .setDescription('Chill is a bot that allows you to start the Discord BETA feature Watch Together which allows you to watch youtube videos in a voice channel, with your friends! Watch Together is a part of the Discord BETA features called "Voice Activities", they are activities which you can play in a voice channel, together with your friends..! NOTE: You cant launch them on a mobile device!', true)
      .setThumbnail('https://cdn.discordapp.com/avatars/906593380056825876/9fa99273a31776a869ac71b82190e676.webp')
          .addField('Watch Together', '/yttogether - Starts Watch Together in the selected voice channel.', true)
        .addField('Other Free Voice Activities', '/fishington - Starts the Fishington.io game activity. \n/betrayal - Starts the Betrayal.io game activity. \n/sketchy - Starts the Sketchy Artist game activity. \n/awkword - Starts the Awkword game activity. \n/doodle - Starts the Doodle Crew game activity. \n/sketch - Starts the Sketch Heads game activity. \n/word - Starts the Word Snacks game activity.')
        .addField('Voice Activities Which Require Boost Level 1', '/poker - Starts the Discord Poker Night game activity. (your server needs boost level 1 to unlock it) \n/chess - Starts the Chess In The Park game activity. (your server needs boost level 1 to unlock it) \n/letter - Starts the Letter League game activity. (your server needs boost level 1 to unlock it) \n/landio - Starts the Land.io game activity. (your server needs boost level 1 to unlock it) \n/putt - Starts the Putt Party game activity.(your server needs boost level 1 to unlock it)')
          .setTimestamp()
          .setFooter({ text: 'Chill', iconURL: 'https://cdn.discordapp.com/avatars/906593380056825876/9fa99273a31776a869ac71b82190e676.webp' })
            const row2 = new MessageActionRow()
                  .addComponents(
                      new MessageButton()
                          .setURL('https://discord.gg/HVca9FXXNu')
                          .setLabel('Join the Support Server')
                          .setStyle('LINK'),
                  ); 
              await interaction.reply({ embeds: [dumbEmbed], components: [row2] }).catch(() => {});
    }
    if (commandName === 'yttogether') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "880218394199220334", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Watch Together**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Watch Together** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
    if (commandName === 'fishington') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "814288819477020702", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Fishington.io**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Fishington.io** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
    if (commandName === 'betrayal') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "773336526917861400", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Betrayal.io**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Betrayal.io** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
    if (commandName === 'sketchy') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "879864070101172255", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Sketchy Artist**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Sketchy Artist** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
    if (commandName === 'awkword') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "879863881349087252", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Awkword**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Awkword** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
    if (commandName === 'doodle') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "878067389634314250", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Doodle Crew**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Doodle Crew** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
    if (commandName === 'sketch') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "902271654783242291", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Sketch Heads**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Sketch Heads** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
    if (commandName === 'word') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "879863976006127627", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Word Snacks**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Word Snacks** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
    if (commandName === 'poker') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "755827207812677713", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Poker Night**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Poker Night** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
    if (commandName === 'chess') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "832012774040141894", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Chess In The Park**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Chess In The Park** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
    if (commandName === 'letter') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "879863686565621790", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Letter League**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Letter League** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
    if (commandName === 'landio') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "903769130790969345", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Land.io**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Land.io** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
    if (commandName === 'putt') {
        const channel = interaction.options.getChannel('voice_channel') || interaction.guild.channels.cache.get(args[0]);
        if (!channel || channel.type !== "GUILD_VOICE") return interaction.reply("❌ | Invalid channel specified, make sure you specify a valid **voice channel** and the bot has permissions to see it!").catch(() => {});
        if (!channel.permissionsFor(interaction.guild.me).has("CREATE_INSTANT_INVITE")) return interaction.reply("❌ | I need `Create Invite` permissions in order to start the activity!").catch(() => {});

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 0,
                max_uses: 0,
                target_application_id: "945737671223947305", 
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return interaction.reply("❌ | Could not start **Putt Pary**!").catch(() => {});
                interaction.reply(`✅ | Click the blue link to start **Putt Party** in ${channel.name}: <https://discord.gg/${invite.code}>`).catch(() => {});
            });
    }
});

client.login("TOKEN_HERE");

client.on('ready', () => {
client.user.setActivity(`/help ( / is a slash command )`, { type: 'WATCHING' });
});
