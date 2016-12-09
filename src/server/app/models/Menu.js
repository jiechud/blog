var mongodb = require('../../config/mongodb');

var Schema = mongodb.mongoose.Schema;

var MenuSchema = new Schema({
    name: {
        type: String
    },
    url: {
        type: String
    },
    icon: {
        type: String
    },
    meta: {
        createTime: {
            type: Date,
            default: Date.now()
        },
        updateTime: {
            type: Date,
            default: Date.now()
        }
    }
});

//实例方法
MenuSchema.methods = {

}

//静态方法
MenuSchema.statics = {
    fetch: function(cb) {
        return this.find({}).sort('meta.updateAt').exec(cb);
    },
    findById: function(id, cb) {
        return this.findOne({
            _id: id
        }).exec(cb);
    }
}

var Menu = mongodb.mongoose.model('Menu', MenuSchema);

//导出 Menu 模model
module.exports = Menu;
