
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  currentIndex = index;
  slidesContainer.style.transform = `translateX(-${100 * currentIndex}vw)`;
  updateDots();
}
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(currentIndex);
});

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}


setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}, 6000);


document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
  }
});

const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

hamburger.addEventListener('click', () => {
  mobileMenuOverlay.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenuOverlay.classList.remove('active');
});

const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('active');
  });
});



