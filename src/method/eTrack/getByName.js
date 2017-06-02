/**
 * Created by luyang on 2017/6/1.
 */

export default function (name) {
    return (this.trackers.filter((v) => {
        return v.getName() === name;
    }))[0]
};
