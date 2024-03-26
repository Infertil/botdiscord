const Discord = require("discord.js")

module.exports = {
  name: "regras", // Coloque o nome do comando
  description: "Regras do nosso servidor.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let ping = client.ws.ping;

    let embed_1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user}, Regras do servidor: https://redeargos.net/regras`)
    .setColor("Random");

    interaction.reply({ embeds: [embed_1] }).then( () => {
    })
  }
}