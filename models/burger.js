let orm = require('../config/orm');

let burgers = {
    all: function(callBack){
        orm.selectAll('burgers',function(data){
            callBack(data);
        })
    },

    create: function(value, callBack){
        orm.insertOne('burgers', 'burger_name', value, function(data){
            callBack(data);
        })
    },

    devour: function(burger_name, callBack){
        orm.updateOne('burgers', 'devoured', '1', 'burger_name' , burger_name, function(data){
            callBack(data);
        })
    },
}

module.exports = burgers