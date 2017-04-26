// sqlclient.js
// ========
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
    userName: 'nodeuser', // update me
    password: 'ILoveNode2017', // update me
    server: 'localhost',
    options: {
        database: 'InsightsDatabase'
    }
};

module.exports = {
    foo: function() {
        // whatever
        console.log("Hello");
    },
    executeQuery: function( /*string*/ query) {
        // whatever
        console.log("bar");
        var connection = new Connection(config);

        connection.on('connect', function(err) {
            if (err) {
                console.log(err);
            } else {
                executeStatement(connection, "select 123, 'hello world'");
            }
        });
    }
};

// "select 123, 'hello world'"

var executeStatement = function(connection, query) {
    request = new Request(query, function(err, rowCount) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + ' rows');
        }
        connection.close();
    });

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            if (column.value === null) {
                console.log('NULL');
            } else {
                console.log(column.value);
            }
        });
    });

    connection.execSql(request);
};