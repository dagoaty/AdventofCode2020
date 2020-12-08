var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split('\r\n');
var acc = 0;
var pos = 0;
var breakVal = 0;
var used = [];
var insts = [];

// Load instructions
for (i in inputs) {
    var [instruction, val] = inputs[i].split(' ');
    insts.push({instruction, val});
}

// Run through them
while (breakVal == 0) {
    // set up the loop exit conditions
    if (used.includes(pos)) {
        breakVal = 1;
        continue;
    }
    used.push(pos);
    instruction = insts[pos]['instruction'];
    oper = insts[pos]['val'].slice(0,1);
    num = Number(insts[pos]['val'].slice(1));

    if (instruction == 'nop') {
        pos++;
    } else if (instruction == 'acc') {
        if (oper == "-") {
            acc = acc - num;
        } else if (oper == "+") {
            acc = acc + num;
        }
        pos++
    } else if (instruction == 'jmp') {
        if (oper == "-") {
            pos = pos - num;
        } else if (oper == "+") {
            pos = pos + num;
        }
    }
}

console.log(acc);