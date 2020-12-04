var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split("\n");
var inputMap = [];
const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]]
var [maxX, maxY] = [0, 0];
const moveX = 3;
const moveY = 1;
var result = 1;

for (line in inputs) {
    inputMap[line] = inputs[line].trim().split('');
}

maxX = inputMap[0].length;
maxY = inputMap.length;

for (slope in slopes){
    var [posX, posY] = [0, 0];
    var treeCount = 0;
    const [moveX, moveY] = slopes[slope];
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
    result *= treeCount;
}

console.log(result);