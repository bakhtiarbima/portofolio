// js/script.js

// Contoh: Smooth scrolling untuk tautan navigasi (jika Anda tambahkan menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Anda bisa menambahkan JavaScript lainnya di sini, contoh:
// const sections = document.querySelectorAll('section');
// const options = {
//     threshold: 0.5
// };
// const observer = new IntersectionObserver(function(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('fade-in'); // Tambahkan kelas untuk animasi CSS
//         }
//     });
// }, options);

// sections.forEach(section => {
//     observer.observe(section);
// });