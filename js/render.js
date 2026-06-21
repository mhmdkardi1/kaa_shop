// js/render.js
function displayProducts() {
    const container = document.getElementById('product-list-grid');
    if (!container) return;

    container.innerHTML = ''; // Hapus isi manual di HTML

    PRODUCTS_DATA.forEach(product => {
        container.innerHTML += `
            <div class="product-card" data-category="${product.category}" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 250px; object-fit: cover;">
                <div style="padding: 20px;">
                    <h3 style="font-size: 18px; margin-bottom: 10px;">${product.name}</h3>
                    <p style="color: #ff4757; font-weight: 700; font-size: 16px;">Rp ${product.price.toLocaleString()}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn" style="display:block; text-align:center; padding: 10px;">Lihat Detail</a>
                </div>
            </div>
        `;
    });
}

// Jalankan saat halaman dimuat
document.addEventListener("DOMContentLoaded", displayProducts);