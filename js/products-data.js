const PRODUCTS_DATA = [
    // --- BAJU (1-7) ---
    { id: 1, name: "Kaos Oversize Cartoon Lucu", price: 45000, image: "assets/baju.png", category: "Baju", description: "Kaos oversize dengan sablon kartun berkualitas tinggi. Bahan katun combed premium yang adem." },
    { id: 2, name: "AETN - Tshirt Oversize Face Art", price: 38000, image: "assets/baju1.jpg", category: "Baju", description: "T-shirt premium edisi original Face Art dengan potongan oversize modern." },
    { id: 3, name: "kaos oversize tulang rusuk estetik distro pria crew", price: 65000, image: "assets/baju2.jpg", category: "Baju", description: "Atasan lengan panjang berbahan katun lembut, sangat nyaman untuk penggunaan harian." },
    { id: 4, name: "House of Smith Kaos Oversize Pria", price: 75000, image: "assets/baju3.jpg", category: "Baju", description: "Kaos dengan desain vintage look, memberikan kesan retro yang estetik." },
    { id: 5, name: "Almero T-Shirt Oversize Memory exclusive", price: 95000, image: "assets/baju4.jpg", category: "Baju", description: "Polo shirt dengan potongan longgar, kesan semi-formal namun tetap santai." },
    { id: 6, name: "OOTDSUPPLY Oversized Tshirt Future Steel Black", price: 55000, image: "assets/baju5.jpg", category: "Baju", description: "Tanktop atletik yang nyaman untuk olahraga atau cuaca panas." },
    { id: 7, name: "Kalibre T-Shirt Kaos Pria Navy 981035 - KALIBRE", price: 165000, image: "assets/baju7.jpeg", category: "Baju", description: "Hoodie tebal dengan grafis modern, wajib punya untuk style streetwear." },
    { id: 7, name: "OOTDSUPPLY Oversized Chill Out Colorfull", price: 165000, image: "assets/baju6.jpeg", category: "Baju", description: "Hoodie tebal dengan grafis modern, wajib punya untuk style streetwear." },

    // --- CELANA (8-14) ---
    { id: 8, name: "Celana Pendek Kargo Kasual", price: 210000, image: "assets/celana.png", category: "Celana", description: "Celana jeans dengan potongan baggy wide-leg yang sedang tren untuk OOTD." },
    { id: 9, name: "Celana Pendek Kargo Khaki", price: 185000, image: "assets/celana1.png", category: "Celana", description: "Celana kargo dengan banyak saku fungsional untuk aktivitas outdoor." },
    { id: 10, name: "Celana pendek cargo pria bahan fleece hitam ", price: 145000, image: "assets/celana2.png", category: "Celana", description: "Celana chino berbahan katun twill yang fleksibel dan nyaman dipakai." },
    { id: 11, name: "Celana Parast Cargo Pendek Online Terbaik", price: 195000, image: "assets/celana3.png", category: "Celana", description: "Jeans dengan bahan denim kaku namun tetap longgar untuk kenyamanan bergerak." },
    { id: 12, name: "EDC BY ESPRIT STRETCH JEANS", price: 175000, image: "assets/celana4.jpg", category: "Celana", description: "Celana jogger cargo dengan bahan ripstop yang sangat awet dan tahan robek." },
    { id: 13, name: "Celana Pendek Kargo Khaki", price: 110000, image: "assets/celana5.jpeg", category: "Celana", description: "Celana pendek denim dengan warna raw indigo yang ikonik." },
    { id: 14, name: "Celana kargo Celana kain Chino Jeans", price: 210000, image: "assets/celana5.png", category: "Celana", description: "Celana bahan dengan aksen lipatan depan untuk tampilan clean look." },

    // --- SEPATU (15-21) ---
    { id: 15, name: "Chunky Vulcanized Sneakers", price: 280000, image: "assets/sepatu.png", category: "Sepatu", description: "Sneakers dengan sol tebal (chunky) yang membuat penampilanmu semakin stand out." },
    { id: 16, name: "Classic Faux Leather Loafers", price: 250000, image: "assets/sepatu1.webp", category: "Sepatu", description: "Sepatu slip-on formal berbahan kulit sintetis premium." },
    { id: 17, name: "Ergonomic Daily Slides", price: 55000, image: "assets/sepatu2.png", category: "Sepatu", description: "Sandal slop harian dengan bantalan empuk yang mengikuti bentuk kaki." },
    { id: 18, name: "Platform Chelsea Boots", price: 320000, image: "assets/sepatu3.png", category: "Sepatu", description: "Boots keren dengan hak platform yang elegan." },
    { id: 19, name: "High-Top Canvas Shoes", price: 240000, image: "assets/sepatu4.png", category: "Sepatu", description: "Sepatu tinggi klasik yang menjadi ikon gaya urban anak muda." },
    { id: 20, name: "Dans Henlow - Sepatu Anak Laki Laki", price: 350000, image: "assets/sepatu5.webp", category: "Sepatu", description: "Sepatu lari dengan teknologi insole empuk untuk kenyamanan maksimal." },
    { id: 21, name: "Summer Beach Sandals", price: 45000, image: "assets/sepatu.png", category: "Sepatu", description: "Sandal jepit dengan desain minimalis, sempurna untuk liburan santai." },

    // --- AKSESORIS (22-28) ---
    { id: 22, name: "Kacamata Hiking Dewasa MH500 - Kategori 3", price: 65000, image: "assets/kacamata2.jpg", category: "Aksesoris", description: "Kacamata retro dengan proteksi UV400 untuk perlindungan optimal." },
    { id: 23, name: "Kacamata Unik Model Thug Life", price: 40000, image: "assets/kacamata.jpg", category: "Aksesoris", description: "Topi baseball berbahan corduroy dengan kancing belakang yang estetik." },
    { id: 24, name: "Kacamata Retro Vintage Frame Clear Lensa Hitam", price: 50000, image: "assets/kacamata1.webp", category: "Aksesoris", description: "Tas kain canvas yang simpel namun kuat untuk barang harian." },
    { id: 25, name: "Topi Kece Jala Trucker Distro Unisex ", price: 85000, image: "assets/topi1.jpg", category: "Aksesoris", description: "Dompet lipat dua berbahan kulit sintetis, tipis dan mudah masuk saku." },
    { id: 26, name: "Topi Keren Topi Baseball NEW YORK Distro", price: 35000, image: "assets/topi.webp", category: "Aksesoris", description: "Topi kupluk rajut hangat untuk melengkapi gaya layering." },
    { id: 27, name: "Jam Tangan Pria Original - Fossil Official Indonesia", price: 75000, image: "assets/jam tangan.png", category: "Aksesoris", description: "Kalung rantai stainless steel yang anti karat untuk detail aksesoris." },
    { id: 28, name: "Fossil The Minimalist Jam Tangan Pria", price: 130000, image: "assets/jam tangan1.webp", category: "Aksesoris", description: "Tas selempang dengan banyak kompartemen untuk membawa gadget." },

    // --- JAKET (29-35) ---
    { id: 29, name: "SKYFREAKS Jaket Tracktop ZEY'S Windbreaker Parasut", price: 275000, image: "assets/jaket1.jpg", category: "Jaket", description: "Jaket bomber ala varsity yang sangat ikonik dan hangat." },
    { id: 30, name: "SWEATER HOODIE KOMBINASI - Jaket Distro Zipper", price: 135000, image: "assets/jaket.jpg", category: "Jaket", description: "Kemeja flanel tebal yang bisa dijadikan jaket (outerwear)." },
    { id: 31, name: "aket Windbreaker Pria VNQSR Warna Kombinasi Trendy", price: 190000, image: "assets/jaket2.webp", category: "Jaket", description: "Jaket anti-angin dan tahan air, cocok untuk berkendara." },
    { id: 32, name: "aket Cowok Parasut Pria Jaket Hoodie Pria Jaket Motor", price: 290000, image: "assets/jaket3.webp", category: "Jaket", description: "Jaket denim klasik yang akan terlihat semakin keren seiring waktu." },
    { id: 33, name: "Onixeinside Jaket Cagoule Parasut Jacket", price: 225000, image: "assets/jaket4.jpg", category: "Jaket", description: "Rompi puffer tahan angin, sangat trendi untuk layering." },
    { id: 34, name: "Jaket Cagoule Pria Wanita Premium Distro", price: 185000, image: "assets/jaket5.jpg", category: "Jaket", description: "Jaket pelatih dengan bahan ringan dan kancing jepret yang praktis." },
    { id: 35, name: "Jaket Cagoule Cream Unisex Premium Distro", price: 260000, image: "assets/jaket6.jpg", category: "Jaket", description: "Jaket dengan banyak kantong fungsional berbahan teknis untuk perlindungan cuaca." }
];