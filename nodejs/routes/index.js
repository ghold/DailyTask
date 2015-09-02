//routes for server
var Router = require('express').Router,
    kataCtrl = require('../controllers/kataCtrl');

module.exports = function (){
    var router = new Router();

    router.route('/addKata').post(kataCtrl.add);
    router.route('/updateKataById').post(kataCtrl.updateById);
    router.route('/deleteKataById').post(kataCtrl.deleteById);

    return router;

};
