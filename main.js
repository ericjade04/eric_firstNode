
const lodash = require("lodash");

const camelCase = lodash.camelCase;

let name = "Eric Jade";


let newName = camelCase(name);
console.log(newName);
