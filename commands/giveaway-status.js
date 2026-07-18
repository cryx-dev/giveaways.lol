const Discord = require('discord.js');

module.exports = {
    description: 'View and manage giveaway statuses',

    run: async (client, interaction) => {
        // Check permissions
        if (!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")) {
            return interaction.reply({
                content: ':x: You need to have the manage messages permissions to view giveaway statuses.',
                ephemeral: true
            });
        }

        // Get all giveaways
        const giveaways = client.giveawaysManager.giveaways;

        if (giveaways.length === 0) {
            return interaction.reply({
                content: ':x: No giveaways found.',
                ephemeral: true
            });
        }

        // Create dropdown options
        const options = giveaways.map((giveaway, index) => ({
            label: `${giveaway.prize} - ${giveaway.winnerCount} winner(s)`,
            description: `Status: ${giveaway.ended ? 'Ended' : 'Active'} | ID: ${giveaway.messageId}`,
            value: giveaway.messageId.toString(),
        }));

        const selectMenu = new Discord.StringSelectMenuBuilder()
            .setCustomId('giveaway_select')
            .setPlaceholder('Select a giveaway to manage')
            .addOptions(options);

        const row = new Discord.ActionRowBuilder()
            .addComponents(selectMenu);

        // Send message with dropdown
        const embed = new Discord.EmbedBuilder()
            .setColor('0x2F3136')
            .setTitle('🎁 Giveaway Status Management')
            .setDescription(`Total Giveaways: **${giveaways.length}**\nSelect a giveaway from the dropdown below to view details and update its status.`)
            .setFooter({ text: 'Select a giveaway to proceed' });

        await interaction.reply({
            embeds: [embed],
            components: [row],
            ephemeral: true
        });
    }
};
