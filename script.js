// Navigasi Mobile (Burger Menu) - Sederhana
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    
    // Animasi Burger (Opsional)
    burger.classList.toggle('toggle');
});

// Smooth Scrolling ditangani oleh CSS 'scroll-behavior: smooth'
// Menambahkan efek alert saat formulir dikirim
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim (ini hanya simulasi).');
    this.reset();
});

// Efek transparan pada navbar saat scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#1a252f';
    } else {
        header.style.background = '#2c3e50';
    }
});