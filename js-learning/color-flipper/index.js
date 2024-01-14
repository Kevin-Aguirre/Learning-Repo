
let num = document.getElementById("number")

let increaseBtn = document.getElementById("increase")
let decreaseBtn = document.getElementById("decrease")
let resetBtn = document.getElementById("reset")


increaseBtn.addEventListener("click", () => {
    num.innerText = parseInt(num.innerText, 10) + 1
})

decreaseBtn.addEventListener("click", () => {
    num.innerText = parseInt(num.innerText, 10) - 1
})

resetBtn.addEventListener("click", () => {
    num.innerText = 0
})