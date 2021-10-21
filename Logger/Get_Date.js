const chalk = require("chalk")
const convertToTwoDigit = function (data) {
    data = String(data)
    if (data.length == 1) {
        return "0" + data
    }
    return data
}
const convertToThreeDigit = function (data) {
    data = String(data)
    let len = 3 - data.length
    let finalStr = ""
    for (let i = 0; i < len; i++) {
        finalStr += "0"
    }
    finalStr += data
    return finalStr
}
const getCurDateTime = function (is_sensitive = false) {
    is_sensitive = true
    const curDateTime = new Date()
    var millis = ""
    if (is_sensitive) {

        millis = ":" + convertToThreeDigit(curDateTime.getMilliseconds())
    }

    return chalk.magenta("[" + convertToTwoDigit(curDateTime.getDate()) + "/" + convertToTwoDigit(curDateTime.getMonth()) + "/" + curDateTime.getFullYear() + " " + convertToTwoDigit(curDateTime.getHours()) + ":" + convertToTwoDigit(curDateTime.getMinutes()) + ":" + convertToTwoDigit(curDateTime.getSeconds()) + millis + "]");

}
module.exports = getCurDateTime