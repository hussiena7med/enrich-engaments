const Queue = require("../interactions-queue");
const Params = require("./params");

const send = () => {
    const queue = Queue.sqs
    const params = Params.params()
    queue.sendMessage(params, (err, data) => {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Successfully added message", data.MessageId);
        }
    });
}


function start() {
    setTimeout(() => {
        send();
        start();
    }, 30000);
};

module.exports = { start };