var dbConn = require("../proxy/dbConn");
var mongoose = dbConn.mongoose,
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var db = dbConn.db;

/**
 *
 * 描述：kata模型
 *
 * HISTORY
 * ****************************************************************************
 *  ID   DATE           			         PERSON          REASON
 *  1    2015年7月18日 下午8:53:38      Ghold          Create
 * ****************************************************************************
 */

 var kataSchema = new Schema({
     name: String,                      // 名字
     desc: String,                      // 描述
     difficulty: Number,                // 难度
     createDt: Date,                    // 创建时间
     updateDt: Date                     // 更新时间
 });

 var KataModel = exports.KataModel = db.model('Kata', kataSchema, "kata");
