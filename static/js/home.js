// var i = 0;
// var txt = 'Unlock Your Potential: Explore Engineering Colleges and Exams with Ease';
// // var speed = 70;

// function typeWriter() {
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 10;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = `.typewrite {
border-right: .1em solid currentColor;
padding: 0 3px;
animation: blink-caret 600ms step-end infinite
}

@keyframes blink-caret {
from, to { border-color: transparent }
50% { border-color: currentColor }
}`;
  document.body.appendChild(css);
};

//Read more
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//added for onload redless option
window.addEventListener("DOMContentLoaded", function () {
  var mediaQuery = window.matchMedia("(max-width: 767px)");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  function handleScreenChange(e) {
    if (e.matches) {
      moreText.style.display = "none";
      btnText.innerHTML = "Read more";
    } else {
      moreText.style.display = "inline";
      btnText.style.display = "none";
    }
  }

  mediaQuery.addListener(handleScreenChange);
  handleScreenChange(mediaQuery);
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the necessary elements
  const dropLeft1 = document.getElementById("drop-left1");
  const dropLeft2 = document.getElementById("drop-left2");
  const secondDrop = document.getElementById("second-drop");
  const hiddenTableContent = document.querySelector(
    ".hidden-table .second-subdrop"
  ).innerHTML;

  // Event handler for hover on dropLeft1
  dropLeft1.addEventListener("mouseover", () => {
    secondDrop.innerHTML = hiddenTableContent;
  });

  // Event handler for hover on dropLeft2
  dropLeft2.addEventListener("mouseover", () => {
    secondDrop.innerHTML = "";
  });
});

//including footer
$(function () {
  $("#footer").load("footer.html");
});

//including Newsletter
$(function () {
  $("#newsletter").load("newsletter.html");
});

//including Blog
$(function () {
  $("#blog").load("blog.html");
});

//including Blog
$(function () {
  $("#user-review").load("user-review.html");
});
