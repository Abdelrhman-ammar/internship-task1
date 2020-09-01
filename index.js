
/* =============================================== start slide show ============================================*/

var slideIndex = 1;
changeSlides(slideIndex);

function plusSlides(index) {
    changeSlides(slideIndex += index);
}

function changeSlides(index) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (index > slides.length) {slideIndex = 1}
    if (index < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function mobileResp(){
    var nav = document.getElementById("mynav");
    if (nav.className === "") {
        nav.className = "responsive";
    } else {
        nav.className = "";
    }
}


/* =============================================== end slide show ============================================*/

function openLightBox() {
    document.getElementById("mylightbox").style.display = "block";
}

function closeLightBox() {
    document.getElementById("mylightbox").style.display = "none";
}

function currentSlide(index) {
    var imges = document.getElementsByClassName("Img");
    console.log(imges[index-1].src);
    var myimg = document.getElementById("light-box-img").src = imges[index-1].src;
}