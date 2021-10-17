const chalk = require("chalk")
const getCurDateTime = require("./Get_Date")
const errorLog = function (log_text, is_sensitive = false) {
    return chalk.bgHex("#fc3258").hex("#000000").bold("Error:") + " \t " + getCurDateTime(is_sensitive) + "\t" + chalk.hex("#f73e4d")(":" + log_text) + "\n"
}
module.exports = {
    errorLog
}