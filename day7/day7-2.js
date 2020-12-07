var fs = require('fs');
const file = 'inputs';
const inputs = fs.readFileSync(file).toString().split('\r\n');
var colourCheck = ['shiny gold'];
var bagCount = 0;

function parseInput(rules) {
    var bagRules = {};
    for (i in rules) {
        obj = parseRule(rules[i]);
        objColour = Object.keys(obj)[0];
        objRules = obj[objColour];

        bagRules[objColour] = objRules;
    }
    return bagRules;
}

function parseRule(rule, bagParentColours) {
    var [bagColour, bagRulesString] = rule.split(' bags contain ');
    var bagRulesList = bagRulesString.split(", ");
    var bagRules = [];
    for (i in bagRulesList) {
        bagRulesList[i] = bagRulesList[i].replace(' bags','');
        bagRulesList[i] = bagRulesList[i].replace(' bag','');
        bagRulesList[i] = bagRulesList[i].replace('.','');

        innerBagCount = bagRulesList[i].slice(0,2).trim();
        innerBagColour = bagRulesList[i].slice(2);

        if (innerBagCount !== "no") {
            for (n=0; n < innerBagCount; n++) {
                bagRules.push(innerBagColour);
            }
        }
    }
    return({[bagColour]: bagRules});
}

var bagRules = parseInput(inputs);

while (colourCheck.length > 0) {
    colour = colourCheck.shift();
    for (i in bagRules[colour]) {
        colourCheck.push(bagRules[colour][i]);
        bagCount++;
    }
}

console.log(bagCount);