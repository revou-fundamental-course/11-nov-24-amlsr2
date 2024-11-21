// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});

// toogle class active untuk hamburger menu
const navbarNav = document.querySelector(".container");

// Click handler for package links
const packages = document.querySelectorAll('.package-list a');
packages.forEach((packageLink) => {
  packageLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    alert(`You clicked on: ${packageLink.querySelector('h3').innerText}. Sorry this package not avaible right now`);
  });
});

// punya button call us
document.getElementById("scrollToHome").addEventListener("click", function () {
  // Tampilkan alert dengan opsi Yes dan No
  const userChoice = confirm(
    "Layanan telepon sedang tidak bisa digunakan. Apakah anda ingin layanan melalui email?"
  );

  if (userChoice) {
    // Jika user memilih Yes, scroll ke Home
    const homeSection = document.getElementById("home");
    homeSection.scrollIntoView({ behavior: "smooth" });
  } else {
    // Jika user memilih No, tetap di halaman Call Us
    alert("Terima kasih telah mengunjungi website kami.");
  }
});


// Pilih semua tautan navigasi
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Cegah perilaku default link

    // Ambil nilai dari data-target
    const targetId = this.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll ke elemen target
      targetElement.scrollIntoView({
        behavior: 'smooth', // Animasi scroll
        block: 'start' // Mulai dari awal elemen
      });
    }
  });
});
