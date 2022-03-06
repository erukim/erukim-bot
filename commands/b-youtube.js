const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("유튜브")
    .setDescription("이루의 유튜브 링크를 알려드립니다."),
  async execute(interaction) {
    const link = new MessageActionRow().addComponents(
      new MessageButton()
        .setURL('https://www.youtube.com/channel/UCM1c60oR6firuwQsnke9spQ')
        .setLabel('이루 유튜브 채널 바로가기')
        .setStyle('LINK'),
    );
    await interaction.reply({ content: `${interaction.user}\n유튜브 링크! - https://www.youtube.com/channel/UCM1c60oR6firuwQsnke9spQ`, components: [link] });
  },
};
