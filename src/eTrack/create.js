/**
 * Created by luyang on 2017/6/1.
 */
import Tracker from '../Tracker/index';

/**
 * eTrack.create('UA-XXXXX-Y', 'auto', 'name', {});
 * eTrack.create({trackingId: 'UA-XXXXX-Y', cookieDomain: 'auto', trackerName: 'name' ...})
 */
export default function () {

    let createParams = {};
    /**
     *  第一种情况是参数以数个string传入
     *  第二种情况是所有参数都放在一个{}里传入
     */
    if(typeof arguments[0] === 'string') {
        arguments[0] && (createParams['trackingId'] = arguments[0]);
        arguments[1] && (createParams['cookieDomain'] = arguments[1]);
        arguments[2] && (createParams['trackerName'] = arguments[2]);
        arguments[3] && (createParams = Object.assign({}, createParams, arguments[3]));
    } else {
        createParams = arguments[0];
    }
    if (this.getByName(createParams['trackerName']) !== undefined) {
        throw new Error(`Tracker named '${createParams['trackerName']}' already exist!`);
    }
    let tracker = new Tracker(createParams);
    this.trackers.push(tracker);
};