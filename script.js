const navbar = document.querySelector(".navbar");
// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(max-width: 550px)");
//Get the button
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = () => {
  const fixedNav = navbar.offsetTop;
  if (window.pageYOffset > fixedNav) {
    navbar.classList.add("bg-dark");
    navbar.classList.add("navbar-dark");
    navbar.classList.add("fixed-top");
    navbar.classList.add("navbar-light");
    // mybutton.style.display = "block";
    mybutton.classList.add("d-block");
  } else {
    navbar.classList.remove("bg-dark");
    navbar.classList.remove("navbar-dark");
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("fixed-top");
    // mybutton.style.display = "none";
    mybutton.classList.remove("d-block");
  }
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
