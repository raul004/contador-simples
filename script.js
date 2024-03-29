const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

let counter = 0;
let intervalId = 0;

const updateValue = () => {
    value.innerHTML = counter;
};

plusButton.addEventListener("mousedown", () => {
    intervalId = setInterval(() => {
        counter += 1;
        updateValue();
    }, 100);
});

minusButton.addEventListener("mousedown", () => {
    intervalId = setInterval(() => {
        counter -= 1;
        updateValue();
    }, 100);
});

resetButton.addEventListener("click", () => {
    counter = 0;
    updateValue();
});

document.addEventListener("mouseup", () => clearInterval(intervalId));