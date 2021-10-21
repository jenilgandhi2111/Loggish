const { errorLog } = require("./Logger/Error_log")
const makeDir = require("./Logger/findOrMakeFolder")
const { infoLog } = require("./Logger/Info_Log")
const Success_log = require("./Logger/Success_log")
const { warningLog } = require("./Logger/Warning_log")
const fs = require("fs")
const { customLog } = require("./Logger/customLog")

class log {
    constructor(is_Sensitive = false, log_dir = "/Logs") {
        this.is_Sensitive = is_Sensitive
        this.fileName = makeDir(log_dir)
    }
    success(text) {
        fs.appendFileSync(this.fileName,
            Success_log(text, this.is_Sensitive));
    }
    info(text) {
        fs.appendFileSync(this.fileName,
            infoLog(text, this.is_Sensitive))
    }
    error(text) {
        fs.appendFileSync(this.fileName,

            errorLog(text, this.is_Sensitive))
    }
    warning(text) {
        fs.appendFileSync(this.fileName,
            warningLog(text, this.is_Sensitive))
    }
    custom(text, color = "#ccff00", label = "custom") {
        fs.appendFileSync(this.fileName,
            customLog(text, label, color)
        )
    }
    getNewCustomLog(color = "#ccff00", label = "custom") {
        const fileName = this.fileName
        return function (text) {
            fs.appendFileSync(fileName,
                customLog(text, label, color)
            )
        }
    }
}

module.exports = log