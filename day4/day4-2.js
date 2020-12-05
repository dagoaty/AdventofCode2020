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

function checkBYR(passport) {
    if (passport['byr'] && passport['byr'] >= 1920 
    && passport['byr'] <= 2002 ) {
        return 1;
    }
}

function checkIYR(passport) {
    if (passport['iyr'] && passport['iyr'] >= 2010 
    && passport['iyr'] <= 2020) {
        return 1;
    }
}

function checkEYR(passport) {
    if (passport['eyr'] && passport['eyr'] >= 2020 
    && passport['eyr'] <= 2030) {
        return 1;
    }
}

function checkHCL(passport) {
    const re = new RegExp('^#[0-9a-f]{6}$');
    if (passport['hcl'] && passport['hcl'].match(re)) {
        return 1;
    }
}

function checkECL(passport) {
    valid = ['amb','blu','brn','gry','grn','hzl','oth'];
    if (passport['ecl'] && valid.includes(passport['ecl'])) {
        return 1;
    }
}

function checkPID(passport) {
    const re = new RegExp('^[0-9]{9}$');
    if (passport['pid'] && passport['pid'].match(re)) {
        return 1;
    }
}

function checkHGT(passport) {
    const reCM = new RegExp('cm$');
    const reIN = new RegExp('in$');
    if (passport['hgt'] && passport['hgt'].match(reCM)) {
        num = passport['hgt'].split('cm')[0];
        if (150 <= num && num <= 193) {
            return 1;
        }
    } else if (passport['hgt'] && passport['hgt'].match(reIN)){
        num = passport['hgt'].split('in')[0];
        if ( 59 <= num && num <= 76) {
            return 1;
        }
    }
}

function checkCID(passport) {
        return 1;
}

function verify(passport) {
    if (checkBYR(passport) && checkIYR(passport)
    && checkEYR(passport) && checkHCL(passport)
    && checkECL(passport) && checkPID(passport)
    && checkHGT(passport) && checkCID(passport)) {
        return 1;
    } else {
        return 0;
    }
}

for (record in records) {
    validCount += verify(records[record]);
}

console.log(validCount);