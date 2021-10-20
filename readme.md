# Serverloggerjs
A robust logging library to track your applictions log, could be used to track server logs using node js applications also could be used to log some important messages in single node applications.

## How to install
```bash
    $ npm i serverloggerjs
```

## How to use?
```js
    const logger = require("serverloggerjs/logger")
    const log = new logger(true) // true represents is the application time sensitive i.e do it need to measure millisecs.
    log.success("A new user just hopped in!")
    log.error("User is entering without authentication!")
    log.warning("A malicious user is detected")
    log.info("Limits about to reach")

    const LOG_TAG = "EXECPTION" // tag for the custom log
    const LOG_COLOR = "#ccff00" // custom log color
    log.custom("Just a custom comment",LOG_COLOR,LOG_TAG)

```

## How to see logs ?
- Where are the logs stored? The logs are by default stored in the **Logs directory within the root directory of your project.**
- Logs are stored on the basis of dates i.e. 21-11-2021.txt --> 21st November 2021's logs
- Below are the steps through which you can see the logs.

```bash
    $ cd  ./Logs
    $ cat yourdate.txt
```

## Created By
- **Jenil J Gandhi (Dharmsinh Desai University Nadiad India).**

## Contact
- Feel free to contact me at jenilgandhi2111@gmail.com