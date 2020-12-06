var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split('\r\n\r\n');
var result = 0;

for (i in inputs){
    const re = new RegExp('^[a-z]$');
    var answers = inputs[i].split('');
    var group = {};
    for (j in answers) {
        letter = answers[j];
        if (letter.match(re)) {
            group[letter] = 1;
        }
    }
    result += Object.keys(group).length;
}
console.log(result);