// config.js
// ========

var databaseconfig = {
    userName: process.env.SQLUser, //'nodeuser', 
    password: process.env.SQLPassword, //'ILoveNode2017', // update me
    server: process.env.SQLServer || 'docker.for.win.localhost',
    // domain: process.env.ADDomain.toUpperCase().substring(0, process.env.ADDomain.indexOf('.') != -1 ? process.env.ADDomain.indexOf('.')-1 : process.env.ADDomain.length), // "DOMAIN_NAME_CAPITALIZED_AND_NOT_FQDM",
    port: 1433,
    options: {
        database: 'SAM',
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
        return databaseconfig;
        // if (host.startsWith("localhost")) {
        //     return databaseconfig;
        // } else {
        //     return azuredatabaseconfig;
        // }
    }
};