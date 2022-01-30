const EventEmitter = require("events");

// crate class
class MyEmitter extends EventEmitter {}

// init object
const newEmmiter = new MyEmitter();

// setup listener
newEmmiter.on("event", () => console.log("Event fired"));

// init event
newEmmiter.emit("event");
