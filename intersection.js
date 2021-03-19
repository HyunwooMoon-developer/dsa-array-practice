function intersection(array1, array2) {
  const mergedArray = array1.concat(array2);
  mergedArray.sort();

  const result = [];
  for (let i = 0; i < mergedArray.length; i++) {
    if (mergedArray[i] === mergedArray[i + 1]) {
      result.push(mergedArray[i]);
      i++;
    }
  }
  return result;
}

// O(n)

console.log(intersection([1, 2, 3], [1, 3, 4, 7]));
console.log(intersection([], [1, 3, 4, 7]));
console.log(intersection([], []));
console.log(intersection([1, 2, 3], [4, 5, 6]));
console.log(intersection([1, 3], [1, 1, 1, 1, 1]));
console.log(intersection([1, 1, 3], [1, 1, 1, 1]));
console.log(intersection([-2, -1, 1, 3], [-1, 3, 6]));
console.log(intersection([1, 2, 2.5], [1, 2.5]));
