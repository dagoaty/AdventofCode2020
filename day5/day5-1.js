var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split('\r\n');
const maxRows = 127;
const maxCols = 7;
var seatRows = [];
var seatCols = []
var maxSeatID = 0;

// Build the rows of seats
var count = 0;
while (count <= maxRows) {
    seatRows[count] = count;
    count++;
}

// Build the columns of seats
count = 0;
while (count <= maxCols) {
    seatCols[count] = count;
    count++;
}

// Process the data
for (input in inputs) {
    passRows = Object.assign([], seatRows);
    passCols = Object.assign([], seatCols);
    const inputRow = inputs[input].split('');
    for (letter in inputRow) {
        const move = inputRow[letter];
        var halfRow = Math.ceil(passRows.length / 2);
        var halfCol = Math.ceil(passCols.length / 2);
        if (move == 'F') {
            passRows = passRows.splice(0, halfRow);
        } else if (move == 'B') {
            passRows = passRows.splice(-halfRow);
        } else if (move == 'L') {
            passCols = passCols.splice(0, halfCol);
        } else if (move == 'R') {
            passCols = passCols.splice(-halfCol);
        } else {
            console.log("Invalid instruction: ", move);
            process.exit(1);
        }
    }

    var seatID = passRows[0] * 8 + passCols[0];
    if (seatID > maxSeatID) {
        maxSeatID = seatID;
    }
}

console.log(maxSeatID);