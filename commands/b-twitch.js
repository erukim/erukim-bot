const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("트위치")
    .setDescription("이루의 트위치 링크를 알려드립니다."),
  async execute(interaction) {
    const link = new MessageActionRow().addComponents(
      new MessageButton()
        .setURL('https://www.twitch.tv/eruyoutube')
        .setLabel('이루 트위치 채널 바로가기')
        .setStyle('LINK'),
    );
    await interaction.reply({ content: `${interaction.user}\n트위치 링크! - https://www.twitch.tv/eruyoutube`, components: [link] });
  },
};
