const chalk = require("chalk")
const getCurDateTime = require("./Get_Date")

const successLog = function (log_text, is_sensitive = false) {
    return chalk.greenBright.bold("Success: ") + getCurDateTime(is_sensitive) + "\t" + chalk.whiteBright(":" + log_text) + "\n"
}
module.exports = successLog