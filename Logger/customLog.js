const chalk = require("chalk")
const getCurDateTime = require("./Get_Date")
const customLog = function (log_text, customLogText, customLogColor, is_sensitive = false) {
    return chalk.hex(customLogColor).bold(customLogText + ":") + " \t " + getCurDateTime(is_sensitive) + "\t" + chalk.hex("#ffffff")(":" + log_text) + "\n"
}
module.exports = {
    customLog
}