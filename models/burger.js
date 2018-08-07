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

    devour: function(burger_id, callBack){
        orm.updateOne('burgers', 'devoured', '1', 'id' , burger_id, function(data){
            callBack(data);
        })
    }

    // create delete function if time
};

module.exports = burgers