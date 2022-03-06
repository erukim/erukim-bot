const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("디스코드")
    .setDescription("이루 커뮤니티 디스코드 링크를 안내드립니다."),
  async execute(interaction) {
    const exampleEmbed = {
            color: 0x36FFFF,
            title: '이루46 디스코드',
            url: 'https://discord.gg/FQPvu57dn5',
            author: {
                name: '이루46 방송 도우미봇',
                icon_url: 'https://img.hiplay.kr/emg/eruimg.jpg',
                url: 'http://red.hiplay.kr/erukim',
            },
            description: '방송인 이루의 봇이며 관리용 봇입니다.',
            thumbnail: {
                url: 'https://img.hiplay.kr/emg/eruimg.jpg',
            },
        fields: [
            {
                name: `\u200b\n디스코드 링크`,
                value: `아래 버튼으로 바로 링크로 이동합니다!
                
https://discord.gg/FQPvu57dn5
                \u200b\n`,
            },
            ],
            timestamp: new Date(),
            footer: {
                text: `소환자 : ${interaction.user.tag}`,
                icon_url: 'https://img.hiplay.kr/emg/eruimg.jpg',
            },
        };
    const link = new MessageActionRow().addComponents(
      new MessageButton()
        .setURL('https://discord.gg/FQPvu57dn5')
        .setLabel('디스코드 바로가기')
        .setStyle('LINK'),
    );
    await interaction.reply({ embeds: [exampleEmbed], content: `\n`, components: [link] });
  },
};
