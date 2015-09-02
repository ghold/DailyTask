var errors = {
    GENERAL_ERROR: function (res, message) {
        res.json({meta: {status: -1, message: message || '一般错误'}, data: {}});
    },
    NOT_AUTHORIZED: function (res, message) {
        res.json({meta: {status: -2, message: message || '没有权限'}, data: {}});
    },
    SYSTEM_ERROR: function (res, message) {
        res.json({meta: {status: -1, message: message || '系统错误'}, data: {}});
    },
    PARAMETER_ERROR: function (res, message) {
        res.json({meta: {status: -1, message: message || '参数异常'}, data: {}});
    },
    VERIFY_ERROR: function (res, message) {
        res.json({meta: {status: -1, message: message || '校验失败'}, data: {}});
    },
    OPRATION_ERROR: function (res, message) {
        res.json({meta: {status: -1, message: message || '非法操作'}, data: {}});
    }
};

var warns = {
    NOT_EXISTED: function(res, message) {
        res.json({meta: {status: 0, message: message || '信息不存在'}, data: {}});
    },
    IS_EXISTED: function(res, message) {
        res.json({meta: {status: 0, message: message || '信息已存在'}, data: {}});
    }
};

module.exports.warns = warns;
module.exports.errors = errors;
