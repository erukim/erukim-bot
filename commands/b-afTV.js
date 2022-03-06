const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("아프리카tv")
    .setDescription("이루의 아프리카TV 링크를 알려드립니다."),
  async execute(interaction) {
    const link = new MessageActionRow().addComponents(
      new MessageButton()
        .setURL('https://bj.afreecatv.com/erukim')
        .setLabel('이루 아프리카TV 채널 바로가기')
        .setStyle('LINK'),
    );
    await interaction.reply({ content: `${interaction.user}\n아프리카TV 링크! - https://bj.afreecatv.com/erukim`, components: [link] });
  },
};
