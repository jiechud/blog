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
    defaultExt: 'jpg',
    // charset默认utf8
    charset: 'utf8',
    //日志记录
    logger: {
        log: debug
    }
});

exports.Get = function(req, res) {
    console.log('upload start...');

    fdfs.upload('D:/demo1.jpg', {
        // 指定文件存储的group，不指定则由tracker server分配
        group: 'group1',
        // file bytes, file参数为ReadableStream时必须指定
        size: 1024

    }, function(err, fileId) {
        if (err) {
            console.log(err);
            res.json({
                'err': err
            });

        }
        res.json({
            'id': fileId
        });
        console.log("---" + fileId);
    })

}



exports.Down = function(req,res) {
	console.log('down start..');
    fdfs.download('group1/M00/00/00/wKj-gVaL6PaAOu2cAACwbClSw3g745.jpg', 'test_download.jpg', function(err) {
        if (err) {
            console.log(err);
        }
    });
}

exports.FileInfo = function(req, res) {

	console.log('info start..');
    fdfs.getFileInfo('group1/M00/00/00/wKj-gVaL6PaAOu2cAACwbClSw3g745.jpg', function(err, fileInfo) {
        // fileInfo有4个属性
        // {
        //   // 文件大小
        //   size:
        //   // 文件创建的时间戳，单位为秒
        //   timestamp:
        //   // 校验和
        //   crc32:
        //   // 最初上传到的storage server的ip
        //   addr:
        // }
        // 
 
        res.json({'file':fileInfo});
        console.log(fileInfo)
    })
}
