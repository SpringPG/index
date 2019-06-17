var wrap = document.querySelector(".wrap");
var next = document.querySelector(".prev2");
var prev = document.querySelector(".prev1");


var index = 0;
var dots = document.getElementsByClassName("dot");
// console.log(dots)
function showCurrentDot() {
    for (var i = 0, len = dots.length; i < len; i++) {
        dots[i].style.backgroundColor = "#fff";
        
    }
    dots[index].style.backgroundColor = "#f10215";
    
}

//圆点随轮播滚动
for (var i = 0, len = dots.length; i < len; i++) {
    (function (i) {
        dots[i].onclick = function () {
            var dis = index - i;
            if (index == 7 && parseInt(wrap.style.left) !== -5310) {
                dis = dis - 8;
            }
            //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
            if (index == 0 && parseInt(wrap.style.left) !== -590) {
                dis = 5 + dis;
            }
            wrap.style.left = (parseInt(wrap.style.left) + dis * 590) + "px";
            index = i;
            showCurrentDot();
        }
    })(i);
}

next.onclick = function () {
    next_pic();
}
prev.onclick = function () {
    prev_pic();
}
function next_pic() {
    var newLeft;
    if (wrap.style.left === "-5310px") {
        newLeft = -1180;
    } else {
        newLeft = parseInt(wrap.style.left) - 590;
    }
    wrap.style.left = newLeft + "px";

    index++;
    console.log(index)
    if (index > 7) {
        index = 0;
    }
    showCurrentDot();
}
function prev_pic() {
    var newLeft;
    if (wrap.style.left === "0px") {
        newLeft = -2360;
    } else {
        newLeft = parseInt(wrap.style.left) + 590;
    }
    wrap.style.left = newLeft + "px";

    index--;
    console.log(index)
    if (index < 0) {
        index = 7;
    }
    showCurrentDot();
}


var timer = null;
function autoPlay() {
    timer = setInterval(function () {
        next_pic();
    }, 2000);
}
autoPlay();

var container = document.querySelector(".container");
container.onmouseenter = function () {
    clearInterval(timer);
}
container.onmouseleave = function () {
    autoPlay();
}

