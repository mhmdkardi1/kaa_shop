// js/main.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Kaa_Shop App Berhasil Dimuat...");
    
    checkUserSession();
    updateCartBadge();
    
    // Inisialisasi fitur filter
    initCategoryFilter();
});

// --- Fungsi untuk mengecek apakah user sudah login ---
function checkUserSession() {
    const token = localStorage.getItem('userToken');
    const userIcon = document.querySelector('.fa-user');
    
    if (token) {
        console.log("User terdeteksi sudah login.");
        if(userIcon) {
            userIcon.parentElement.setAttribute('href', 'profile.html');
            userIcon.parentElement.setAttribute('title', 'Profil Saya');
        }
    } else {
        console.log("User belum login (Tamu).");
    }
}

// --- Fungsi pembantu untuk mengupdate angka indikator keranjang ---
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCountElement = document.getElementById('cart-count');
    
    if (cartCountElement) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

// --- Fungsi Filter Kategori (Disederhanakan & Aman) ---
function initCategoryFilter() {
    const filterDropdown = document.getElementById('category-filter');

    if (filterDropdown) {
        filterDropdown.addEventListener('change', function() {
            const selectedCategory = this.value;
            const productCards = document.querySelectorAll('.product-card');

            productCards.forEach(card => {
                // Mengambil kategori dari atribut data-category yang ada di HTML card
                const productCategory = card.getAttribute('data-category');

                // Jika "all" dipilih, tampilkan semua. Jika kategori cocok, tampilkan.
                if (selectedCategory === 'all' || productCategory === selectedCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Daftarkan fungsi ke objek global
window.updateCartBadge = updateCartBadge;