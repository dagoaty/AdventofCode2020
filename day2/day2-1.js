var fs = require('fs');
var file = 'inputs.test';
var valid = 0
var inputs = fs.readFileSync(file).toString().split("\n");

for (line in inputs) {
    var [count, letter, password] = inputs[line].split(" ");
    var [countLow, countHigh] = count.split("-");
    letter = letter.replace(':','');
    var re = new RegExp(letter, 'g');

    count = (password.match(re) || []).length;

    if (countLow <= count && count <= countHigh) {
        valid++;
    }
}
console.log(valid)