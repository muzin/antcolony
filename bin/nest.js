var Redis = require('ioredis');
var redis = new Redis();

redis.psubscribe('cmd=msg:device=32:mqid=:*', function (err, count) {
    console.log('start', 'err:', err, 'count:', count)
})

redis.psubscribe('cmd=msg:device=123:*', function (err, count) {
    console.log('start', 'err:', err, 'count:', count)
})

redis.on('pmessageBuffer', function(pattern, channel, message){
    console.log(pattern, channel.toString(), message.toString())
})


/**
 *
 * cmd 命令
 *      msg 消息
 *
 *      cmd 系统命令 （执行命令，获取执行命令后的信息）
 *
 *      sysinfo 系统信息
 *
 *      mqresp  消息队列 结果响应
 *
 *      module   装配模块 （测试模块）
 *
 *      unmodule 卸载模块
 *
 * device 设备编号 (0为nest， 10 以下为queen， 10及以上为 ant)
 *      目标设备编号
 *
 * devicename 设备名称 （字母，数字，下划线）
 *      目标设备名称
 *
 * from 消息来源（设备编号）
 *
 * mqid   消息队列 id
 *      mq_cmd_时间str_randomNum(6)
 *
 *
 *
 */





