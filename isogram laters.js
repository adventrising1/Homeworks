//tesk 3 isogram words and pharse
function isogramWord(str) {
    str = str.trim();
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str.charAt(i) == str.charAt(j)) {
                return false;
            }
        }

    }
    return true;
}

console.log(isogramPhrase("asff ghjkl;p oiu ytre"));

function stringToArray(str) {
    let arr = [];
    let begin = 0;
    let end;
    str = str.trim();
    str = str.replace(/\s{2,}/g, ' ').trim();
    for (let i in str) {
        if (str.charAt(i) == ' ') {
            end = i;
            arr.push(str.substring(begin, end));
            begin = i;
        }
    }
    return arr;
}


function isogramPhrase(str) {
    let arr = stringToArray(str);
    for (let i in arr) {
        if (!isogramWord(arr[i])) {
            return false;
        }
    }
    return true;
}