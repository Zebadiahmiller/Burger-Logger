const orm = require("../config/orm.js");

const burger = {
    all: function(cb){
        orm.all("burgers", (res)=>{
            cb(res);
        })
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
}

module.exports = burger