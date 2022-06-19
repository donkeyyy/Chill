const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
	new SlashCommandBuilder().setName('help').setDescription('Sends the commands list and some info.'),
	new SlashCommandBuilder().setName('yttogether').setDescription('Starts Watch Together in the selected voice channel.').addChannelOption(option =>
		option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
	new SlashCommandBuilder().setName('fishington').setDescription('Starts the Fishington.io game activity.').addChannelOption(option =>
		option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
    new SlashCommandBuilder().setName('betrayal').setDescription('Starts the Betrayal.io game activity.').addChannelOption(option =>
	    option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
	new SlashCommandBuilder().setName('sketchy').setDescription('Starts the Sketchy Artist game activity.').addChannelOption(option =>
		option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
	new SlashCommandBuilder().setName('awkword').setDescription('Starts the Awkword game activity.').addChannelOption(option =>
		option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
	new SlashCommandBuilder().setName('doodle').setDescription('Starts the Doodle Crew game activity.').addChannelOption(option =>
		option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
	new SlashCommandBuilder().setName('sketch').setDescription('Starts the Sketch Heads game activity.').addChannelOption(option =>
		option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
	new SlashCommandBuilder().setName('word').setDescription('Starts the Word Snacks game activity.').addChannelOption(option =>
		option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
    new SlashCommandBuilder().setName('poker').setDescription('Starts the Discord Poker Night game activity. (your server needs boost level 1 to unlock it)').addChannelOption(option =>
		option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
	new SlashCommandBuilder().setName('chess').setDescription('Starts the Chess In The Park game activity. (your server needs boost level 1 to unlock it)').addChannelOption(option =>
		option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
	new SlashCommandBuilder().setName('letter').setDescription('Starts the Letter League game activity. (your server needs boost level 1 to unlock it)').addChannelOption(option =>
		option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
	new SlashCommandBuilder().setName('landio').setDescription('Starts the Land.io game activity. (your server needs boost level 1 to unlock it)').addChannelOption(option =>
		option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
	new SlashCommandBuilder().setName('putt').setDescription('Starts the Putt Party game activity.(your server needs boost level 1 to unlock it)').addChannelOption(option =>
		option.setName('voice_channel')
			.setDescription('Select a voice channel!')
			.setRequired(true)),
]
.map(command => command.toJSON());

const clientId = ("ID_HERE")
const token = ("TOKEN_HERE")
const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
