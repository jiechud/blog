var mongodb = require('../../config/mongodb');
var Schema = mongodb.mongoose.Schema;

//var bcrypt = require('bcrypt'); //安全加密
var SALT_WORK_FACTOR = 10; //加密盐值

var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
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

UserSchema.pre('save', function(next) {
    var user = this;
    //if (!user.isModified('password')) return next();
    // bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    //     if (err) return next(err);
    //     console.log(salt);
    //     bcrypt.hash(user.password, salt, function(err, hash) {
    //         if (err) return next(err);
    //         user.password = hash;
    //         next();
    //     });
    // });
    next();
});




//实例方法
UserSchema.methods = {
    //查看密码是否匹配
    comparePassword:function(password,cb){ 
        bcrypt.compare(password,this.password,function(err,isMatch){
            if(err){
                return cb(err);
            }
            //执行下 cb 方法，传递两个参数 第一个参数为null，第二个参数为 isMatch（验证是否通过）
            cb.apply(null,[null,isMatch]);
        });
    }
}

//静态方法
UserSchema.statics = {
    fetch: function(cb) {
        return this.find({}).sort('meta.updateAt').exec(cb);
    },
    findById: function(id, cb) {
        return this.findOne({
            _id: id
        }).exec(cb);
    },
    findByName: function(name, cb) {
        return this.findOne({
            username: name
        }).exec(cb);
    }
}

var User = mongodb.mongoose.model('User', UserSchema);

//导出 Menu 模model
module.exports = User;
