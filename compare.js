//compare  Objects tesk 2
function countOfObj(obj) {
    let count = 0;
    for (let i in obj) {
        count++;
    }
    return count;
}
function objCompare(obj1, obj2) {
    let eqeul;
    if (countOfObj(obj1) != countOfObj(obj2)) {
        return false;
    }
    for (let i in obj1) {
        eqeul = false;
        for (let j in obj2) {
            if (obj1[i] == obj2[j]) {
                eqeul = true;
                break;
            }

        }
        if (!eqeul)
            return false;
    }
    for (let i in obj2) {
        eqeul = false;
        for (let j in obj1) {
            if (obj2[i] == obj1[j]) {
                eqeul = true;
                break;
            }

        }
        if (!eqeul)
            return false;
    }
    return true;
}
