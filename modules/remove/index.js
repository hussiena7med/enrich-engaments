const Queue = require("../interactions-queue");
const removeParams = require("./params");





const remove = (message_id) => {
    const queue = Queue.sqs
    const params = removeParams.buildRemoveParams(message_id);
    queue.deleteMessage(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
        } else {
            console.log('Successfully deleted message from queue');
            return true;
        }
    });
}



module.exports = { remove };