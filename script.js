// JavaScript untuk animasi fade-in saat scroll
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section');

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Optional: unobserve setelah animasi berjalan sekali
                        // observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1 // Muncul saat 10% section terlihat
            });

            sections.forEach(section => {
                observer.observe(section);
            });
        });

        // --- KODE BARU UNTUK EFEK TYPING ---
            const professionElement = document.querySelector('.profession');
            const professions = [
                "Web Developer",
                "Competitive Programming Enthusiast",
                "Informatics Student at ITS",
            ];
            let professionIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            const typeSpeed = 130; // Kecepatan mengetik (ms)
            const eraseSpeed = 60; // Kecepatan menghapus (ms)
            const delay = 1000; // Jeda setelah selesai mengetik satu kata

            function typeWriter() {
                const currentWord = professions[professionIndex];

                if (isDeleting) {
                    // Proses menghapus
                    professionElement.textContent = currentWord.substring(0, charIndex - 1) || '\u00A0';
                    charIndex--;
                } else {
                    // Proses mengetik
                    professionElement.textContent = currentWord.substring(0, charIndex + 1);
                    charIndex++;
                }

                // Jika kata selesai diketik
                if (!isDeleting && charIndex === currentWord.length) {
                    isDeleting = true;
                    setTimeout(typeWriter, delay); // Jeda sebelum mulai menghapus
                } 
                // Jika kata selesai dihapus
                else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    professionIndex = (professionIndex + 1) % professions.length; // Pindah ke kata berikutnya
                    setTimeout(typeWriter, typeSpeed);

                } 
                // Lanjutkan mengetik atau menghapus
                else {
                    const currentSpeed = isDeleting ? eraseSpeed : typeSpeed;
                    setTimeout(typeWriter, currentSpeed);
                }
            }
            
        // Memulai efek setelah halaman dimuat
        typeWriter();