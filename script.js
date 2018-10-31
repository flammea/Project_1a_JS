const button = document.querySelector("button");

let number = 1;

const addElement = function () {
    const div = document.createElement("div");
    div.textContent = number;
    if (number % 5 === 0) {
        div.classList.add("circle")
    }
    document.body.appendChild(div);
    number++;
}

button.addEventListener("click", addElement);