
const accountId = '756160289878';
const queueName = 'interactions';
const baseUrl = 'https://sqs.us-east-2.amazonaws.com';



function url() {
    const url = `${baseUrl}/${accountId}/${queueName}`;
    return url;
}

module.exports = { url };