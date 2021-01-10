const fs = require("fs") // Filesystem library

function writeHTML5(){
    const filename = process.argv[2] // process.argv[2] will access the third argument from the actuall "node index.js" filename command

    fs.writeFileSync(`${process.cwd()}/${filename}`, "<html><body></body></html>")
}

writeHTML5();