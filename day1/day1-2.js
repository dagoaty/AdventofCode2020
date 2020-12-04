var fs = require('fs');
const file = 'inputs';

const inputs = fs.readFileSync(file).toString().split("\n");

for (i in inputs) {
    for (j in inputs) {
        for (k in inputs) {
            if (inputs[i] == inputs[j]) {
                continue;
            }
            if (inputs[j] == inputs[k]) {
                continue;
            }
            sum = Number(inputs[i]) + Number(inputs[j]) + Number(inputs[k]);
            if (sum == 2020) {
                console.log(inputs[i] * inputs[j] * inputs[k])
                process.exit(0)
            }
        }
    }
}