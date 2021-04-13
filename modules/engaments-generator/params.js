
const Message = require("./build-message");
const buildQueueUrl = require("../interactions-queue/build-queue-url");



const params = () => {
    return {
        MessageBody: JSON.stringify(Message.buildMessageBody()),
        QueueUrl: buildQueueUrl.url()
    }

};

module.exports = { params };