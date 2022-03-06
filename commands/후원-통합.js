const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("후원")
    .setDescription("이루의 후원가능 링크를 안내드립니다."),
  async execute(interaction) {
    const exampleEmbed = {
            color: 0x36FFFF,
            title: '이루46 후원 링크',
            url: 'https://twitch.tv/eruyoutube',
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
                name: `\u200b\n후원링크`,
                value: `아래 버튼으로 바로 링크로 이동합니다!
                
트윕 : https://twip.kr/eruyoutube
투네이션 : https://toon.at/donate/636931902377441681`,
            },
            {
                name: `\u200b\n기타 명령어`,
                value: `/트윕
/투네이션
                
해당 명령어로 후원에 대한 단독 링크를 받을수 있습니다.
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
        .setURL('https://twip.kr/eruyoutube')
        .setLabel('트윕후원 바로가기')
        .setStyle('LINK'),
      new MessageButton()
        .setURL('https://toon.at/donate/636931902377441681')
        .setLabel('투네이션후원 바로가기')
        .setStyle('LINK'),
    );
    await interaction.reply({ embeds: [exampleEmbed], content: `\n`, components: [link] });
  },
};
