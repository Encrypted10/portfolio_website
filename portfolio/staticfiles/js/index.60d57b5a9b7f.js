// navbar
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});


// progress bar below nav 
window.addEventListener('scroll', function() {
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgressBar.style.width = scrollPercent + "%";
});

//  skills
document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".progress-ring__circle");

  // Function to run animation on all circles
  function animateCircles() {
    circles.forEach((circle) => {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const percent = circle.dataset.percent;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;

      const offset = circumference - (percent / 100) * circumference;

      // Animate the strokeDashoffset after a delay
      setTimeout(() => {
        circle.style.strokeDashoffset = offset;
      }, 300);
    });
  }
  
  // Intersection observer callback for triggering animation
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCircles();        // Start animation
        observer.disconnect();   // Stop observing after animation triggers
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of target is visible

  // Observe a parent container of the progress rings
  const skillsSection = document.getElementById("skills");  // Replace with your section's actual id
  if (skillsSection) observer.observe(skillsSection);
});






// certificates big screen

function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
  }
  function closeModal(event) {
    if(event) event.stopPropagation();
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }


// certificate card

const slider = document.querySelector('.certificate-grid');
const slides = Array.from(document.querySelectorAll('.certificate-card'));
const clonesCount = 3;

// Clone first 3 cards and append to slider
for (let i = 0; i < clonesCount; i++) {
  const clone = slides[i].cloneNode(true);
  slider.appendChild(clone);
}

let slideIndex = 0;
let autoplayInterval;

function cardWidth() {
  if (window.innerWidth <= 400) {
    return slider.clientWidth;
  }
  if (window.innerWidth <= 900) {
    return slider.clientWidth / 2 + 10;
  }
  return slider.clientWidth / 3 + 13.33;
}

function slideNext() {
  slideIndex++;
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(${-slideIndex * cardWidth() + 40}px)`;

  // When reaching clone slides, reset without animation
  if (slideIndex === slides.length) {
    setTimeout(() => {
      slider.style.transition = 'none';
      slideIndex = 0;
      slider.style.transform = `translateX(40px)`; // Offset for first slide
    }, 500); // transition duration
  }
}

function startAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(slideNext, 3000);
}


window.addEventListener('resize', () => {
  slider.style.transition = 'none';
  slider.style.transform = 'translateX(0)';
  slideIndex = 0;
  setTimeout(() => {
    slider.style.transition = 'transform 0.5s ease';
    startAutoplay();
  }, 100);
});

// Intersection Observer to start autoplay only when visible
const sliderWrapper = document.querySelector('.certificate-slider-wrapper'); // container around .certificate-grid
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startAutoplay();          // start slider autoplay when visible
      observer.unobserve(sliderWrapper);  // stop observing after first trigger
    }
  });
}, { threshold: 0.5 }); // trigger when 50% visible

if (sliderWrapper) {
  observer.observe(sliderWrapper);
} else {
  // fallback - start autoplay immediately if no wrapper found
  startAutoplay();
}



// for internship on big screen
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');

    document.querySelectorAll('.link-image-trigger').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const imageUrl = this.getAttribute('data-image-url');
            modalImage.src = imageUrl;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', function() {
        modal.style.display = 'none';
        modalImage.src = '';
    });
});