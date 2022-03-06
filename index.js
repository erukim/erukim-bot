const { Client, Collection, Intents } = require("discord.js");
const { token } = require("./config.json");
const fs = require("fs");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
client.commands = new Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.once("ready", () => {
  let number = 0
  setInterval(() => {
    const list = [
      `"/ehelp"으로 명령어를 알수 있어요!`,
      "재미있는 방송을 하고 싶따아!",
      `"/이벤트" 이벤트를 진행하고 있어요!`,
      `지금 이루46봇은 시험 운영중입니다.`,
      `핑은 지금 ${client.ws.ping}ms 입니다.`,
      `${client.guilds.cache.size}개 서버에 참가중`
    ]
    if(number == list.length) number = 0 
    client.user.setActivity(list[number], { type: "STREAMING", url: "https://www.twitch.tv/eruyoutube" })
    number++
  }, 20 * 1000) //1000 = 1초
  console.log("서버 준비 완료!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  
  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

client.login(token);
