var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split('\r\n');
var stepsLog = {};

const adapters = [0].concat(inputs.sort(function(a,b) { return Number(a - b); }));

for (i = 1; i < adapters.length; i++) {
    joltJump = adapters[i] - adapters[i-1];
    stepsLog[joltJump] = (stepsLog[joltJump] || 0) + 1;
}
stepsLog['3']++;

console.log(stepsLog['1'] * stepsLog['3']);