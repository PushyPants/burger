let connection = require('./connections');

module.exports = {
    selectAll: function(err){
        connection.connection.query(`
        SELECT *
        FROM burgers
        `, function ())
    },

    insertOne: function(err){
        if (err) throw err;
        connection.connection.query(`INSERT INTO burgers (burger_name)`)
        VALUES()
    }
}