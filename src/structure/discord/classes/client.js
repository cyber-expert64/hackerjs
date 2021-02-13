const { Client } = require("discord.js")

module.exports = class DiscordClient {
  constructor() {
    const client = new Client()
    
    return client;
  }
}