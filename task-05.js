const inputRef = document.querySelector("#name-input");
const nameLabelRef = document.querySelector("#name-output");

inputRef.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  nameLabelRef.textContent = event.target.value;
  if (inputRef.value === "") {
    nameLabelRef.textContent = "Незнакомец";
  }
}
