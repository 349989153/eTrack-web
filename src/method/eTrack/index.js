/**
 * Created by luyang on 2017/6/1.
 */

export default function eTrack () {
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
    this.trackers = [];
}
