location.href = "#";

function home() {
    location.href = "#";
}

function aboutus() {
    location.href = "#aboutus";
}

function images1() {
    location.href = "#images1";
}

function services() {
    location.href = "#services";
}

// SLIDING IMAGES
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
