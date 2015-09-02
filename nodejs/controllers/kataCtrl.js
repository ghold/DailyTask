var _ = require("lodash");
var kataModel = require('../models/kataDao').KataModel;
var errors = require('../exception/exceptionCon').errors;
var warns = require('../exception/exceptionCon').warns;

/**
 *
 * 描述：kata实体处理
 *
 * HISTORY
 * ****************************************************************************
 *  ID   DATE           			         PERSON          REASON
 *  1    2015年7月18日 下午8:53:38      Ghold          Create
 * ****************************************************************************
 */

var kataCtrl = {
    findAll: function(req, res, next){

    },

    // 添加Kata
    add : function(req, res, next){
        var name = req.body.name,
            desc = req.body.desc,
            difficulty = req.body.difficulty;

        var kata = {
            'name': name,
            'desc': desc,
            'difficulty': difficulty,
            'createDt': new Date(),
            'updateDt': new Date()
        }

        kataModel.findOne({"name": name}, function(err, doc){
            if (err) return next(errors.SYSTEM_ERROR(res));
            if (doc) return next(warns.IS_EXISTED(res));
            kataModel.create(kata, function(err, doc){
                if (err) return next(errors.SYSTEM_ERROR(res));
                res.json({meta: {status: 1, message: "添加Kata成功"}, data: {}});
            });
        });
    },
    // 根据id，更新Kata
    updateById : function(req, res, next){
        var kataId = req.params["kataId"];
        var info = req.body.info;
        info = JSON.parse(info);

        kataModel.findById(kataId, function(err, doc) {
            if (err) return next(errors.SYSTEM_ERROR(res));
            if (!doc) return next(warns.NOT_EXISTED(res));

            info.updateDt = new Date();
            _.assign(doc, info);
            doc.save(function(err, doc){
                if (err) return next(errors.SYSTEM_ERROR(res));
                res.json({status: 1, info: "更新Kata成功", data: {}});
            });
        });
    },
    // 根据id，删除Kata
    deleteById : function(req, res, next) {
        var kataId = req.params["kataId"];

        kataModel.findByIdAndRemove(kataId, function(err, doc){
            if (err) return next(errors.SYSTEM_ERROR(res));
            if (!doc) return next(warns.NOT_EXISTED(res));
            res.json({status: 1, info: "删除Kata成功", data: {kata: doc}});
        });
    }
};

module.exports.__proto__ = kataCtrl;
