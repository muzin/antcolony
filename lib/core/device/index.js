
function Device(){

    // 消息编号
    this.id = null;

    this.name = '';

    // 别名
    this.alias = [];

    // 组
    this.groups = [];

    this.modulenames = [];

    this.modules = {};

    this.getModules = function getModules(){
        return this.modules;
    }

    this.getModuleNames = function getModuleNames(){
        return this.modulenames;
    }

}

Device.prototype.getSelf = function getSelf(){
    return this;
}

/**
 * 装配模块
 * @param _module
 */
Device.prototype.addModule = function addModule(_module){
    if(this.testModule(_module)){
        console.error('模块未通过测试，不进行装配')
    }

    var {name, publish, subscribe} = _module;

    var DeviceModule = this.getModules();

    DeviceModule[name] = _module;
    if(!~this.modulenames.indexOf(name)){
        this.modulenames.push(name)
    }

}

/**
 * 装配模块
 * @param _module
 */
Device.prototype.testModule = function addModule(_module){



}

/**
 * 装配模块
 * @param _module
 */
Device.prototype.removeModule = function addModule(moduleName){

    var {name, publish, subscribe} = _module;

    var DeviceModule = this.getModules();

    DeviceModule[name] = _module;
    if(!~this.modulenames.indexOf(name)){
        this.modulenames.push(name)
    }

}


exports = module.exports = Device;
