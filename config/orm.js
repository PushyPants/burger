let connection = require('./connections');

module.exports = {
    selectAll: function(table,callBack){
        connection.query(`SELECT * FROM ??`, [table],function (err, data){
            if (err) throw err;
            callBack(data);
        })
    },

    insertOne: function(table, col, value, callBack){''
        connection.query("INSERT INTO ?? (??) VALUE (?)", [table, col, value], function(err, data){
            if (err) throw err;
            callBack(data);
        });
    },

    updateOne: function(table, col, colVal, where, whereEqual, callBack) {
        connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?', [table, col, colVal, where, whereEqual], function(err, data){
            if (err) throw err;
            callBack(data);
        });
    }
}