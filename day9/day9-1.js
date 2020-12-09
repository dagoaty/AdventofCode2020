var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split('\r\n');

const preambleLength = 25;
var place = preambleLength;
var preamble = [];

for (i = 0; i < preambleLength; i++) {
    preamble.push(Number(inputs[i]))
}

loop1:
while (place < inputs.length) {
    checkNum = Number(inputs[place]);
    for (i in preamble) {
        remainder = checkNum - preamble[i];

        if (remainder == preamble[i]) {
            continue;
        }

        if (preamble.includes(remainder)) {
            preamble.push(checkNum);
            preamble.shift();
            place++;
            continue loop1;
        }
    }
    console.log("Invalid number is", checkNum);
    process.exit(0);
}