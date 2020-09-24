//logo
window.addEventListener("DOMContentLoaded", function(e) {

    var logoslide = document.getElementById("logoslide");
    var fadeComplete = function(e) { logoslide.appendChild(arr[0]); };
    var arr = logoslide.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }
  }, false);

// leftright slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


//responsive navbar 
function myFunc() {
  var x = document.getElementById("navbarhide");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


//auto slide image

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 3 seconds
}


//hide navbar while scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarhide").style.top = "0";
  } else {
    document.getElementById("navbarhide").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


//gallery click

function galleryimage(imgs) {
  var expandedview = document.getElementById("expandedview");
  var imgText = document.getElementById("imgtext");
  expandedview.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandedview.parentElement.style.display = "block";
}
