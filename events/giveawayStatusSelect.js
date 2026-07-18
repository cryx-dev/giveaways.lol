const Discord = require('discord.js');

module.exports = (client, interaction) => {
    // Check if this is the giveaway select menu
    if (interaction.customId !== 'giveaway_select') return;

    const messageId = interaction.values[0];
    const giveaway = client.giveawaysManager.giveaways.find(g => g.messageId === messageId);

    if (!giveaway) {
        return interaction.reply({
            content: ':x: Giveaway not found.',
            ephemeral: true
        });
    }

    // Create status update buttons
    const statusRow = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setCustomId(`giveaway_status_${messageId}_not_redeemed`)
                .setLabel('Mark as Not Redeemed')
                .setStyle(Discord.ButtonStyle.Danger),
            new Discord.ButtonBuilder()
                .setCustomId(`giveaway_status_${messageId}_pending`)
                .setLabel('Mark as Pending')
                .setStyle(Discord.ButtonStyle.Primary),
            new Discord.ButtonBuilder()
                .setCustomId(`giveaway_status_${messageId}_redeemed`)
                .setLabel('Mark as Redeemed')
                .setStyle(Discord.ButtonStyle.Success)
        );

    const notesRow = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setCustomId(`giveaway_status_${messageId}_add_notes`)
                .setLabel('Add Notes')
                .setStyle(Discord.ButtonStyle.Secondary)
        );

    // Get stored status data
    const statusData = client.giveawayStatusData?.get(messageId) || {};
    const currentStatus = statusData.status || 'Active';
    const notes = statusData.notes || 'No notes';

    const embed = new Discord.EmbedBuilder()
        .setColor('0x00AFF4')
        .setTitle(`🎁 ${giveaway.prize}`)
        .addFields(
            { name: 'Prize', value: giveaway.prize, inline: true },
            { name: 'Winners', value: giveaway.winnerCount.toString(), inline: true },
            { name: 'Status', value: currentStatus, inline: true },
            { name: 'Message ID', value: giveaway.messageId, inline: true },
            { name: 'Ended', value: giveaway.ended ? 'Yes' : 'No', inline: true },
            { name: 'Participants', value: giveaway.participants.length.toString(), inline: true },
            { name: 'Notes', value: notes, inline: false }
        )
        .setFooter({ text: 'Use the buttons below to update the giveaway status' });

    interaction.reply({
        embeds: [embed],
        components: [statusRow, notesRow],
        ephemeral: true
    });
};
