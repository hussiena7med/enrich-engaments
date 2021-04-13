const fs = require('fs');
const path = require('path');
var dateFormat = require('dateformat');

const logResult = async (enriched_msg, last_record_data) => {


    const enriched_msg_total = enriched_msg.total_engagements;


    const engaments_to_log = engamentsToLog(last_record_data, enriched_msg_total);
    const new_last_record_data = buildLastRecordData(last_record_data, engaments_to_log, enriched_msg);
    WriteLastRecord(new_last_record_data);
    const writeDataToLog = buildDataToLog(engaments_to_log);

    try {
        if (fs.existsSync(path.join(__dirname, '/log.text'))) {
            appendTolog(writeDataToLog);
        } else {

            createOrWriteLog(writeDataToLog);
        }
    } catch (err) {
        console.error(err)
    }
}

const buildLastRecordData = (last_record_data, engaments_to_log, enriched_msg) => {
    counter = last_record_data.counter + 1;
    myObj = new Object()
    myObj['id'] = enriched_msg.id;
    myObj['counter'] = counter;
    myObj['total_engaments'] = engaments_to_log;
    var jsonContent = JSON.stringify(myObj);
    return jsonContent;
}

const buildDataToLog = (total_engagements) => {
    const date = getDate();
    const result = date + '-> ' + total_engagements
    return result;
}
const engamentsToLog = (data, enriched_msg_total) => {
    if (data.counter === 0)
        return enriched_msg_total

    counter = data.counter + 1;
    const last_total = data.total_engaments * data.counter;
    const current_total = last_total + enriched_msg_total;
    const result = current_total / counter;
    return result;

}
const createOrWriteLog = (data) => {
    fs.writeFile(path.join(__dirname, '/log.text'), data + "\r\n", function (err, data) {
        if (err) {
            return console.log(err);
        }
    });
}

const appendTolog = (data) => {
    fs.appendFile(path.join(__dirname, '/log.text'), data + "\r\n", function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

const WriteLastRecord = (data) => {
    fs.writeFileSync(path.join(__dirname, '/last-record.json'), data, function (err, data) {
        if (err) {
            return console.log(err);
        }
    });
}



const getDate = () => {
    const now = dateFormat(new Date(), "dd-mm-yyyy h:MM:tt");
    return now;
}





module.exports = { logResult };