// every function

// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

function checkAdult(age){
    return age >=18;

}
const ageArray=[23,30,28,22,21,12];

let check = ageArray.every(checkAdult);

console.log(check);