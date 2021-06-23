const input1 = [1, 2, 3];
const input2 = { a: 1, b: 2 };
const input3 = [1, 2, { a: 1, b: 2 }];
const input4 = [1, 2, { a: 1, b: { c: 3, d: 4 } }];
const input5 = [1, 2, [3]];
const input6 = [1, 2, [3, [4]]];
const input7 = [1, 2, [3], 4];
function cloneObj(obj) {
    if (typeof obj === "object") {
        if (Array.isArray(obj)) {
            let newArray = [];
            for (let index in obj) {
                if (Array.isArray(obj[index])) {
                    newArray[index] = [];
                    for (let index2 in obj[index]) {
                        if (Array.isArray(obj[index][index2])) {
                            newArray[index][index2] = [];
                            for (let index3 in obj[index][index2]) {
                                newArray[index][index2].push(obj[index][index2][index3]);
                            }
                        } else {
                            newArray[index].push(obj[index][index2]);
                        }
                    }
                } else {
                    newArray.push(obj[index]);
                }
            }
            return newArray;
        } else {

        }
    }
}
const newObj = cloneObj(input6);

console.log("newObj", newObj);
newObj[2][1][0] = 555;
console.log("input1", input6);
console.log("newNewObj", newObj);



// const newObjInput1 = [];
// //array => newObjInput1.push(1)
// // [1]
// //newObjInput1.push(1)
// // [1, 1]
// const newObjInput2 = {};