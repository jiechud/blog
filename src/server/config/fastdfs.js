var debug = require('debug')('fdfs');
var FdfsClient = require('fdfs-client');
var fdfs = new FdfsClient({
    // tracker servers
    trackers: [{
        host: '192.168.254.128',
        port: 22122
    }],
    // 默认超时时间10s
    timeout: 10000,
    // 默认后缀
    // 当获取不到文件后缀时使用
    defaultExt: 'txt',
    // charset默认utf8
    charset: 'utf8',
    //日志记录
    logger: {
        log: debug
    }
})

exports.mongoose = fdfs;
