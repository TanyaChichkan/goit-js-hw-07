const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
inputRef.addEventListener("input", handlerFontChange);

function handlerFontChange(event) {
  textRef.style.fontSize = event.target.value + "px";
}
