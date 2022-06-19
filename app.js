console.log("Starting app.js");

const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');

console.log(yargs.argv);

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
    console.log("adding note");
    notes.addingNote(title, body);
  } else if (command === "remove") {
    console.log("removing note");
    notes.removeNote(title, body);
  } else if (command === "read") {
    console.log("reading note");
    notes.readNote(title, body);
  } else if (command === "list") {
    console.log("listing all notes");
    notes.getAll();
  } else {
    console.log("Unknown command was used!");
  }


