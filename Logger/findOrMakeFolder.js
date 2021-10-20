var fs = require('fs');

const makeDir = function (log_dir = "./Logs") {
    const curDate = new Date()
    const fileName = curDate.getDate() + "-" + curDate.getMonth() + "-" + curDate.getFullYear()
    if (fs.existsSync("./Logs/" + fileName + ".txt")) {
        console.log("Exists")
    }
    else {
        fs.mkdir("Logs", function () {
            const header = ""
            fs.appendFileSync("./Logs/" + fileName + ".txt", header + "\n");
        });
    }
    return "./Logs/" + fileName + ".txt"

}
module.exports = makeDir