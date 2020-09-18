const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// const listItemRef = document.createElement("li");
// listItemRef.textContent = "Картошка";
// console.log(listItemRef);

// const listItemRef1 = document.createElement("li");
// listItemRef1.textContent = "Грибы";
// console.log(listItemRef1);

// const listItemRef2 = document.createElement("li");
// listItemRef2.textContent = "Чеснок";
// console.log(listItemRef2);

// const listItemRef3 = document.createElement("li");
// listItemRef3.textContent = "Помидоры";
// console.log(listItemRef3);

// const listItemRef4 = document.createElement("li");
// listItemRef4.textContent = "Зелень";
// console.log(listItemRef4);

// const listItemRef5 = document.createElement("li");
// listItemRef5.textContent = "Приправы";
// console.log(listItemRef5);

// const listRef = document.querySelector("#ingredients");
// listRef.append(
//   listItemRef,
//   listItemRef1,
//   listItemRef2,
//   listItemRef3,
//   listItemRef4,
//   listItemRef5
// );
// console.log(listRef);

// const newList = document.createElement("ul");
// newList.append(
//   listItemRef,
//   listItemRef1,
//   listItemRef2,
//   listItemRef3,
//   listItemRef4,
//   listItemRef5
// );

// console.log(newList);

const createElement = function (arr) {
  const list = document.querySelector("ul");
  for (let item of arr) {
    const listItem1 = document.createElement("li");
    listItem1.innerHTML = item;

    list.append(listItem1);
  }
  console.log(list);
};

createElement(ingredients);
