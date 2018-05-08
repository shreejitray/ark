const salesForceDump = require('./salesforce');

var pssData = require('./PssUberW9Final');
var count=0;
for(var key in pssData) {
    if(pssData.hasOwnProperty(key)){
        if(salesForceDump[key] === pssData[key].replace(/  +/g, ' ')){
            //console.log(`${key} migrated correctly`)
        }else {
            console.log(`${key}`);
            count++;
        }
    }
}
console.log(`Error count ${count}`);