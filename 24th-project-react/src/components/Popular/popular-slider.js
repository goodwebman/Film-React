// const slider = document.querySelector('.slider');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const counter = document.querySelector('.counter');
// let currentIndex = 0;

// function updateCounter() {
//   counter.textContent = `${currentIndex + 1} / ${slider.children.length}`;
// }

// prevBtn.addEventListener('click', () => {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = slider.children.length - 1;
//   }
//   slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//   updateCounter();
// });

// nextBtn.addEventListener('click', () => {
//   currentIndex++;
//   if (currentIndex >= slider.children.length) {
//     currentIndex = 0;
//   }
//   slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//   updateCounter();
// });

// updateCounter();