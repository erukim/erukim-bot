const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("봇초대")
    .setDescription("이루46 봇을 초대합니다."),
    async execute(interaction) {
      const exampleEmbed = {
              color: 0x36FFFF,
              title: '이루46 봇 초대하기',
              url: 'http://red.hiplay.kr/erukim',
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
                  name: `\u200b\n이루46봇을 초대할수 있는 링크를 안내드립니다!`,
                  value: `아래 버튼으로 바로 링크로 이동합니다!
                  
http://red.hiplay.kr/erukim
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
          .setURL('http://red.hiplay.kr/erukim')
          .setLabel('봇 초대 바로가기')
          .setStyle('LINK'),
      );
      await interaction.reply({ embeds: [exampleEmbed], content: `\n`, components: [link] });
    },
  };
  