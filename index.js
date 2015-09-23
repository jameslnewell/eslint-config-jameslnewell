var fs = require('fs');
var path = require('path');
var strip = require('strip-json-comments');
module.exports = JSON.parse(strip(fs.readFileSync(path.join(__dirname, 'defaults.json')).toString()));