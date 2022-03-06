const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("v초대")
    .setDescription("봇초대 이벤트를 안내드립니다."),
  async execute(interaction) {
    const exampleEmbed = {
            color: 0x36FFFF,
            title: '이루봇 초대 이벤트',
            url: '',
            author: {
                name: '이루46 방송 도우미봇',
                icon_url: 'https://img.hiplay.kr/emg/eruimg.jpg',
                url: 'http://red.hiplay.kr/erukim',
            },
            description: '방송인 이루의 봇이며 관리용 봇입니다.',
        fields: [
            {
                name: `\u200b\n이벤트 설명`,
                value: `이루봇을 인증봇이 되려면 75개 이상의 서버에 유지를 해야된다고 합니다!
이 봇을 초대하고 삭제 안하실 분들 초대해서 만약 제가 인증봇을 만든다면
참여하신 분들을 추첨해서 3분께 치킨 or 베라기프티콘을 드리겠습니다!`,
            },
            {
                name: `\u200b\n이벤트 참여방법`,
                value: `이루봇 초대장링크를 통해 이루봇을 초대하고
서버에서 있는 모습을캡쳐한뒤 (자신의 닉네임이 나오도록) 서버에서 삭제를 안하고 유지하면 끝!
사진은 봇 지원서버에 있는 " 참여인증 " 채널에 캡쳐 사진을 남겨주세요!`,
            },
            {
                name: '\u200b\n이벤트 상품!',
                value: `이벤트 참여하고 당첨이 된다면
최대 3명을 뽑아
베라 깊카 or 치킨을 드려요!`,
                inline: true,
            },
            {
                name: '\u200b\n이루봇 초대 이벤트 관련 링크',
                value: `이루봇 초대장! :  http://red.hiplay.kr/erukim
지원서버 : https://discord.gg/vezG2ShHvG`,
                inline: true,
            },
            ],
            timestamp: new Date(),
            footer: {
                text: `소환자 : ${interaction.user.tag}`,
                icon_url: 'https://img.hiplay.kr/emg/eruimg.jpg',
            },
        };
        const linkRow = new MessageActionRow().addComponents(
          new MessageButton()
            .setURL('http://red.hiplay.kr/erukim')
            .setLabel('이루46봇 초대하기')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('https://discord.gg/vezG2ShHvG')
            .setLabel('참여인증하기')
            .setStyle('LINK')
        );
    await interaction.reply({ embeds: [exampleEmbed], content: `\n`, components: [linkRow]  });
  },
};
