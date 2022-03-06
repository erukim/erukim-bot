const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("소속사")
    .setDescription("소속사를 안내드립니다."),
  async execute(interaction) {
    const exampleEmbed = {
            color: 0x36FFFF,
            title: 'WEB MCN',
            url: '',
            author: {
                name: '이루46 방송 도우미봇',
                icon_url: 'https://img.hiplay.kr/emg/eruimg.jpg',
                url: 'http://red.hiplay.kr/erukim',
            },
            description: '방송인 이루의 봇이며 관리용 봇입니다.',
            thumbnail: {
                url: 'https://img.webnetuwork.com/로고/1.png',
            },
            fields: [
                {
                    name: '소개',
                    value: `WEB MCN은 크리에이터를 지원하고 있는 사업입니다.
다양한 크리에이터 분들과 함께 성장하고 있습니다.
                    
WEB 봇을 추가하시려면 아래 버튼을 클릭해주세요.
봇링크 : https://botin.webnetuwork.com/`,
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
        const link2 = new MessageActionRow().addComponents(
          new MessageButton()
            .setURL('https://shop.webnetuwork.com/')
            .setLabel('WEB 공식 제휴 쇼핑몰')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('https://botin.webnetuwork.com/')
            .setLabel('WEB Network 봇 초대하기')
            .setStyle('LINK'),
        );
        await interaction.reply({ embeds: [exampleEmbed], content: `\n`, components: [link, link2] });
  },
};
