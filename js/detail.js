// js/detail.js

document.addEventListener("DOMContentLoaded", function() {
    // KUNCI AMAN 1: Cek nama file halaman aktif saat ini
    const currentFilename = window.location.pathname.split('/').pop();
    
    // Jika skrip ini tidak sengaja terpanggil di cart.html, hentikan eksekusi segera!
    if (currentFilename !== "product-detail.html") {
        return; 
    }

    // 1. Ambil ID Produk dari parameter URL (?id=x)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // 2. KUNCI AMAN 2: Gunakan loose equality (==) agar Tipe Data String "1" dan Angka 1 dianggap SAMA
    const product = PRODUCTS_DATA.find(p => p.id == productId);

    // Proteksi jika ID tidak valid / tidak ditemukan di products-data.js
    if (!product) {
        alert("Produk tidak ditemukan!");
        window.location.href = "shop.html";
        return;
    }

    // 3. Pasang data produk ke elemen HTML secara otomatis
    const detailImg = document.getElementById('detail-img');
    const detailTitle = document.getElementById('detail-title');
    const detailPrice = document.getElementById('detail-price');
    const detailDesc = document.getElementById('detail-desc');

    if (detailImg) {
        detailImg.src = product.image;
        detailImg.alt = product.name;
    }
    if (detailTitle) detailTitle.textContent = product.name;
    if (detailPrice) detailPrice.textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
    if (detailDesc) detailDesc.textContent = product.description;

    // 4. Logika Pengatur Tombol Kuantitas (Plus Minus)
    const qtyInput = document.getElementById('input-qty');
    const btnMinus = document.getElementById('btn-minus');
    const btnPlus = document.getElementById('btn-plus');

    if (btnMinus && qtyInput) {
        btnMinus.onclick = null; 
        btnMinus.addEventListener('click', function(e) {
            e.preventDefault();
            let currentQty = parseInt(qtyInput.value) || 1;
            if (currentQty > 1) {
                qtyInput.value = currentQty - 1;
            }
        });
    }

    if (btnPlus && qtyInput) {
        btnPlus.onclick = null; 
        btnPlus.addEventListener('click', function(e) {
            e.preventDefault();
            let currentQty = parseInt(qtyInput.value) || 1;
            qtyInput.value = currentQty + 1;
        });
    }

    // 5. Logika Tombol Masukkan Ke Keranjang (Mencegah Double Input)
    const btnAddToCart = document.getElementById('btn-add-to-cart');
    if (btnAddToCart) {
        btnAddToCart.onclick = null; 
        
        btnAddToCart.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation(); 

            const quantity = parseInt(qtyInput.value) || 1;
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            // Gunakan perbandingan longgar (==) saat memeriksa item duplikat
            const existingIndex = cartItems.findIndex(item => item.id == product.id);

            if (existingIndex > -1) {
                cartItems[existingIndex].quantity += quantity;
            } else {
                cartItems.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: quantity
                });
            }

            // Simpan data ke localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Update badge counter di navbar secara real-time
            const badge = document.getElementById('cart-count');
            if (badge) {
                const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);
                badge.textContent = totalQty;
            }

            alert(`Sukses menambahkan ${quantity} item ke keranjang belanja!`);
        });
    }
});