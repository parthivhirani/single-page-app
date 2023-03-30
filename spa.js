location.href = "#";

function home() {
    // METHOD-1
    // location.href = "#name";

    // METHOD-2
    // window.scrollTo(0, 0);

    // METHOD-3
    document.getElementById("name").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });

    // METHOD-4
    // window.scrollTo(0, findPosition(document.getElementById("name")));

    // METHOD-5
    // window.scroll(0, findPosition(document.getElementById("name")));

    // function findPosition(obj) {
    //   var currenttop = 0;
    //   if (obj.offsetParent) {
    //     do {
    //       currenttop += obj.offsetTop;
    //     } while ((obj = obj.offsetParent));
    //     return [currenttop];
    //   }
    // }
}

function aboutus() {
    // METHOD-1
    // location.href = "#aboutus";

    // METHOD-2
    // window.scrollTo(0, 1700);

    // METHOD-3
    document.getElementById("aboutus").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });

    // METHOD-4
    // window.scrollTo(0, findPosition(document.getElementById("aboutus")));

    // METHOD-5
    // window.scroll(0, findPosition(document.getElementById("aboutus")));

    // function findPosition(obj) {
    //   var currenttop = 0;
    //   if (obj.offsetParent) {
    //     do {
    //       currenttop += obj.offsetTop;
    //     } while ((obj = obj.offsetParent));
    //     return [currenttop];
    //   }
    // }
}

function images1() {
    // METHOD-1
    // location.href = "#images1";

    // METHOD-2
    // window.scrollTo(0, 2050);

    // METHOD-3
    document.getElementById("images1").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });

    // METHOD-4
    // window.scrollTo(0, findPosition(document.getElementById("images1")));

    // METHOD-5
    // window.scroll(0, findPosition(document.getElementById("images1")));

    // function findPosition(obj) {
    //   var currenttop = 0;
    //   if (obj.offsetParent) {
    //     do {
    //       currenttop += obj.offsetTop;
    //     } while ((obj = obj.offsetParent));
    //     return [currenttop];
    //   }
    // }
}

function services() {
    // METHOD-1
    // location.href = "#services";

    // METHOD-2
    // window.scrollTo(0, 3000);

    // METHOD-3
    document.getElementById("services").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });

    // METHOD-4
    // window.scrollTo(0, findPosition(document.getElementById("services")));

    // METHOD-5
    // window.scroll(0, findPosition(document.getElementById("services")));

    // function findPosition(obj) {
    //   var currenttop = 0;
    //   if (obj.offsetParent) {
    //     do {
    //       currenttop += obj.offsetTop;
    //     } while ((obj = obj.offsetParent));
    //     return [currenttop];
    //   }
    // }
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
