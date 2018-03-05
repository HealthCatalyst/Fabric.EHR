// sqlclient.js
// ========
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = require('./config');

module.exports = {
    foo: function() {
        // whatever
        console.log("Hello");
    },
    executeQuery: function(host, /*string*/ query, callback) {
        // whatever
        console.log("executeQuery");
        var connection = new Connection(config.getconfig(host));

        connection.on('connect', function(err) {
            if (err) {
                console.log(err);
                callback();
            } else {
                executeStatement(connection, query, callback);
            }
        });
    },
    loadPatient: function(host, patientId, callback) {
        this.executeQuery(host, 'SELECT * FROM Patients WHERE PatientID=' + patientId, callback);
    },
    loadPatientInsights: function(host, patientId, callback) {
        this.executeQuery(host, 'SELECT * FROM Insights WHERE PatientID=' + patientId, callback);
    },
    loadPatientInsightItems: function(host, patientId, callback) {
        this.executeQuery(host, 'SELECT * FROM InsightItems WHERE PatientID=' + patientId, callback);
    },
    loadControlledSubstances: function(host, patientId, callback) {
        this.executeQuery(host, 'SELECT * FROM ControlledSubstances WHERE PatientID=' + patientId, callback);
    },
    loadControlledSubstanceItems: function(host, patientId, callback) {
        this.executeQuery(host, 'SELECT * FROM ControlledSubstanceItems WHERE PatientID=' + patientId, callback);
    },
    loadRegistries: function(host, patientId, callback) {
        this.executeQuery(host, 'SELECT * FROM Registries WHERE PatientID=' + patientId, callback);
    },
    loadRisk: function(host, patientId, callback) {
        this.executeQuery(host, 'SELECT TOP 1 FacilityAccountID, PredictedProbNBR, Factor1TXT,Factor2TXT,Factor3TXT,LastCalculatedDTS FROM Sepsis.EWSPredictionsBASE where FacilityAccountID = ' + patientId + ' ORDER BY LastCalculatedDTS DESC', callback);
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