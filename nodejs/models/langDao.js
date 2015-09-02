var dbConn = require("../proxy/dbConn");
var mongoose = dbConn.mongoose,
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var db = dbConn.db;

/**
 *
 * 描述：语言模型
 *
 * HISTORY
 * ****************************************************************************
 *  ID   DATE           			         PERSON          REASON
 *  1    2015年7月20日 下午8:23:38      Ghold          Create
 * ****************************************************************************
 */

 var langSchema = new Schema({
     name: String,                      // 名字
     desc: String,                      // 描述
     proficiency: Number,               // 熟练度
     createDt: Date,                    // 创建时间
     updateDt: Date                     // 更新时间
 });

 var LangModel = exports.LangModel = db.model('Lang', langSchema, "lang");
