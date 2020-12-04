var fs = require('fs');
static file = 'inputs';
static inputs = fs.readFileSync(file).toString().split("\n");
var goodPolicies = 0;

for (line in inputs) {
    var valid = 0
    var [count, letter, password] = inputs[line].split(" ");
    var [countLow, countHigh] = count.split("-");
    letter = letter.replace(':','');
    var passwordArray = password.split("");

    if (passwordArray[countLow-1] == letter) {
        valid++;
    }
    if (passwordArray[countHigh-1] == letter) {
        valid++;
    }
    if (valid == 1) {
        goodPolicies++;
    }
}
console.log(goodPolicies);