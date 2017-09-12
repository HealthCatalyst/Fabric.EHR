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

module.exports = {
    foo: function() {
        // whatever
        console.log("Hello");
    },
    getconfig: function(req) {
        return databaseconfig;
    }
};