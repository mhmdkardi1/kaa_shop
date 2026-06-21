// js/cart.js

// =========================================================================
// 1. INISIALISASI HALAMAN KERANJANG (Murni untuk Halaman cart.html)
// =========================================================================
document.addEventListener("DOMContentLoaded", function() {
    const cartTableBody = document.getElementById('cart-table-body');
    
    // Hanya jalankan rendering jika elemen tabel keranjang ditemukan di halaman aktif (cart.html)
    if (cartTableBody) {
        renderCartTable();
    }

    // Logika pengalihan ke halaman checkout saat tombol bayar diklik
    const checkoutBtn = document.getElementById('btn-proceed-to-checkout') || document.querySelector('.btn-checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
            if (cart.length === 0) {
                alert("Keranjang belanja Anda kosong. Silakan pilih produk terlebih dahulu sebelum membayar.");
                window.location.href = 'shop.html';
                return;
            }

            // Alihkan ke halaman proses pembayaran
            window.location.href = 'checkout.html';
        });
    }
});

// =========================================================================
// 2. FUNGSI UNTUK MERENDER TABEL KERANJANG BELANJA
// =========================================================================
function renderCartTable() {
    const cartTableBody = document.getElementById('cart-table-body');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

    // JIKA KERANJANG KOSONG
    if (cart.length === 0) {
        cartTableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px 0; color: #777;">
                    Keranjang Anda masih kosong. <a href="shop.html" style="color: #ff4757; text-decoration: none; font-weight: bold;">Mulai Belanja</a>
                </td>
            </tr>
        `;
        if (cartTotalPrice) cartTotalPrice.textContent = "Rp 0";
        return;
    }

    // JIKA KERANJANG BERISI ITEM
    cartTableBody.innerHTML = ''; 
    let totalAll = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        totalAll += subtotal;

        const row = `
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 15px 0; display: flex; align-items: center; gap: 15px;">
                    <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                    <span style="font-weight: 600; color: #2f3542;">${item.name}</span>
                </td>
                <td style="padding: 15px 0;">Rp ${item.price.toLocaleString('id-ID')}</td>
                <td style="padding: 15px 0; text-align: center;">${item.quantity}</td>
                <td style="padding: 15px 0; font-weight: 600; color: #ff4757;">Rp ${subtotal.toLocaleString('id-ID')}</td>
                <td style="padding: 15px 0; text-align: center;">
                    <button onclick="removeCartItem(${index})" style="background: none; border: none; color: #ff4757; cursor: pointer; font-size: 16px;">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `;
        cartTableBody.innerHTML += row;
    });

    if (cartTotalPrice) {
        cartTotalPrice.textContent = `Rp ${totalAll.toLocaleString('id-ID')}`;
    }
}

// =========================================================================
// 3. FUNGSI UNTUK MENGHAPUS ITEM DARI KERANJANG (Global Scope)
// =========================================================================
window.removeCartItem = function(index) {
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cart));
    
    renderCartTable();
    updateGlobalCartBadge();
};

function updateGlobalCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) {
        let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
        badge.textContent = totalQty;
    }
}