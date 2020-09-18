// const itemsCountRef = document.querySelectorAll('.item');
// console.log(`В списке ${itemsCountRef.length} категории.`);

// const titleRef = document.querySelectorAll('.item');
// console.log(titleRef);

// for (let i = 0; i < titleRef.length; i += 1) {
//   console.log('Категория:', titleRef[i].firstElementChild.textContent);
//   console.log('Количество элементов:', titleRef[i].children[1].children.length);
// }

for (let i = 0; i < document.body.firstElementChild.children.length; i += 1) {
  console.log(`Категория:
    ${document.body.firstElementChild.children[i].firstElementChild.textContent}`);
}

for (let i = 0; i < document.body.firstElementChild.children.length; i += 1) {
  console.log(
    `Количество элементов:${document.body.firstElementChild.children[i].children[1].children.length}`
  );
}
