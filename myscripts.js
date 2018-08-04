var slideIndex = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
var pageIndex = 0;

function setPage(page) {
  var i;
  var pages = document.getElementsByClassName("myPages");
  console.log(slideIndex);
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none"; 
  }
  pages[page].style.display = "block";
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  pageIndex = page;
  sessionStorage.setItem("currentPage", pageIndex);
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



/** dropdown functions */
window.onmouseover = function(event) {
  if (!event.target.matches('.dropbtn')) {
    if(!event.target.matches('.droplink')){
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
};

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function setDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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
};