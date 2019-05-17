
var datetimeUtils = require('./datetime')


function simpleId(cmd){
    return 'mq_'
        + (cmd ? cmd + '_' : '')
        + datetimeUtils.format(new Date(), 'yyyyMMddhhmmssms')
        + '_' + randomNum(100, 100000)
}

function randomNum(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

exports = module.exports = {

    simpleId,

    randomNum,

}
