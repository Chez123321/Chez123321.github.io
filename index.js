window.addEventListener("keyup", run)
var text = document.getElementById("text")
var scales = ["D", "G", "C", "F", "Bb"]

function run() {
    text.innerHTML = scales[Math.floor(Math.random() * scales.length)]
}

