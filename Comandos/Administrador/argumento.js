const Discord = require("discord.js")

module.exports = {
  name: 'argumento', // Coloque o nome do comando
  description: 'Exemplo de como pegar um argumento', // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'info',
      description: 'Descrição da informação que você quer pegar!',
      type: Discord.ApplicationCommandOptionType.String,
      required: false,
  },
  {
      name: 'descricao',
      description: 'Conteúdo para o campo setDescription',
      type: Discord.ApplicationCommandOptionType.String,
      required: false,
  }
],

  run: async (client, interaction) => {

    try {
        let informacao = interaction.options.getString("info");
        let descricao = interaction.options.getString("descricao");

        let embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setTitle(informacao)
        .setDescription(descricao || "Ops, esqueci a descrição!")

        await interaction.reply({embeds: [embed]})


    } catch (error) {
        
    }

    

    
    
  }
}