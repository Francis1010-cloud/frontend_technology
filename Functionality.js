
window.onscroll = function() {scrollFunction()};

function OpenMenu(){
    var MenuBar = document.getElementById("left-nav")
    console.log("MenuBar",MenuBar);
    MenuBar.style.display == "block" ? MenuBar.style.display = "none" : MenuBar.style.display = "block";
}


function scrollFunction() {
    document.getElementById("navbar").style.position = "fixed";
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    console.log( document.getElementById("navbar"));
    document.getElementById("navbar").style.top = "10px"; 
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
}