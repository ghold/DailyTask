var dbConn = require("../proxy/dbConn");
var mongoose = dbConn.mongoose,
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var db = dbConn.db;

/**
 *
 * 描述：任务模型
 *
 * HISTORY
 * ****************************************************************************
 *  ID   DATE           			         PERSON          REASON
 *  1    2015年7月13日 上午11:53:38      Ghold          Create
 * ****************************************************************************
 */

var taskSchema = new Schema({
    title: String,                      // 标题
    content: String,                    // 内容
    rate: Number,                       // 综合指数
    /**
     *  状态流
     *  1-已生成
     *  2-已开始
     *  3-已完成
     *  4-已延误
     *  5-已暂停
     */
    status: Number,
    statusFlow: [                       // 状态流
        {
            status: Number,             // 状态
            updateDt: Date,             // 更新时间
        }
    ],
    plan: Number,                       // 计划使用时间
    duration: Number,                   // 累计使用时间
    createDt: Date,                     // 任务创建时间
    startDt: Date,                      // 任务开始时间
    doneDt: Date,                       // 完成时间
    updateDt: Date                      // 更新时间
});

var TaskModel = exports.TaskModel = db.model('Task', taskSchema, "task");
