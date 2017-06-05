/**
 * Created by luyang on 2017/6/5.
 */
import {isPlainObject} from '../method/util';
/**
 * 1.eTrack.send('trackName', {eventName: 'en'...})
 * 2.eTrack.send({name: 'trackName', eventName: 'en'})
 * eTrack的send方法，输入name和data（或者只输入一个data，里面包含或不包含name属性）
 * 然后获取到指定name的Tracker实例，调用Tracker.send(data)
 * @param name
 * @param data
 */
function send() {
    if (typeof arguments[0] === 'string') {
        let name, data;
        name = arguments[0];
        data = arguments[1];
        this.getByName(name).send(data);
    } else if (isPlainObject(arguments[0])) {
        let arg = Object.assign({}, arguments[0]);
        let name = arg.name;
        delete arg['name'];
        this.getByName(name).send(arg);
    }
}

export default send;

