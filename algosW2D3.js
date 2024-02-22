/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
k = 16;
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11];

output = [
    [2, 5, 3, 6],
    [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
];

// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first:
// learning to write good
// pseudocode is just as
// important as learning to write
// actual code, even if it might
// feel like an unnecessary step at
// times
// create the function and decide what params it needs and what it will return here:

// create a function that takes in the arr and k
// create a loop to iterate through the array
//then slice the array
// compare the two numbers by checking if they add up to the given k
//if they do add up to it then push all values into their own array 
function addUpToK(arr) {
    let newArrs = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[+i] === 16) {
            newArrs.push[i][+i]
        }
    }
    return newArrs
}
console.log(addUpToK(arr))

