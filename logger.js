const EventEmmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmmitter {
  log(msg) {
    // call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

const logger = new Logger();

logger.on("message", (data) => console.log("Called listener: ", data));

logger.log("Hello Jake");
