/**
 * Created by Tracker on 2017/6/1.
 */
import send from './send';

export default class Tracker{
    constructor(params) {
        Object.assign(this, params);
        this.send = send.bind(this);
    }

    getName() {
        return this.trackerName;
    }

    // send = send;
}