var fs = require('fs');
const file = 'inputs';

const inputs = fs.readFileSync(file).toString().split("\n");

for (i in inputs) {
    for (j in inputs) {
            if (inputs[i] == inputs[j]) {
                continue;
            }
            sum = Number(inputs[i]) + Number(inputs[j]);
            if (sum == 2020) {
                console.log(inputs[i] * inputs[j])
                process.exit(0)
            }
    }
}