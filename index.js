const { exec } = require("child_process");
const fs = require("fs");
const PartyPartyParty = require("party-party-party");

exec("mktemp -d", (error, stdout, _stderr) => {
  const outputFilepath = `${stdout.trim()}/party.gif`
  const outputFileStream = fs.createWriteStream(outputFilepath);
  PartyPartyParty("stevebrule.jpeg", outputFileStream, 2);
  console.log(outputFilepath);
});
