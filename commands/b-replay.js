const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("다시보기")
    .setDescription("이루의 방송 다시보기 링크를 알려드립니다."),
  async execute(interaction) {
      const link = new MessageActionRow().addComponents(
        new MessageButton()
          .setURL('https://www.youtube.com/channel/UCCI11siEwwP-8ZFboZQ-iQw')
          .setLabel('이루 생방송 다시보기 채널 바로가기')
          .setStyle('LINK'),
      );
      await interaction.reply({ content: `${interaction.user}\n유튜브 다시보기 링크! - https://www.youtube.com/channel/UCCI11siEwwP-8ZFboZQ-iQw`, components: [link] });
  },
};
