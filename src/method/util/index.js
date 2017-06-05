/**
 * Created by luyang on 2017/6/5.
 */

function isPlainObject(i) {
    return Object.prototype.toString.call(i) === '[object Object]';
}

export {
    isPlainObject
};