const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("크루")
    .setDescription("방송 멤버 크루를 안내드립니다."),
  async execute(interaction) {
    const exampleEmbed = {
            color: 0x36FFFF,
            title: '소속 크루',
            url: '',
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
                    name: '아직까지 저는 크루 멤버로 소속되어 있지 않습니다.',
                    value: `\u200b`,
                },
            ],
            timestamp: new Date(),
            footer: {
                text: `소환자 : ${interaction.user.tag}`,
                icon_url: 'https://img.hiplay.kr/emg/eruimg.jpg',
            },
        };
        /*const link = new MessageActionRow().addComponents(
          new MessageButton()
            .setURL('https://www.webnetuwork.com/')
            .setLabel('WEB 공식 홈페이지')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('https://twitch.webnetuwork.com/')
            .setLabel('WEB 트위치')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('https://youtube.webnetuwork.com/')
            .setLabel('WEB 유튜브')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('https://instagram.webnetuwork.com/')
            .setLabel('WEB 인스타그램')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('https://facebook.webnetuwork.com/')
            .setLabel('WEB 페이스북')
            .setStyle('LINK'),
        );
        await interaction.reply({ embeds: [exampleEmbed], content: `\n`, components: [link] });*/
        await interaction.reply({ embeds: [exampleEmbed] });
  },
};
