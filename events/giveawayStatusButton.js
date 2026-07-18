const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

// Initialize status data storage in memory
if (!global.giveawayStatusData) {
    global.giveawayStatusData = new Map();
}

const STATUS_FILE = path.join(__dirname, '../giveaway-status.json');

// Load status data from file on startup
if (fs.existsSync(STATUS_FILE)) {
    const data = JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8'));
    for (const [key, value] of Object.entries(data)) {
        global.giveawayStatusData.set(key, value);
    }
}

const saveStatusData = () => {
    const data = Object.fromEntries(global.giveawayStatusData);
    fs.writeFileSync(STATUS_FILE, JSON.stringify(data, null, 2));
};

module.exports = (client, interaction) => {
    // Check if this is a giveaway status button
    if (!interaction.isButton() || !interaction.customId.startsWith('giveaway_status_')) return;

    const customIdParts = interaction.customId.split('_');
    const messageId = customIdParts[2];
    const fullAction = customIdParts.slice(3).join('_');

    if (fullAction === 'add_notes') {
        // Show modal for adding notes
        const modal = new Discord.ModalBuilder()
            .setCustomId(`giveaway_notes_modal_${messageId}`)
            .setTitle('Add Giveaway Notes');

        const notesInput = new Discord.TextInputBuilder()
            .setCustomId('notes_input')
            .setLabel('Notes')
            .setStyle(Discord.TextInputStyle.Paragraph)
            .setMaxLength(1000)
            .setMinLength(1)
            .setPlaceholder('Enter notes about this giveaway...');

        const actionRow = new Discord.ActionRowBuilder().addComponents(notesInput);
        modal.addComponents(actionRow);

        return interaction.showModal(modal);
    }

    // Update status
    const statusMap = {
        'not_redeemed': '❌ Not Redeemed',
        'pending': '⏳ Pending',
        'redeemed': '✅ Redeemed'
    };

    const newStatus = statusMap[fullAction];
    if (!newStatus) return;

    // Get or create status data
    const statusData = global.giveawayStatusData.get(messageId) || {};
    statusData.status = newStatus;
    statusData.updatedAt = new Date().toISOString();
    statusData.updatedBy = interaction.user.tag;

    global.giveawayStatusData.set(messageId, statusData);
    saveStatusData();

    const successEmbed = new Discord.EmbedBuilder()
        .setColor('0x00FF00')
        .setTitle('✅ Status Updated')
        .setDescription(`Giveaway status updated to: **${newStatus}**`);

    interaction.reply({
        embeds: [successEmbed],
        ephemeral: true
    });
};
