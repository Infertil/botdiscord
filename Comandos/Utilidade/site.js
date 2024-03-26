const Discord = require("discord.js")

module.exports = {
  name: "site", // Coloque o nome do comando
  description: "Veja o site do servidor.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let ping = client.ws.ping;

    let embed_1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user}, Site do nosso servidor: https://redeargos.net/`)
    .setColor("Random");

    interaction.reply({ embeds: [embed_1] }).then( () => {
    })
  }
}