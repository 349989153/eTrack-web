/**
 * Created by luyang on 2017/6/5.
 */
import sendByImg from '../method/get/index';
import {imgName, server, paramsShortMap} from '../constant/constant';
import {isPlainObject} from '../method/util';
/**
 * 传入data，生成url，发送img请求
 * @param data
 */
function send(data) {
    let url = `${server}${imgName}?ts=${new Date().getTime()}&tid=${encodeURIComponent(this.trackingId)}`;
    for (const i in data) {
        let _paramName = paramsShortMap[i] ? paramsShortMap[i] : i;
        let _paramValue = data[i];
        if (isPlainObject(_paramValue)) {
            _paramValue = JSON.stringify(_paramValue);
        }
        url += `&${_paramName}=${encodeURIComponent(_paramValue)}`;
    }
    sendByImg(url);
}

export default send;