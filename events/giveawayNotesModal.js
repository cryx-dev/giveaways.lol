const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

const STATUS_FILE = path.join(__dirname, '../giveaway-status.json');

const saveStatusData = () => {
    const data = Object.fromEntries(global.giveawayStatusData);
    fs.writeFileSync(STATUS_FILE, JSON.stringify(data, null, 2));
};

module.exports = (client, interaction) => {
    // Check if this is a giveaway notes modal submission
    if (!interaction.isModalSubmit() || !interaction.customId.startsWith('giveaway_notes_modal_')) return;

    const messageId = interaction.customId.replace('giveaway_notes_modal_', '');
    const notes = interaction.fields.getTextInputValue('notes_input');

    // Initialize status data storage in memory if needed
    if (!global.giveawayStatusData) {
        global.giveawayStatusData = new Map();
    }

    // Get or create status data
    const statusData = global.giveawayStatusData.get(messageId) || {};
    statusData.notes = notes;
    statusData.notesUpdatedAt = new Date().toISOString();
    statusData.notesUpdatedBy = interaction.user.tag;

    global.giveawayStatusData.set(messageId, statusData);
    saveStatusData();

    const successEmbed = new Discord.EmbedBuilder()
        .setColor('0x00FF00')
        .setTitle('✅ Notes Added')
        .setDescription(`Notes updated for giveaway (${messageId}):\n\n${notes}`);

    interaction.reply({
        embeds: [successEmbed],
        ephemeral: true
    });
};
