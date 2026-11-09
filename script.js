// Task no 1
let higlight = document.querySelector("#higlight");
let addHighlight = document.querySelector("#addhighlight");
addHighlight.addEventListener("click", function () {
  higlight.classList.add("para");
});

// Task no 2
let removeHighlight = document.getElementById("removhighlight");
removeHighlight.addEventListener("click", function () {
  higlight.classList.remove("para");
});

// Task no 3
let toggleHighlight = document.getElementById("toggle");
toggleHighlight.addEventListener("click", function () {
  higlight.classList.toggle("para");
});

// Task no 4
let checkClass = document.getElementById("check");
checkClass.addEventListener("click", function () {
  if (higlight.classList.contains("para")) {
    alert("Class Exist");
  } else {
    alert("Class doesn't Exist");
  }
});

// Task no 5
let activeBtn = document.querySelector("#activebtn");
activeBtn.addEventListener("click", function () {
  activeBtn.classList.add("active-btn");
});

// Task no 6
let mode = document.querySelector("#darkmode");
mode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode-on");
});
