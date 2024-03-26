const Discord = require("discord.js")

module.exports = {
  name: "versao", // Coloque o nome do comando
  description: "Veja a versão compatíveis do servidor.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let ping = client.ws.ping;

    let embed_1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user}, Versão do servidor: \`1.16 à 1.19\``)
    .setColor("Random");

    interaction.reply({ embeds: [embed_1] }).then( () => {
    })
  }
}