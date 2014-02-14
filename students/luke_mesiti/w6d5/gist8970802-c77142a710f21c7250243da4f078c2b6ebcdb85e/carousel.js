var carousel = document.getElementById('carousel');
var next = document.getElementById('next');
var previous = document.getElementById('previous');
carousel.style.left = "0px";
var carouselTimer = null;
var globalNewLeft = 0;

carousel.style.marginLeft = 0;

// Slides the images to the left or goes back to the first image if it has reached the end
function toLeft(){
    var oldLeft = parseInt(carousel.style.left);
    var newLeft = oldLeft - 6;
    globalNewLeft = newLeft;
    carousel.style.left = newLeft + "px";
    if(newLeft === -1836){
        carousel.style.left = "0px";
    }
    if((newLeft === -612) || (newLeft === -1224) || (newLeft === -1836)) {
        window.clearInterval(carouselTimer);
        console.log("toLeft: " + newLeft);
    }
    // if newLeft === -1224 need to go far right (0)
}

function toLeftBeginning(){
    var oldLeft = parseInt(carousel.style.left);
    var newLeft = oldLeft - 6;
    carousel.style.left = newLeft + "px";
    if(newLeft === -1224) {
        window.clearInterval(carouselTimer);
    }

}


// Slides the images to the right or goes back to the last image if it has reached the end
function toRight(){
    var oldLeft = parseInt(carousel.style.left);
    var newLeft = oldLeft + 6;
    globalNewLeft = newLeft;
    carousel.style.left = newLeft + "px";
    if(newLeft === 612){
        carousel.style.left = "-1224px";
    }
    if((newLeft === 0) || (newLeft === -612) || (newLeft === 612)) {
        window.clearInterval(carouselTimer);
        console.log("toRight: " + newLeft);
    }
    // if newLeft === 0. need to to far left (-1836)
}

//Hook up the next and previous buttons to call the toLeft and toRight functions

function fadeInPrevious() {
    previous.style.opacity = 1.0;
}

function fadeInNext() {
    next.style.opacity = 1.0;
}

function fadeOutPrevious() {
    previous.style.opacity = 0.5;
}

function fadeOutNext() {
    next.style.opacity = 0.5;
}

function slideLeft(){   
    carouselTimer = window.setInterval(toLeft, 5);
    // window.clearInterval(null);
}

function slideRight(){
    if(globalNewLeft === 0)
        carouselTimer = window.setInterval(toLeftBeginning, 5);
    else
        carouselTimer = window.setInterval(toRight, 5);
    // window.clearInterval(null);
}

next.addEventListener("mouseover", fadeInNext);
next.addEventListener("mouseout", fadeOutNext);

previous.addEventListener("mouseover", fadeInPrevious);
previous.addEventListener("mouseout", fadeOutPrevious);

previous.addEventListener("click", slideLeft);
next.addEventListener("click", slideRight);






