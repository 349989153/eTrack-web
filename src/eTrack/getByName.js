/**
 * Created by luyang on 2017/6/1.
 */

/**
 * 根据trackerName返回Tracker实例
 * @param name
 * @returns {Tracker}
 */
function getByName(name) {
    let tracker = (this.trackers.filter((v) => {
        return v.getName() === name;
    }))[0];
    if(!tracker) {
        console.warn(`Tracker with name ${name} does not exist.Please create named Tracker first.`)
    }
    return tracker;
}

export default getByName;
