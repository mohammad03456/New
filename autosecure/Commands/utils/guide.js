const { ApplicationCommandOptionType } = require('discord.js')
module.exports = {
  name: "guides",
  description: 'Guides on how to use the bot',
  enabled: true,
  options: [
    {
      name: "guide",
      description: "Which guide do you want?",
      type: ApplicationCommandOptionType.String,
      "choices": [
        {
          "name": "Setup the bot for the first time",
          "value": "setup"
        },
        {
          "name": "How to use the login cookie!",
          "value": "logincookie"
        }
      ],
      required: true
    }
  ],
  userOnly: true,

  callback: async (client, interaction) => {
    let guide = interaction.options.getString("guide")
    switch (guide) {
      case "setup":
        return interaction.reply({ content: `Guide on how to setup your bot for the first time!\nhttps://cdn.discordapp.com/attachments/1215933947842662420/1219059320101011488/2024-03-18_01-02-19.mp4?ex=6609ec76&is=65f77776&hm=0c5b53a56bb821f67a56b7574d1edacd4c9f4b61bbd43073c5c155d5a4486a52&`, ephemeral: true })
        break;
      case "logincookie":
        return interaction.reply({
          content: `Guide on how to use the login cookie!\n
All you need to do is copy the login cookie, and add it to your login page
    
Cookie name: __Host-MSAAUTH
Cookie value: The login cookie that the bot sends to you
Cookie settings: Secure (You must add that for it to be added)
    
After you add the cookie, all you need to do is refresh the page, and you're in!\nhttps://cdn.discordapp.com/attachments/1215933947842662420/1215934984255438929/2024-03-09_09-42-41_1.compressed.mp4?ex=6607c933&is=65f55433&hm=7b9326b20c4a8f4bd0e24d3eec872059939c450107ac3eac23d0c2568372a92d&`, ephemeral: true
        })
      default:
        return interaction.reply({ content: `Unknown guide!`, ephemeral: true })
        break;
    }
  }
}
