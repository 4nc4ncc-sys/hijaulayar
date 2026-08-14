const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

toggle.addEventListener('click', () => {
  const isActive = navLinks.classList.toggle('active');
  overlay.classList.toggle('active', isActive);
  toggle.textContent = isActive ? "✖" : "☰";
});

// klik overlay → tutup menu
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
  toggle.textContent = "☰";
});


const blurText = document.querySelector('.blur-text');
blurText.addEventListener('click', () => {
  blurText.classList.toggle('active');
});

// ambil semua flip-box
document.querySelectorAll('.flip-box').forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('flipped'); // toggle class flipped
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-container");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      // toggle aktif/nonaktif
      card.classList.toggle("active");
    });
  });
});


