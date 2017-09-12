// sqlclient.js
// ========
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = require('./config').databaseconfig;

module.exports = {
    foo: function() {
        // whatever
        console.log("Hello");
    },
    executeQuery: function( /*string*/ query, callback) {
        // whatever
        console.log("executeQuery");
        var connection = new Connection(config);

        connection.on('connect', function(err) {
            if (err) {
                console.log(err);
                callback();
            } else {
                executeStatement(connection, query, callback);
            }
        });
    },
    loadPatient: function(patientId, callback) {
        this.executeQuery('SELECT * FROM Patients WHERE PatientID=' + patientId, callback);
    },
    loadPatientInsights: function(patientId, callback) {
        this.executeQuery('SELECT * FROM Insights WHERE PatientID=' + patientId, callback);
    },
    loadPatientInsightItems: function(patientId, callback) {
        this.executeQuery('SELECT * FROM InsightItems WHERE PatientID=' + patientId, callback);
    },
    loadControlledSubstances: function(patientId, callback) {
        this.executeQuery('SELECT * FROM ControlledSubstances WHERE PatientID=' + patientId, callback);
    },
    loadControlledSubstanceItems: function(patientId, callback) {
        this.executeQuery('SELECT * FROM ControlledSubstanceItems WHERE PatientID=' + patientId, callback);
    },
    loadRegistries: function(patientId, callback) {
        this.executeQuery('SELECT * FROM Registries WHERE PatientID=' + patientId, callback);
    }
};

// "select 123, 'hello world'"

var executeStatement = function(connection, query, callback) {
    request = new Request(query, function(err, rowCount, rows) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + ' rows');
            console.log(rows);
        }
        connection.close();

        callback(err, rows);
    });

    /*    request.on('row', function(columns) {
            columns.forEach(function(column) {
                if (column.value === null) {
                    console.log('NULL');
                } else {
                    console.log(column.value);
                }
            });
        });*/

    connection.execSql(request);
};