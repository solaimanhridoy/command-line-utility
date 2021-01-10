const fs = require("fs") // Filesystem library

exports.writehtml5public = writeHTML5;
function writeHTML5(){
    const html5 = fs.readFileSync(`${__dirname}/index.html`) // __dirname is where the code is located  
    const filename = process.argv[2] // process.argv[2] will access the third argument from the actuall "node index.js" filename command

    fs.writeFileSync(`${process.cwd()}/${filename}`, html5) // process.cwd means where the process is running from
}

writeHTML5();