const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('도움말')
		.setDescription('이루봇의 명령어를 확인합니다.'),
	async execute(interaction) {
        const exampleEmbed = {
            color: 0x36FFFF,
            title: '이루46 봇 명령어',
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
                    name: `\u200b\n일반 명령어`,
                    value: `/ehelp or /도움말 - 이루봇 명령어 도움말
/봇초대 - 이루의 디스코드 봇을 추가합니다.
/이벤트 - 봇과 방송에서 이벤트가 있을시 해당 명령어로 확인이 됩니다.
/소속사 - 이루가 소속되어있는 소속사에 대해 안내드립니다.
/크루 - 크루멤버가 있을시 명령어가 동작합니다!`,
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name: '커뮤니티 명령어',
                    value: `/디스코드 
/카톡
/페이스북
/인스타
/팬카페`,
                    inline: true,
                },
                {
                    name: '방송 명령어',
                    value: `/트위치
/유튜브
/다시보기
/카카오TV
/아프리카TV
/후원`,
                    inline: true,
                },
                {
                    name: `\u200b\n이벤트`,
                    value: `/이벤트
진행중인 이벤트 간략 안내!
1. 이루봇을 초대하고 상품을 받아가자!`,
                },
            ],
            timestamp: new Date(),
            footer: {
                text: `소환자 : ${interaction.user.tag}`,
                icon_url: 'https://img.hiplay.kr/emg/eruimg.jpg',
            },
        };/*
        const row = new MessageActionRow().addComponents(
          new MessageButton()
            .setCustomId("h1")
            .setLabel("나이")
            .setStyle("PRIMARY"),
            new MessageButton()
              .setCustomId("h2")
              .setLabel("소속사")
              .setStyle("PRIMARY"),
            new MessageButton()
              .setCustomId("h3")
              .setLabel("크루")
              .setStyle("PRIMARY"),
        );
*/
        const linkRow = new MessageActionRow().addComponents(
          new MessageButton()
            .setURL('https://twitch.tv/eruyoutube')
            .setLabel('트위치')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('https://www.youtube.com/channel/UCM1c60oR6firuwQsnke9spQ')
            .setLabel('유튜브')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('https://www.youtube.com/channel/UCM1c60oR6firuwQsnke9spQ')
            .setLabel('생방송 다시보기')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('https://tv.kakao.com/channel/3473937')
            .setLabel('카카오TV')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('https://bj.afreecatv.com/erukim')
            .setLabel('아프리카TV')
            .setStyle('LINK'),
    );
        const link = new MessageActionRow().addComponents(
          new MessageButton()
            .setURL('https://tgd.kr/s/eruyoutube')
            .setLabel('트게더')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('https://open.kakao.com/o/ggio57Kd')
            .setLabel('카카오 오픈채팅')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('http://red.hiplay.kr/erukim')
            .setLabel('이루봇 초대하기')
            .setStyle('LINK'),
          new MessageButton()
            .setURL('https://discord.gg/ptmDBBf4UW')
            .setLabel('이루 커뮤니티 디코')
            .setStyle('LINK'),
        new MessageButton()
            .setURL('https://instagram.com/erukimyt')
            .setLabel('인스타그램')
            .setStyle('LINK')
    );
/*
    const filter = (interaction) => {
      return interaction.customId === "h1" || "h2" || "h3";
    }
*/
    await interaction.reply({ embeds: [exampleEmbed], content: `\n`, components: [linkRow, link] });
/*
    const collector = interaction.channel.createMessageComponentCollector({
      filter,
      //time: 3 * 1000
    });

    collector.on("collect", async (interaction) => {
      if (interaction.customId === "h1") {
        await interaction.reply(`${interaction.user}\n이루의 나이는 비공이에요!\n하지만 고등학생이라고 방송에서 밝혔어요!`);
      }
      else if (interaction.customId === "h2") {
        await interaction.reply(`${interaction.user}\n이루의 소속사는 WEB MCN 입니다.\n소속사에 대한 궁금증이 있다면 "/소속사" 명령어를 통해 확인이 가능합니다!`);
      }
      else if (interaction.customId === "h3") {
        await interaction.reply(`${interaction.user}\n이루의 크루는 아직 확인되지 않습니다. \n크루에 대한 궁금증이 있다면 "/크루" 명령어를 통해 확인이 가능합니다!`);
      }
    })*/
	},
};