/**
 * Created by muzin on 17-9-23.
 */

/**
 * datetime类 对 日期时间对象进行操作
 */
var DateTimeUtils = function(){

    /**
     * 将日期格式化成指定模板的字符串
     * @param date
     * @param format
     */
    this.format = function(date, format){
        var d = null;

        if(typeof date == 'string'){
            try {
                d = new Date(date);
                if(d.toString() == 'Invalid Date'){
                    throw 'datetime is Invalid Date';
                }
            }catch(e){
                console.error(e);
                d = null;
            }
        }else if(date.constructor.name == 'Date'){
            d = date;
        }else{
        }

        var _year = d.getFullYear();
        var _month = d.getMonth() + 1;
        var _date = d.getDate();

        var _day = d.getDay();

        var _hours = d.getHours();
        var _minutes = d.getMinutes();
        var _seconds = d.getSeconds();
        var _mseconds = d.getMilliseconds();

        var formatClone = format;
        return formatClone
            .replace(/yyyy/g, _year)
            .replace(/MM/g, _month > 9 ? _month : '0' + _month)
            .replace(/dd/g, _date > 9 ? _date : '0' + _date)
            .replace(/hh/g, _hours > 9 ? _hours : '0' + _hours)
            .replace(/mm/g, _minutes > 9 ? _minutes : '0' + _minutes)
            .replace(/ss/g, _seconds > 9 ? _seconds : '0' + _seconds)
            .replace(/ms/g, _mseconds > 9
                ? _mseconds > 99
                    ? _mseconds
                    : '0' + _mseconds
                : '00' + _mseconds);
    }

};



exports = module.exports = new DateTimeUtils();