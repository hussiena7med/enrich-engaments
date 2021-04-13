const buildQueueUrl = require("../interactions-queue/build-queue-url");


const buildRemoveParams = (message_id) => {
    const removeParams = {
        QueueUrl: buildQueueUrl.url(),
        ReceiptHandle: message_id
    };

    return removeParams;
}

module.exports = { buildRemoveParams };