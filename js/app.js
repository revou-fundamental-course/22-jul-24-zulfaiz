const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});


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

// Fungsi untuk mengubah slide dengan tombol
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



document.getElementById('fname').addEventListener('input', function() {
  const name = this.value; // Ambil nilai dari input nama
  const displayName = document.getElementById('display-name'); // Ambil elemen span
  displayName.textContent = name ? name : 'faizz'; // Update isi span sesuai input, jika kosong tampilkan "Guest"
});



const cloudImages = [
  'assets/awan1.jpg',
  'assets/awan2.jpg',
  'assets/awan3.jpg',
  // Tambahkan lebih banyak gambar awan sesuai kebutuhan
];
function createCloud() {
  const cloud = document.createElement('div');
  cloud.className = 'cloud';
  
  // Pilih gambar awan secara acak
  const randomImage = cloudImages[Math.floor(Math.random() * cloudImages.length)];
  cloud.style.backgroundImage = `url('${randomImage}')`;

  // Atur lebar dan tinggi awan secara acak
  const width = Math.random() * 300 + 150 + 'px'; // Lebar acak antara 100px - 300px
  const height = Math.random() * 200 + 100 + 'px'; // Tinggi acak antara 50px - 150px
  cloud.style.width = width;
  cloud.style.height = height;

  // Atur posisi vertikal acak dan mulai dari luar layar
  cloud.style.position = 'absolute';
  cloud.style.top = Math.random() * 100 + 'px'; // Posisi vertikal acak
  cloud.style.left = '-200px'; // Mulai dari luar layar di sebelah kiri

  // Atur kecepatan acak untuk animasi
  const animationDuration = Math.random() * 10 + 15; // Durasi animasi acak antara 15 detik hingga 25 detik
  cloud.style.animation = 'moveCloud ' + animationDuration + 's linear forwards'; // Kecepatan acak

  // Tambahkan awan ke dalam elemen latar belakang
  document.querySelector('.background').appendChild(cloud);

  // Hapus awan setelah animasi selesai untuk menghindari penumpukan
  cloud.addEventListener('animationend', () => {
      cloud.remove();
  });
}

// Interval untuk membuat awan baru setiap 2 detik
setInterval(createCloud, 2000);