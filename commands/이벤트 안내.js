const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("이벤트")
    .setDescription("진행중인 이벤트를 안내드립니다."),
  async execute(interaction) {
    const exampleEmbed = {
            color: 0x36FFFF,
            title: '이벤트',
            url: '',
            author: {
                name: '이루46 방송 도우미봇',
                icon_url: 'https://img.hiplay.kr/emg/eruimg.jpg',
                url: 'http://red.hiplay.kr/erukim',
            },
            description: '방송인 이루의 봇이며 관리용 봇입니다.',
        fields: [
            {
                name: `\u200b\n이벤트는 아래 내용으로 확인할수 있습니다.`,
                value: `\u200b\n`,
            },
            {
                name: '진행중인 이벤트',
                value: `/v초대 - (봇 초대 이벤트)`,
                inline: true,
            },
            {
                name: '종료된 이벤트',
                value: '종료된 이벤트가 없습니다.',
                inline: true,
            },
            ],
            timestamp: new Date(),
            footer: {
                text: `소환자 : ${interaction.user.tag}`,
                icon_url: 'https://img.hiplay.kr/emg/eruimg.jpg',
            },
        };
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
