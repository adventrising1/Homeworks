// reverse keys and values of obj (tesk 1)
function reverse(obj) {
    let resalt = {};
    for (var i in obj) {
        if (isRepeats(obj, obj[i])) {
            resalt[obj[i]] = createArray(obj, obj[i]);

        } else {
            resalt[obj[i]] = i;
        }
    }
    return resalt;
}
function isRepeats(obj, key) {
    let s = 0;
    for (let i in obj) {

        if (key == obj[i]) {
            s++;
            if (s > 1) {
                return true;
            }
        }
    }
    return false;
}
function createArray(obj, value) {
    let arr = [];
    for (const key in obj) {
        if (value == obj[key]) {
            arr.push(key);
        }
    }
    return arr;
}