// sqlclient.js
// ========
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
    userName: 'your_username', // update me
    password: 'your_password', // update me
    server: 'localhost'
};

module.exports = {
    foo: function() {
        // whatever
        console.log("Hello");
    },
    bar: function() {
        // whatever
        console.log("bar");
    }
};

var zemba = function() {};