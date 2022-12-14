const input = document.querySelector(".input");
const nums = document.querySelectorAll(".num");
const operation = document.querySelectorAll(".oper");
const equals = document.querySelector(".equals");
const allBtns = document.querySelectorAll("button");
const output = document.querySelector(".output");

allBtns.forEach((btn) =>
btn.addEventListener("click", function (e) {
    if (btn.id === "clear") return
    value = e.target.textContent;
    if (value === "=") {
      if (input.innerText.includes("+")) {
        let newVal = input.innerText.split("+");
        output.textContent = "";
        output.textContent += operate(
          Number(newVal[0]),
          Number(newVal[1]),
          "+"
        );
        input.textContent = ''
      }
      if (input.innerText.includes("-")) {
        let newVal = input.innerText.split("-");
        output.textContent = "";
        output.textContent += operate(
          Number(newVal[0]),
          Number(newVal[1]),
          "-"
        );
        input.textContent = ''
      }
      if (input.innerText.includes("*")) {
        let newVal = input.innerText.split("*");
        output.textContent = "";
        output.textContent += operate(
          Number(newVal[0]),
          Number(newVal[1]),
          "*"
        );
        input.textContent = ''
      }
      if (input.innerText.includes("/")) {
        let newVal = input.innerText.split("/");
        output.textContent = "";
        output.textContent += operate(
          Number(newVal[0]),
          Number(newVal[1]),
          "/"
        );
        input.textContent = ''
      }
    }
    if (value !== "=") {
      input.innerText += e.target.textContent;
    }
  })
);


let clear = document.getElementById("clear")
  clear.addEventListener("click", () => {
    input.textContent = ""
    output.textContent = 0
})

function operate(num1, num2, operation) {
  if (operation === "+") {
    return add(num1, num2);
  }
  if (operation === "-") {
    return subtract(num1, num2);
  }
  if (operation === "*") {
    return multiply(num1, num2);
  }
  if (operation === "/") {
    return divide(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
