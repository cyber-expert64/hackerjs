const { Client } = require("../../discord/main")
const fs = require("fs")
const chalk = require("chalk")

module.exports = class HackerClient {
  constructor(token, mobile = false) {
    const client = new Client()

    client.login(token)

    // Events
    client.on('ready', () => {
      console.log(`Connected to client ${client.user.tag}`)
    })

    console.log("HACKER.JS started.")
    return client;
  }
}