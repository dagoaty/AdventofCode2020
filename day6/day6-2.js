var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split('\r\n\r\n');
var result = 0;

for (i in inputs){
    const re = new RegExp('^[a-z]$');
    var groupSize = inputs[i].split('\r\n').length;
    var answers = inputs[i].split('');
    var group = {};

    for (j in answers) {
        letter = answers[j];
        if (letter.match(re)) {
            group[letter] = (group[letter] || 0) + 1;
        }
    }

    for (k in group) {
        if (group[k] == groupSize)
        result++;
    }
}
console.log(result);