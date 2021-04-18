const AWS = require('aws-sdk');

AWS.config.update({

    region: 'us-east-2'
});
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });



module.exports = { sqs };
