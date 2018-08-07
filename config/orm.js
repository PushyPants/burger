let connection = require('./connections');

module.exports = {
    selectAll: function(table,calBack){
        connection.query(`SELECT * FROM ??`, [table],function (err, data){
            if (err) throw err;
            console.log(data);
            callBack(data);
        })
    },

    insertOne: function(table, col, value, callBack){
        console.log(table)
        console.log(col)
        console.log(value)
        connection.query("INSERT INTO ?? (??) VALUE (?)", [table, col, value], function(err, data){
            if (err) throw err;
            console.log(data);
            callBack(data);
        });
    },

    updateOne: function(table, col, colVal, where, whereEqual, callBack) {
        connection.query('UPDATE (??) SET (??) = (?) WHERE (??) = (?)', [table, col, colVal, where, whereEqual], function(err, data){
            console.log(data);
            callBack(data);
        }
    }
}