const AWS = require('aws-sdk');

AWS.config.update({

    region: 'us-east-2'
});
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });
const accountId = '756160289878';
const queueName = 'engaments';
const baseUrl = 'https://sqs.us-east-2.amazonaws.com';


const params = (message) => {
    return {
        MessageBody: JSON.stringify(message),
        QueueUrl: url()
    }

};

function url() {
    const url = `${baseUrl}/${accountId}/${queueName}`;
    return url;
}

const send = (message) => {
    const arguments = params(message)
    sqs.sendMessage(arguments, (err, data) => {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Successfully added message", data.MessageId);
        }
    });
}



module.exports = { send };
