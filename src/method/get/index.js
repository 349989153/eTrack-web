/**
 * Created by luyang on 2017/6/1.
 */

export default function (url) {
    if (!url) {
        throw new Error("must specify the url of image to request");
    }
    let img = new Image();
    let id = 'img_' + new Date().getTime();
    img.onload = img.onerror = img.onabort = function () {
        img.onload = img.onerror = img.onabort = null;
        img = window[id] = null;
    };
    window[id] = img;
    img.src = url;
}