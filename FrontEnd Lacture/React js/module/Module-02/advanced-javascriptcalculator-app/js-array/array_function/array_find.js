// find array function

// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.



const array1 = [2,8, 8, 25, 19];
const found = array1.find((element)=>element>5);
console.log(found);