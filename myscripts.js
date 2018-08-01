var slideIndex = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
// showSlides();
/*
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}*/

function setPage(page) {
  var i;
  var pages = document.getElementsByClassName("myPages");
  console.log(slideIndex);
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none"; 
  }
  pages[page].style.display = "block";

};

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 3000); // Change image every 2 seconds
};

function showSlides2() {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none"; 
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1} 
  slides2[slideIndex2-1].style.display = "block"; 
  setTimeout(showSlides2, 3000); // Change image every 2 seconds
};

function showSlides3() {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none"; 
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1} 
  slides3[slideIndex3-1].style.display = "block"; 
  setTimeout(showSlides3, 3000); // Change image every 2 seconds
};

function setDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onmouseover = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// showSlides();
// showSlides2();
// showSlides3();

// function facebook(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v2.5";
//   fjs.parentNode.insertBefore(js, fjs);
// };



// $(document).ready(function(e) {
//     var width = "+=" + $(document).width();
//     $("#animate").animate({
//     left: width
//   }, 5000, function() {
//     // Animation complete.
//   });
// });