// var btn = document.getElementById("btn");
// var nav = document.getElementById("nav");

// btn.onclick = function() {
  
//     if (nav.style.display == 'none') {
//       nav.style.display = 'block';
//     } else {
//       nav.style.display = 'none';
//     }
//   }

// Navbar disappear on scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation-bar").style.top = "0";
  } else {
    document.getElementById("navigation-bar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
