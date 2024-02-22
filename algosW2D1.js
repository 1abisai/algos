// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
//output = [1, 3, 5, 8, 10]

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];
//output = [1, 3, 4, 5, 8, 10]

// 1. DRIVER 🚗
// 2. PRESENTER 🧑‍🏫
// 3. NAVIGATOR 🧭

// RIOT

// create a function that takes 2 sorted arrays
function mergeDedupe(arr1, arr2) {
    //! write the pseudocode first!
    //Create a loop to iterate through the length of both array
    //Compare length and the quality(value)
    //if condition of quality omit duplicates
    //if condition ofo quality is the same as the prev element, omit
    //(!==)
    //two more array to catch case where one array is longer
    //. return the output array
    //! do not use Set()y
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]); // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]); // [1, 2, 3, 4, 5, 6, 8, 10, 12]