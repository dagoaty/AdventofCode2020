var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split('\r\n');
var colourCheck = ['shiny gold'];

function parseInput(rules) {
    var bagParentColours = {};
    for (i in rules) {
        bagParentColours = parseRule(rules[i], bagParentColours);
    }
    return bagParentColours;
}

function parseRule(rule, bagParentColours) {
    var [bagColour, bagRulesString] = rule.split(' bags contain ');
    var bagRulesList = bagRulesString.split(", ");

    for (i in bagRulesList) {
        bagRulesList[i] = bagRulesList[i].replace(' bags','');
        bagRulesList[i] = bagRulesList[i].replace(' bag','');
        bagRulesList[i] = bagRulesList[i].replace('.','');

        innerBagCount = bagRulesList[i].slice(0,2).trim();
        innerBagColour = bagRulesList[i].slice(2);

        if (typeof(bagParentColours[innerBagColour]) == 'undefined') {
            bagParentColours[innerBagColour] = [bagColour];
        } else {
            bagParentColours[innerBagColour].push(bagColour);
        }
    }
    return(bagParentColours);
}

var bagParentColours = parseInput(inputs);
var seenColours = {};

while (colourCheck.length > 0) {
    colour = colourCheck.shift();
    for (i in bagParentColours[colour]) {
        seenColours[bagParentColours[colour][i]] = 1;
        colourCheck.push(bagParentColours[colour][i]);
    }
}

console.log(Object.keys(seenColours).length);