const ObjectID = require('mongodb').ObjectID;


const getOrganizationId = () => {
    const organization_id = new ObjectID();
    return organization_id;
}
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getEngagements = () => {
    const engagements = {
        "likes": getRandomInt(0, 200),
        "love": getRandomInt(0, 200),
        "haha": getRandomInt(0, 200),
        "angry": getRandomInt(0, 200)
    }
    return engagements;
}

function buildMessageBody() {
    const messageBody = {
        "id": getRandomInt(1000000000, 9000000000),
        "organization_id": getOrganizationId(),
        "type": "post",
        "source": "facebook",
        "link": "https://facebook.com/fake-post",
        "username": "faker fake",
        "engagements": getEngagements()
    }
    return messageBody;
}

module.exports = { buildMessageBody };