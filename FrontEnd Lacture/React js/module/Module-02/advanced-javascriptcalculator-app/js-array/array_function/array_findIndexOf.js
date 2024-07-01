// findIndexOf array function

// The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.


var array1=[5,2,8,3,1,77];

const isLargeNumber=(element)=>element>13
console.log(array1.findIndex(isLargeNumber));