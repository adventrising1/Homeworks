// tesk 5 geting missing elemnet in array from (min,max)
function minElement(arr) {
    let min = arr[0];
    for (let i in arr) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
function maxElement(arr) {
    let max = arr[0];
    for (let i in arr) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
let arr = [12, 32, 23, 56, 434, 21, 23, 35, 452, 21,];
//console.log(maxElement(arr));
//console.log(minElement(arr));
function elementOnArray(arr, element) {
    for (let i in arr) {
        if (arr[i] === element) {
            return true;

        }
    }
    return false;
}
//console.log(elementOnArray(arr, 12));
function getMissElementsOfArray(arr) {
    let min = minElement(arr);
    let max = maxElement(arr);
    let arr1 = [];
    for (let i = min + 1; i < max; i++) {
        arr1.push(i);
    }
    for (let i in arr1) {
        if (elementOnArray(arr, arr1[i])) {
            arr1.splice(i, 1);
        }
    }
    return arr1;
}

console.log(arr);
console.log(getMissElementsOfArray(arr));