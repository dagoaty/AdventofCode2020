var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split('\r\n');
const maxRows = 127;
const maxCols = 7;
var seatRows = [];
var seatCols = []
var seatMap = []

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

// Build the seating map
for (i in seatRows) {
    seatMap[seatRows[i]] = [];
}

// Create a filled seating map
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
    seatMap[passRows[0]][passCols[0]] = 1;
}

// Find the empty seat once occupied seats appear
var seatsExist = 0;
row = 0;
while (row <= maxRows) {
    var col = 0;
    while (col <= maxCols) {
        if (seatsExist == 0 && seatMap[row][col] == 1) {
            seatsExist = 1;
        }

        if (seatsExist == 1 && typeof(seatMap[row][col]) == 'undefined') {
            console.log(row * 8 + col);
            process.exit(0);
        }
        col++;
    }
    row++;
}