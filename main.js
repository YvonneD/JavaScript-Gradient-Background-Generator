var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");
var auto = document.getElementById("auto");
var stop = document.getElementById("stop");

function setGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background;
}

function randomColor() {
    var newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    return newColor;
}

function randomGradient() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}


color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
random.addEventListener("click", randomGradient)

auto.addEventListener("click", function() {
    interval = setInterval(randomGradient, 2000);
    stop.onmousedown = function() {
    clearInterval(interval)
}
})
