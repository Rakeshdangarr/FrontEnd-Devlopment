// filter array function

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.


var std=["naman","darshit","jenis","nitish"];

const result=std.filter((std)=>std.length>6);
console.log(result);