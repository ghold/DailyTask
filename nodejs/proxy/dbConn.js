var mongoose = exports.mongoose = require('mongoose');
var db = exports.db = mongoose.createConnection();

var settings = require("../config/settings");

var options = {
    db: { native_parser: false },
    server: { poolSize: 10 },
    user: settings.username,
    pass: settings.password
}


exports.openDB = function () {
    db.open(settings.host, settings.db, settings.port, options);
    console.log("open db");
}


db.on('error', function (err) {
    console.log("db error");
    console.log(err);
    // db.close();
});


//监听db close event并重新连接
db.on('close', function () {
    console.log("db closed");
    db.open(settings.host, settings.db, settings.port, options);
    console.log("db reopen");
});

db.on("connected", function (err) {
    if (err) {
        console.log("db connect failed !");
    } else {
        console.log("db connect success !");
    }
})
