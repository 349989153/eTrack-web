/**
 * Created by Tracker on 2017/6/1.
 */

export default class Tracker{
    constructor(params) {
        Object.assign(this, params);
    }

    getName() {
        return this.trackerName;
    }

    send() {

    }
}