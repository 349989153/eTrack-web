/**
 * Created by luyang on 2017/6/1.
 */

/**
 *
 * @param name
 * @returns {Array.<Tracker>}
 */
function remove(name) {
    let index = this.trackers.indexOf(this.getByName(name));
    return this.trackers.splice(index, 1);
}

export default remove;
