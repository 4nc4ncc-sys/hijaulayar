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

document.addEventListener("DOMContentLoaded", function() {
  const blurText = document.querySelector(".blur-text");

  // kasih delay 1 detik biar keliatan animasi masuk
  setTimeout(() => {
    blurText.classList.add("active");
  }, 2000);
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


