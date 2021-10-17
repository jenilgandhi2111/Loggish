const chalk = require("chalk")
const getCurDateTime = require("./Get_Date")
const warningLog = function (log_text, is_sensitive = false) {
    return chalk.yellowBright.bold("Warning: ") + getCurDateTime(is_sensitive) + "\t:" + chalk.whiteBright(log_text) + "\n"
}
module.exports = {
    warningLog
}
