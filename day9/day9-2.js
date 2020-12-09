var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split('\r\n');

const sumNum = 1038347917;

function sumArray(arr) {
    sum = 0
    for (n in arr) {
        sum += Number(arr[n]);
    }
    return sum;
}

for (i = 0; i < inputs.length; i++) {
    var contigs = [Number(inputs[i])];
    var sum = 0;
    iter = i + 1;

    while (sum < sumNum) {
        contigs.push(Number(inputs[iter]));
        sum = sumArray(contigs);
        if (sum == sumNum) {
            contigs.sort(function(a, b) {
                return a - b;
            })
            console.log((contigs[0] + contigs[contigs.length - 1]));
            process.exit(0);
        }
        iter++;
    }
}