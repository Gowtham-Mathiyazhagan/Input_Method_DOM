const input = document.getElementById("input-text");
const err = document.getElementById("error")
input.addEventListener("keydown", fun);
function fun(event) {
    const key = event.key
    console.log(key)
    if (isNaN(key)) {
        event.preventDefault();
        err.textContent = "only you can write number"
    }
    else {
        err.textContent = ""
    }
}