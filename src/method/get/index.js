/**
 * Created by luyang on 2017/6/1.
 */

export default function (url) {
    if (!url) {
        throw new Error("must specify the url of image to request");
    }
    let img = new Image();
    img.onload = img.onerror = img.onabort = function () {
        img.onload = img.onerror = img.onabort = null;
        img = null;
    };
    img.src = url;
}