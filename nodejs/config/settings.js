// 配置环境
var isDev = exports.isDev = true;

// mongodb数据库
exports.host                      = isDev ? 'localhost' : 'localhost';
exports.port                      = isDev ? '27017':'27017';
exports.db                        = isDev ? 'dailyTask':'dailyTask';
exports.username                  = isDev ? '':'';
exports.password                  = isDev ? '':'';
exports.poolSize                  = isDev ? 10:10;
