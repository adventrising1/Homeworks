// Determine whether it consists only from uniques or not.(tesk 3)
function isUnique(arr) {
    for (let i in arr) {
        if (!uniqueElement(arr, arr[i])) {
            return false;
        }
    }
    return true;
}

function uniqueElement(arr, element, index = 0) {
    let count = 0;
    for (let i = index; i < arr.length; i++) {
        if (element === arr[i]) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
}
