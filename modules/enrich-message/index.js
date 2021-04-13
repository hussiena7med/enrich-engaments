
const result = (message) => {
    const total_engagements = calculateTotal(message.engagements);
    message.total_engagements = total_engagements;
    return message;
}


const calculateTotal = (engagement) => {
    return total = Object.values(engagement).reduce((total, num) => total + num)
}

module.exports = { result };