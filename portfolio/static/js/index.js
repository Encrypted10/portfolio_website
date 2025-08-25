document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".progress-ring__circle");

  circles.forEach((circle) => {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const percent = circle.dataset.percent;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const offset = circumference - (percent / 100) * circumference;

    setTimeout(() => {
      circle.style.strokeDashoffset = offset;
    }, 300);
  });
});


