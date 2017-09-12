// config.js
// ========

var databaseconfig = {
    userName: 'nodeuser', // update me
    password: 'ILoveNode2017', // update me
    server: process.env.SQLServer || 'localhost',
    options: {
        database: 'InsightsDatabase',
        rowCollectionOnRequestCompletion: true,
        useColumnNames: true
    }
};

var azuredatabaseconfig = {
    userName: 'dbuser', // update me
    password: 'ILoveEHR!', // update me
    server: 'fabricehr.database.windows.net',
    options: {
        database: 'InsightsDatabase',
        rowCollectionOnRequestCompletion: true,
        useColumnNames: true,
        encrypt: true
    }
};

module.exports = {
    foo: function() {
        // whatever
        console.log("Hello");
    },
    getconfig: function(host) {
        if (host.startsWith("localhost")) {
            return databaseconfig;
        } else {
            return azuredatabaseconfig;
        }
    }
};