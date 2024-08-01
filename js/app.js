// Untuk Navigasi
const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

//  Slideshow Ototmatis
let slideIndex = 0;
showSlides(); // Memanggil fungsi untuk menampilkan slide pertama

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Sembunyikan semua gambar
    }
    
    slideIndex++; // Pindah ke gambar berikutnya
    if (slideIndex > slides.length) { slideIndex = 1 } // Reset jika sudah di gambar terakhir
    
    slides[slideIndex - 1].style.display = "block"; // Tampilkan gambar saat ini

    setTimeout(showSlides, 3000); // Ulangi setiap 3 detik
}

//  slide  tombol
function changeSlide(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("mySlides");
    
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Sembunyikan semua gambar
    }
    
    slides[slideIndex - 1].style.display = "block"; // Tampilkan gambar saat ini
}



// Bagian Form
function updateDisplayName() {
  var nameInput = document.getElementById("name").value;
  var displayName = document.getElementById("name-display"); // Ubah 'display-name' menjadi 'name-display'
  displayName.textContent = nameInput ? nameInput : ''; // Update hanya jika ada input
}

function validateForm() {
  var name = document.forms["message-form"]["name"].value;
  var email = document.forms["message-form"]["email"].value;
  var phone = document.forms["message-form"]["phone"].value;
  var travel = document.forms["message-form"]["travel"].value;
  var subject = document.forms["message-form"]["subject"].value;

  if (name == "" || email == "" || phone == "" || travel == "" || subject == "") {
      alert("All fields must be filled out");
      return false; // Menolak form jika ada yang kosong
  }
  return true; // Mengizinkan submit jika semua field terisi
}