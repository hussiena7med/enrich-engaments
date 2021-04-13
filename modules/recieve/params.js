const buildQueueUrl = require("../interactions-queue/build-queue-url");

const params = {
    QueueUrl: buildQueueUrl.url(),
    MaxNumberOfMessages: 1,
    VisibilityTimeout: 0,
    WaitTimeSeconds: 20
};




module.exports = { params };