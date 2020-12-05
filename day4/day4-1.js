var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split("\n");
var records = [];
var record = 0;
var validCount = 0;

for (line in inputs) {
    if (inputs[line].trim() == "") {
        record++;
        continue;
    }

    fields = inputs[line].trim().split(" ");
    for (field in fields) {
        var [recField, recValue] = fields[field].split(":");
        if (typeof(records[record]) == 'undefined' ) {
            element = {[recField]: recValue};
            records[record] = element;
        } else {
            records[record][recField] = recValue;
        }
    }
}

for (record in records) {
    if (records[record]['ecl'] && records[record]['pid']
    && records[record]['eyr'] && records[record]['hcl']
    && records[record]['byr'] && records[record]['iyr']
    && records[record]['hgt'] ) {
        validCount++;
    }
}
console.log(validCount);