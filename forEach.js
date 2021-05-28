let arr1 = ["Orange", "Apple", "Grape"];

let objArr = [
  {
    type: "Fruit",
    name: "banana",
  },
  {
    type: "Veggie",
    name: "squash",
  },
];

// for (item of arr1) {
//   console.log(item);
// }

arr1.forEach((item) => {
  // console.log(item);
});

const arr3 = arr1.map((item) => {
  return `Fruit - ${item}`;
});

const arr4 = objArr.map((item) => {
  console.log(item);
  if (item.type === `Fruit`) {
    return `Fruit - ${item.name}`;
  } else if (item.type === `Veggie`) {
    return `Veggie - ${item.name}`;
  }
});
console.log(arr4);

console.log(arr3);

//adds to end of array
arr1.push("Quinn");
//removes item from array at index
arr1.splice(1, 1);

//remove item from end of array
arr1.pop();

console.log(arr1);
