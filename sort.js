const arr1 = ["Orange", "Apple", "Grape"];

//sorts alphabetically
const sortedArr1 = arr1.sort();

//custom sort function (return -1 to flip and return 0 to keep order the same)
const sortedArr2 = arr1.sort(function (a, b) {
  console.log(`a: ${a}, b: ${b}`);
  if (a === "Grape") {
    return -1;
  }
  return 0;
});

console.log(sortedArr1);
