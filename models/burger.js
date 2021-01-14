var orm = require("../config/orm");
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (name, cb) {
        orm.insertOne("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    updateOne: function (id, cb) {
        const condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, cb);
    },
    deleteOne: function (condition, cb) {
        orm.deleteOne("burgers", condition, function (res) {
            cb(res);
        });
    }
};
module.exports = burger;