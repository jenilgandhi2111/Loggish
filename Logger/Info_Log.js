const chalk = require("chalk")
const getCurDateTime = require("./Get_Date")
const infoLog = function (log_text, is_sensitive = false) {
    return chalk.cyanBright.bold("Info:\t ") + getCurDateTime(is_sensitive) + "\t:" + chalk.whiteBright(log_text) + "\n"
}
module.exports = {
    infoLog
}