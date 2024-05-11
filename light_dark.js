function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var sliderCircle = document.getElementById("slider-circle");
  if (element.classList.contains("dark-mode")) {
    sliderCircle.style.transform = "translateX(30px)";
  } else {
    sliderCircle.style.transform = "translateX(0)";
  }
}
