let lastScrollTop = 0;
const siteHeader = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Jika scroll ke bawah dan sudah melewatin batas atas (misal > 100px)
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    siteHeader.classList.add('site-header-hidden');
  } else {
    // Jika scroll ke atas
    siteHeader.classList.remove('site-header-hidden');
  }

  // Menjaga nilai agar tidak minus saat bounce scroll (seperti di iOS)
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


document.addEventListener("DOMContentLoaded", function() {
  const blurPart = document.querySelector(".blur-text");

  blurPart.addEventListener("mouseenter", function() {
    blurPart.style.filter = "blur(0)";
  });

  blurPart.addEventListener("mouseleave", function() {
    blurPart.style.filter = "blur(8px)";
  });
})

// Kalau mau efek flip manual via klik, bukan hover:
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.card-inner').classList.toggle('flipped');
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

