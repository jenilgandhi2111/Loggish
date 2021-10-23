![alt text](https://github.com/jenilgandhi2111/Serverloggerjs/blob/master/Assets/Serverloggeer.jpg)<br/>
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

    // You could use this method as well but this is a more lengthy one instead try using below one.
    const LOG_TAG = "EXECPTION" // tag for the custom log
    const LOG_COLOR = "#ccff00" // custom log color
    log.custom("Just a custom comment",LOG_COLOR,LOG_TAG)
    
    // This is a newly added functionality for creating custom logs.
    const CustomLog = log.getNewCustomLog("#ccff55", "Execption") // color of the log is first arg and label of the log is the second arg.
    CustomLog("An Unknown Exception has occured!")
    // OR 
    log.clog("An Unkown Exception has occured!") // This is also an equivalent way of doing the above thing.

```

## How to see logs ?
- Where are the logs stored? The logs are by default stored in the **Logs directory within the root directory of your project.**
- Logs are stored on the basis of dates i.e. 21-11-2021.txt --> 21st November 2021's logs
- Below are the steps through which you can see the logs.

```bash
    $ cd  ./Logs
    $ cat yourdate.txt
```
## How logs look like?
![alt text](https://github.com/jenilgandhi2111/Serverloggerjs/blob/master/Assets/Example_1.jpg)<br/>

## Created By
- **Jenil J Gandhi (Dharmsinh Desai University Nadiad India).**

## Contact
- Feel free to contact me at jenilgandhi2111@gmail.com