const generator = require("./modules/engaments-generator");
const recieveService = require("./modules/recieve");

const startService = () => {

    generator.start();
    recieveService.start();
}

startService()