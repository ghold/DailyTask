var _ = require("lodash");
var langModel = require('../models/langDao').LangModel;
var errors = require('../exception/exceptionCon').errors;
var warns = require('../exception/exceptionCon').warns;

/**
 *
 * 描述：lang实体处理
 *
 * HISTORY
 * ****************************************************************************
 *  ID   DATE           			         PERSON          REASON
 *  1    2015年7月18日 下午8:53:38      Ghold          Create
 * ****************************************************************************
 */

var langCtrl = {
    findAll: function(req, res, next){

    },

    // 添加语言
    add : function(req, res, next){
        var name = req.body.name,
            desc = req.body.desc,
            proficiency = req.body.proficiency;

        var lang = {
            'name': name,
            'desc': desc,
            'proficiency': proficiency,
            'createDt': new Date(),
            'updateDt': new Date()
        }

        langModel.findOne({"name": name}, function(err, doc){
            if (err) return next(errors.SYSTEM_ERROR(res));
            if (doc) return next(warns.IS_EXISTED(res));
            langModel.create(lang, function(err, doc){
                if (err) return next(errors.SYSTEM_ERROR(res));
                res.json({meta: {status: 1, message: "添加语言成功"}, data: {}});
            });
        });
    },

    // 根据id，更新语言
    updateById : function(req, res, next){
        var langId = req.params["langId"];
        var info = req.body.info;
        info = JSON.parse(info);

        langModel.findById(Id, function(err, doc) {
            if (err) return next(errors.SYSTEM_ERROR(res));
            if (!doc) return next(warns.NOT_EXISTED(res));

            info.updateDt = new Date();
            _.assign(doc, info);
            doc.save(function(err, doc){
                if (err) return next(errors.SYSTEM_ERROR(res));
                res.json({status: 1, info: "更新语言成功", data: {}});
            });
        });
    },

    // 根据id，删除语言
    deleteById : function(req, res, next) {
        var langId = req.params["langId"];

        langModel.findByIdAndRemove(langId, function(err, doc){
            if (err) return next(errors.SYSTEM_ERROR(res));
            if (!doc) return next(warns.NOT_EXISTED(res));
            res.json({status: 1, info: "删除语言成功", data: {lang: doc}});
        });
    }
};

module.exports.__proto__ = langCtrl;
