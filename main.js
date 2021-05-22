function convertFahrToCelsius(f) {
    const c =  (f - 32) * 5/9
    const result =  c.toFixed(4);
    if ((typeof f !== "object") & (f !== "") & (result !== "NaN") & (typeof f != "boolean")){
        return result;
        } else {
        const newF = JSON.stringify(f)
        return (`${newF} is not a valid number but a/an ${f.constructor.name}`);
    }
}

// console.log(convertFahrToCelsius(0));
// console.log(convertFahrToCelsius("0"));
// console.log(convertFahrToCelsius([1,2,3]));
// console.log(convertFahrToCelsius({temp: 0}));
console.log(convertFahrToCelsius([7])); 
console.log(convertFahrToCelsius("Chris"))
console.log(convertFahrToCelsius("32"))
console.log(convertFahrToCelsius(""))
console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius({re:2}))
console.log(convertFahrToCelsius(true))
//  convertFahrToCelsius([7]): [7] is not a valid number but a/an array
// - convertFahrToCelsius("Chris"): Chris is not a valid number but a/an string
// - convertFahrToCelsius("32"): 0
// - convertFahrToCelsius(""): "" is not a valid number but a/an string
// - convertFahrToCelsius(0): -17.7778 (must be to 4 d.p)
// - convertFahrToCelsius({re:2}): {re:2} is not a valid number but a/an object
// - convertFahrToCelsius(false): false is not a valid number but a/an boolean



// function checkYuGiOh(n){
//     const arr = [];
//     for (let i = 1; i<=n;i++){
//         if (i%2 === 0 && i%3 === 0 && i%5 === 0){
//             arr.push("yu-gi-oh")
//         } else if (i%2 === 0 && i%3 === 0){
//             arr.push("yu-gi")
//         } else if (i%2 === 0 && i%5 === 0){
//             arr.push("yu-oh")
//         } else if (i%3 === 0 && i%5 === 0){
//             arr.push("gi-oh")
//         } else if (i%2 === 0){
//             arr.push("yu")
//         } else if (i%3 === 0){
//             arr.push("gi")
//         } else if (i%5 === 0){
//             arr.push("oh")
//         }
//         else {
//             arr.push(i);
//         };
//     }
//     if (arr.length > 0){
//         return arr;
//     } else {
//         const newN = JSON.stringify(n)
//         return (`invalid parameter: ${newN}`)
//     }
// }

// console.log(checkYuGiOh(10));
// console.log(checkYuGiOh("5"));
// console.log(checkYuGiOh("fizzbuzz is meh"));




