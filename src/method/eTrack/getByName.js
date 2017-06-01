/**
 * Created by luyang on 2017/6/1.
 */
import eTrack from './index';

eTrack.prototype.getByName = function (name) {
    return this.trackers.filter((v) => {
        return v.getName() === name;
    })
};
