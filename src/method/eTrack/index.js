/**
 * Created by luyang on 2017/6/1.
 */
import create from './create';
import getAll from './getAll';
import getByName from './getByName';
import remove from './remove';

function eTrack () {
    /**
     * 处理参数
     * 如：
     * eTrack('create', 'UA-XXXXX-Y', 'auto', 'name')
     * eTrack('send', 'UA-XXXXX-Y', 'auto', 'name')
     * 或者
     * eTrack({method: 'create', trackingId: 'UA-XXXXX-Y', cookieDomain: 'auto', trackerName: 'name'})
     * eTrack({method: 'send', hitType: 'event', text: 'auto', value: 'name'})
     */

    /**
     * 存放Trackers的地方
     * @type {Array}
     */
    // this.trackers = [];
    // this.create = create;
    // this.getAll = getAll;
    // this.getByName = getByName;
    // this.remove = remove;
}
eTrack.trackers = [];
eTrack.create = create;
eTrack.getAll = getAll;
eTrack.getByName = getByName;
eTrack.remove = remove;

module.exports = eTrack;
