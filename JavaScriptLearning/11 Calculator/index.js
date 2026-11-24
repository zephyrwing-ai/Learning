const formEl = document.getElementById("form")
const num1 = document.getElementById("num1")
const num2 =document.getElementById("num2")
const resultEl = document.getElementById("result")



formEl.addEventListener("submit", function(e) {
    e.preventDefault();
    const first = Number(num1.value);
    const second = Number(num2.value);
    const sum = first + second;
    resultEl.textContent = `${first} + ${second} = ${sum}`;
})
