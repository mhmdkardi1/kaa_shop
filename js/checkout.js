// js/checkout.js

document.addEventListener("DOMContentLoaded", function() {
    // 1. Cek status login user (Ambil data dari session jika ada)
    const sessionUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (sessionUser && document.getElementById('shipping-name')) {
        document.getElementById('shipping-name').value = sessionUser.name;
    }

    // 2. KUNCI UTAMA: Hitung ringkasan harga belanjaan
    calculateCheckoutSummary();

    // 3. Tangani event submit form order/pemesanan
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleOrderSubmit);
    }
});

// Fungsi untuk menghitung total belanjaan dari keranjang secara aman
function calculateCheckoutSummary() {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const subtotalElement = document.getElementById('checkout-subtotal');
    const grandTotalElement = document.getElementById('checkout-total-grand');

    // Jika dipaksa masuk ke checkout padahal keranjang kosong
    if (cart.length === 0) {
        alert("Keranjang belanja Anda kosong. Silakan pilih produk terlebih dahulu.");
        window.location.href = 'shop.html';
        return;
    }

    let subtotal = 0;

    // Iterasi hitung subtotal dengan fitur auto-cleaning tipe data harga
    cart.forEach(item => {
        // Ambil harga mentah dari localStorage
        let rawPrice = item.price;
        
        // Jika harganya bertipe string (misal: "Rp 450.000"), bersihkan menjadi angka murni
        if (typeof rawPrice === 'string') {
            rawPrice = parseInt(rawPrice.replace(/[^0-9]/g, '')) || 0;
        } else {
            rawPrice = parseInt(rawPrice) || 0;
        }

        const quantity = parseInt(item.quantity) || 1;
        subtotal += (rawPrice * quantity);
    });

    let shippingFee = 20000; // Tarif flat ongkos kirim simulasi
    let grandTotal = subtotal + shippingFee;

    // Tampilkan hasil kalkulasi ke elemen HTML halaman checkout.html
    if (subtotalElement) {
        subtotalElement.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
    }
    if (grandTotalElement) {
        grandTotalElement.textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
    }
}

// Fungsi mengeksekusi pembuatan pesanan saat tombol konfirmasi diklik
function handleOrderSubmit(e) {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (cart.length === 0) {
        alert("Tidak ada item untuk diproses.");
        return;
    }

    const paymentMethodElement = document.querySelector('input[name="payment-method"]:checked');
    const paymentMethod = paymentMethodElement ? paymentMethodElement.value : 'bank_transfer';
    
    // Hitung ulang total akhir secara aman untuk database orderHistory
    let subtotal = 0;
    cart.forEach(item => {
        let rawPrice = item.price;
        if (typeof rawPrice === 'string') {
            rawPrice = parseInt(rawPrice.replace(/[^0-9]/g, '')) || 0;
        } else {
            rawPrice = parseInt(rawPrice) || 0;
        }
        subtotal += (rawPrice * (parseInt(item.quantity) || 1));
    });
    
    let shippingFee = 20000;
    let grandTotal = subtotal + shippingFee;

    const customerName = document.getElementById('shipping-name').value;
    const customerPhone = document.getElementById('shipping-phone').value;
    const shippingAddress = document.getElementById('shipping-address').value;

    // Generate ID Pesanan acak unik (Contoh: ORD-123456)
    const randomOrderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);

    // Format tanggal hari ini
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const todayDate = new Date().toLocaleDateString('id-ID', options);

    // Buat objek data transaksi baru
    const newOrder = {
        id: randomOrderId,
        date: todayDate,
        total: grandTotal,
        status: "Sukses Belanja",
        details: {
            name: customerName,
            phone: customerPhone,
            address: shippingAddress,
            payment: paymentMethod === 'bank_transfer' ? 'Transfer Bank' : 'COD'
        }
    };

    // Simpan transaksi ke riwayat pesanan (localStorage)
    let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    orderHistory.unshift(newOrder); 
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

    // Bersihkan keranjang belanja setelah checkout berhasil
    localStorage.removeItem('cartItems');

    alert(`Pesanan ${randomOrderId} Berhasil Dibuat!`);
    
    // Alihkan langsung ke halaman akun saya (profile.html) untuk melihat riwayat belanja
    window.location.href = 'profile.html';
}