// const textSpanRef = document.querySelector("#value");
// let counterValueRef = Number(textSpanRef.textContent);
// console.log(counterValueRef);

// const increaseVal = document.querySelector('button[data-action="increment"]');
// const decreaseVal = document.querySelector('button[data-action="decrement"]');

// const increment = () => {
//   increaseVal.addEventListener("click", (event) => {
//     console.log((counterValueRef += 1));
//   });
// };

// increment();
// const decrement = () => {
//   decreaseVal.addEventListener("click", (event) => {
//     console.log((counterValueRef -= 1));
//   });
// };

// decrement();

let counterValue = Number(document.querySelector("#value").textContent);
console.log(counterValue);

function decrement() {
  console.log((counterValue = counterValue - 1));
  document.querySelector("#value").innerHTML = counterValue;
}

function increment() {
  console.log((counterValue = counterValue + 1));
  document.querySelector("#value").innerHTML = counterValue;
}

const decBtn = document.querySelector('button[data-action="decrement"]');
decBtn.addEventListener("click", decrement);

const incBtn = document.querySelector('button[data-action="increment"]');
incBtn.addEventListener("click", increment);
