// js/shop.js

// 1. Render semua produk saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('product-list-grid');
    
    if (container) {
        container.innerHTML = PRODUCTS_DATA.map(product => `
            <div class="product-card" data-category="${product.category}" style="background: white; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); padding: 20px;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover;">
                <h3>${product.name}</h3>
                <p>Rp ${product.price.toLocaleString()}</p>
                <a href="product-detail.html?id=${product.id}" class="btn">Lihat Detail</a>
            </div>
        `).join('');
    }
});