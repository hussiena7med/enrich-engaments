const Queue = require("../interactions-queue");
const Params = require("./params");
const Event = require("../events");
const fs = require('fs');
const path = require('path');



const queue = Queue.sqs
const params = Params.params

const recieveService = () => {

    queue.receiveMessage(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
        } else {
            if (!data.Messages) {
                console.log('Nothing to process');
                return;
            }
            const message = JSON.parse(data.Messages[0].Body);
            const message_key = data.Messages[0].ReceiptHandle;
            const last_record_data = checkIfNew(message.id);
            if (last_record_data)
                Event.emitter.emit('newMessageRecieved', message, message_key, last_record_data);

        }
    });
};

const checkIfNew = (message_id) => {
    let rawdata = fs.readFileSync(path.join(__dirname, '../log/last-record.json'));
    let last_record = JSON.parse(rawdata);
    if (last_record.id === message_id) {
        return false;
    }
    return last_record;
}


const start = () => {
    setTimeout(() => {
        recieveService();
        start();
    }, 3000);
};



module.exports = { start };