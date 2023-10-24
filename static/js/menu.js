const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);
// mainMenu.addEventListener('hover',hover);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.left = "-100%"; // Set initial position to the left of the screen
  setTimeout(function () {
    mainMenu.style.left = "0";
  }, 10); // Added a small delay to ensure proper rendering before applying transition
}

function close() {
  mainMenu.style.left = "-100%";
  setTimeout(function () {
    mainMenu.style.display = "none";
  }, 1000);
}
// adding functioank pages to main page
const collegePre = document.getElementById("college_predictor");
const btnSign = document.getElementById("butn");
const forJee = document.getElementById("child1");
const forNeet = document.getElementById("child2");
document.getElementsByClassName;

// event handler for college predictor button
collegePre.addEventListener("click", () => {
  window.location.href = "/CollegePredictor";
});

// event handler for Signin button
btnSign.addEventListener("click", () => {
  window.location.href = "/login";
});

// event handler for Jee test series page
forJee.addEventListener("click", () => {
  window.location.href = "/test-series/iit";
});
forNeet.addEventListener("click", () => {
  console.log("dfor neet");
  // window.location.href = "https://marg-darshan.com/login";
});
