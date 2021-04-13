const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: 'AKIA3ADVKLRLGUV2FFDS',
    secretAccessKey: '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',
    region: 'us-east-2'
});
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });



module.exports = { sqs };