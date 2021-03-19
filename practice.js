/* eslint-disable no-undef */
const Array = require("./array");

function main() {
  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  arr.push(3);
  //{length : 1, _capacity: 3, ptr: 0}
  console.log(arr);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(16);
  //{length : 5, _capacity: 12, ptr : 3}
  console.log(arr);
  arr.pop();
  arr.pop();
  arr.pop();
  //{length : 2, _capacity : 12, ptr : 3}
  console.log(arr);
}

function urlify(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      newString += "%20";
    } else {
      newString += string[i];
    }
  }
  return newString;
}
main();
console.log(urlify("tauhida parveen"));
console.log(urlify("www.thinkful.com / tauh ida parv een"));

// O(n) Linear Time;

function filtering(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] <= 5) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(filtering([1, 2, -3, 5, -6, 7]));

// O(n) Linear Time;

//countinus summ
function maxSum(array) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if(sum > max){
        max = sum;
    }if(sum < 0){
        sum = 0;
    }
}
return max;
}

// O(n) Linear Time;

console.log(maxSum([4, 6, -3, 5, -2, 1]));
console.log(maxSum([1,14, 15, -20, 55, -20, 3]));

function maxSum2(array){
    let max = 0 ; 
    let sum = 0 ;
    for(let i = 0 ; i < array.length ; i++){
        sum = array[i];
        for(let j = i + 1; j < array.length ; j++){
            sum += array[j];
            if(sum > max){
                max = sum;
            }
        }
    }
    return max;
}
// O(n^2) Polynomial time

console.log(maxSum2([4, 6, -3, 5, -2, 1]));
console.log(maxSum2([1,14, 15, -20, 55, -20, 3]));

function merge(array1, array2){
    let newArray = [];

    newArray = array1.concat(array2);
    newArray = newArray.sort((a,b) => a - b);

    return newArray;
}

console.log(merge([1,3,6,8,11], [2,3,5,8,9,10, -2]));

// O(n) Linear Time

function removeCharacter(string, word){
    let newString = '';
    let checked = true;
    for(let i = 0 ;  i < string.length ; i++){
        checked = true;
        for(let j = 0 ; j < word.length ; j++){
            if(string[i] === word[j]){
                checked = false;
            }
        }
        if(checked){
            newString += string[i];
        }
    }
    return newString;
}


console.log(removeCharacter('Battle of the Vowels: Hawaii vs Grozny', 'aeiou'));
// O(n^2) Polynomial time

function products(array){
    let newArray = [];

    for(let i =0 ; i < array.length ; i++){
        let multiply = 1;
        for(let j = 0 ; j < array.length ; j++){
            if(i !== j){
                multiply *= array[j]
            }
        }
        newArray.push(multiply);
    }
    return newArray;
}

console.log(products([1,3,9,4]));

// O(n^2) Polynomial time

function stringRotation(string1, string2){
    let rotation = string1 + string1;

    return rotation.includes(string2);
}

console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('amazon', 'azonam'));

// O(n) linear time;