
window.onscroll = function() {scrollFunction()};

function OpenMenu(){
    var MenuBar = document.getElementById("left-nav")
    MenuBar.style.display == "block" ? MenuBar.style.display = "none" : MenuBar.style.display = "block";
}


function scrollFunction() {
    let element = document.getElementById("navbar");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    element.style.position = "fixed";
    element.style.width = "-webkit-fill-available";
    element.style.background = "lightgray";
    element.style.color = "black";
    element.style.boxShadow="0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)";
    element.style.top = "0"

  } else {
    element.style.top = "0px";
    element.style.background = "none";
    element.style.color = "darkslategrey";
    element.style.boxShadow = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  const ele = document.getElementsByClassName("footer-container");
  console.log("==",ele[0].getElementsByClassName("fa-arrow-up"));

}

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


