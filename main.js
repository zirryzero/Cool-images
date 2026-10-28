const coolImages = require("cool-images");
const moment = require("moment");
const fs = require('fs')
moment.locale('es');

let cool = coolImages.many(1920, 1080, 10);


let fecha = new moment().local().format("YYYY/MM/DD hh:mm:ss a");

setTimeout(function() {
    insertText('\n' + fecha + '\n')
    cool.forEach(element => {
        insertText(element + '\n');
    });

}, 1000)

function insertText(element) {
    fs.appendFile('./log.txt', element, function(err) {
        if (err) throw err;
    });

}
console.log('Saved!');