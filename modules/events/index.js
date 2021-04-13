const EventEmitter = require("events");
const removeMessage = require("../remove");
const enrichMessage = require("../enrich-message");
const log = require("../log");
const engamentsQueue = require("../engagment-queue");

const emitter = new EventEmitter();

emitter.on('newMessageRecieved', (message_body, message_key, last_record_data) => {

    const enriched_msg = enrichMessage.result(message_body);
    log.logResult(enriched_msg, last_record_data);
    removeMessage.remove(message_key);
    engamentsQueue.send(enriched_msg);
})

module.exports = { emitter };