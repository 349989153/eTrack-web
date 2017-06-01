/**
 * Created by luyang on 2017/6/1.
 */
import eTrack from './index';

eTrack.prototype.remove = function (name) {
    let index = this.trackers.indexOf(this.getByName(name));
    this.trackers.splice(index, 1)
};
