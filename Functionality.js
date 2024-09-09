
window.onscroll = function() {scrollFunction()};

function OpenMenu(){
    var MenuBar = document.getElementById("left-nav")
    console.log("MenuBar",MenuBar);
    MenuBar.style.display == "block" ? MenuBar.style.display = "none" : MenuBar.style.display = "block";
}


function scrollFunction() {
    let element = document.getElementById("navbar");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    element.style.position = "fixed";
    element.style.width = "-webkit-fill-available";
    element.style.background = "white";
    element.style.color = "black";
    element.style.boxShadow="0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)";

  } else {
    element.style.top = "0px";
    element.style.background = "none";
    element.style.color = "darkslategrey";
    element.style.boxShadow = "0px";
  }
  
}