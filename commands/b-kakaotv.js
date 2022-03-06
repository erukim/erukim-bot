const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("카카오tv")
    .setDescription("이루의 카카오TV 링크를 알려드립니다."),
  async execute(interaction) {
    const link = new MessageActionRow().addComponents(
      new MessageButton()
        .setURL('https://tv.kakao.com/channel/3473937')
        .setLabel('이루 카카오TV 채널 바로가기')
        .setStyle('LINK'),
    );
    await interaction.reply({ content: `${interaction.user}\n카카오TV 링크! - https://tv.kakao.com/channel/3473937`, components: [link] });
  },
};
