container.style.height = "255px";

var looper;
var degrees = 0;
var clockwise = true;
var speed = document.querySelector("input[type=range]").value;

document.querySelector("input[type=range]").addEventListener("change", function () { speed = document.querySelector("input[type=range]").value; startuj(); });
document.getElementById("start").addEventListener("click", startuj);
document.getElementById("stop").addEventListener("click", stopiraj);
document.getElementById("left").addEventListener("click", function () { clockwise = false; startuj(); });
document.getElementById("right").addEventListener("click", function () { clockwise = true; startuj(); });


function startuj() {
    clearInterval(looper);
    rotateAnimation(speed);
}

function stopiraj() {
    clearInterval(looper);
}

function rotateAnimation(speed) {

    if (navigator.userAgent.match("Chrome")) {
        img.style.WebkitTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Firefox")) {
        img.style.MozTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("MSIE")) {
        img.style.msTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Opera")) {
        img.style.OTransform = "rotate(" + degrees + "deg)";
    } else {
        img.style.transform = "rotate(" + degrees + "deg)";
    }

    looper = setTimeout(`rotateAnimation(${speed})`, speed);

    if (clockwise) {
        degrees++;
    } else {
        degrees--;
    }

    if (degrees > 359) {
        degrees = 1;
    }

    if (degrees < 0) {
        degrees = 359;
    }
}