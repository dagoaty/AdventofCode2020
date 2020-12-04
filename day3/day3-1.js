var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split("\n");
var inputMap = [];
var [posX, posY] = [0, 0];
var [maxX, maxY] = [0, 0];
const moveX = 3;
const moveY = 1;
var treeCount = 0;

for (line in inputs) {
    inputMap[line] = inputs[line].trim().split('');
}

maxX = inputMap[0].length;
maxY = inputMap.length;

while (posY < maxY) {
    posX += moveX;
    posY += moveY;

    if (posX >= maxX) {
        posX -= maxX;
    }
    if (posY < maxY) {
        if (inputMap[posY][posX] == '#') {
            treeCount++;
        }
    }
}

console.log(treeCount)