// Stretch 1

function createBase(num){
    return function(start){
        return start + num;
    }
}

let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// Stretch 2

