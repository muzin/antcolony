
const __AntDevice__ = require('./device')
const __MSG_MODULE__ = require('../modules/sys/msg')



var AntDevice = new __AntDevice__();

AntDevice.id = '11'
AntDevice.groups.push('ant')
AntDevice.name = 'ant_muzin'
AntDevice.alias.push('muzin_pc')

AntDevice.addModule(__MSG_MODULE__)





exports = module.exports = AntDevice;


