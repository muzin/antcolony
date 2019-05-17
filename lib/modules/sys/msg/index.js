
var sub = require('./sub')
var pub = require('./pub')

const MODULE_NAME = 'msg'

exports = module.exports = {

    name: MODULE_NAME,

    publish: pub,

    subscribe: sub,

};
