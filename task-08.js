const refs = {
  input: document.querySelector("input"),
  render: document.querySelector('button[data-action="render"]'),
  destroy: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
};

refs.render.addEventListener("click", createBoxes);
refs.destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    let width = 30 + i * 10;
    let heiht = width;
    div.style.width = `${width}px`;
    div.style.height = `${width}px`;
    div.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}`;
    refs.boxes.append(div);
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
