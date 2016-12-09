var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');
//导出mongoose模块
exports.mongoose = mongoose;