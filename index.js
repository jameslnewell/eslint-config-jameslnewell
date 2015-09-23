var fs = require('fs');
var strip = require('strip-json-comments');
module.exports = JSON.parse(strip(fs.readFileSync('./defaults.json').toString()));