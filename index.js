require("dotenv").config();

let champion = require("./champions");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", receivedMessage => {
  let userMessage = receivedMessage.content;
  //Prevent bot from responding to its own message and looping forever
  if (receivedMessage.author == client.user) {
    return;
  }

  if (receivedMessage.content.startsWith("!")) {
    processCommand(receivedMessage);
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("with Javascript");
});

function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1); // Remove the leading exclamation mark
  let splitCommand = fullCommand.split(" "); // Split the message up in to pieces for each space
  let primaryCommand = splitCommand[0]; // The first word directly after the exclamation is the command

  if (primaryCommand == "aatrox") {
    receivedMessage.channel.send(champion.Aatrox.top);
  }
}

client.login(process.env.discord_api);
