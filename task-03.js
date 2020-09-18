const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const createImage = (image) => {
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-item");
//   const picItem = document.createElement("img");
//   picItem.setAttribute("src", image.url);
//   picItem.setAttribute("alt", image.alt);
//   picItem.classList.add("image-card");
//   listItem.appendChild(picItem);
//   return listItem;
// };
// console.log(createImage(images[2]));

// const imageTemplates = images.map((image) => createImage(image));
// console.log(imageTemplates);

// const productsListRef = document.querySelector("#gallery");
// productsListRef.append(...imageTemplates);
// console.log(productsListRef);

for (let elem of images) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.setAttribute("src", elem.url);
  img.setAttribute("alt", elem.alt);
  li.className = "list-item";
  img.className = "list-pic";
  li.appendChild(img);
  const list = document.querySelector("#gallery");
  list.className = "list";
  list.insertAdjacentElement("afterbegin", li);
}
