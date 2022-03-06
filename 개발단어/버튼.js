const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('버튼')
		.setDescription('버튼을 만듭니다!'),
	async execute(interaction) {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("test1")
        .setLabel("첫번째")
        .setStyle("PRIMARY"),
        new MessageButton()
          .setCustomId("test2")
          .setLabel("도움말 종료")
          .setStyle("DANGER")
    );

    const linkRow = new MessageActionRow().addComponents(
      new MessageButton()
        .setURL('https://twitch.tv/eruyoutube')
        .setLabel('트위치')
        .setStyle('LINK')
    );

    const filter = (interaction) => {
      return interaction.customId === "test1" || "test2";
    }


    await interaction.reply({ content: `출력 메시지`, components: [row, linkRow] });

    const collector = interaction.channel.createMessageComponentCollector({
      filter,
      time: 3 * 1000
    });

    collector.on("collect", async (interaction) => {
      if (interaction.customId === "test1") {
        await interaction.reply("test1 버튼을 클릭했다.");
      }
      else if (interaction.customId === "test2") {
        await interaction.update({
          content: "이루봇 도움말이 종료되었습니다.",
          components: [],
        })
      }
    })

    collector.on("end", async (collect) => {
      console.log("버튼 시간초과");
    });
	},
};