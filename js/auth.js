// js/auth.js

document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. LOGIKA REGISTER FORM
    // ==========================================
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah reload halaman

            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const submitBtn = registerForm.querySelector('.btn-auth');

            // Validasi Input Frontend
            if (password.length < 8) {
                alert("Password minimal harus 8 karakter!");
                return;
            }

            if (password !== confirmPassword) {
                alert("Konfirmasi password tidak cocok!");
                return;
            }

            // Tarik data user yang sudah terdaftar di browser (jika ada)
            let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

            // Cek apakah email yang dimasukkan sudah pernah mendaftar sebelumnya
            const isEmailExist = registeredUsers.some(user => user.email === email);
            if (isEmailExist) {
                alert("Alamat email ini sudah terdaftar! Silakan gunakan email lain atau langsung login.");
                return;
            }

            // Animasi Loading Singkat untuk Estetika UX
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Mendaftarkan...";
            submitBtn.disabled = true;

            setTimeout(() => {
                // Simpan data user baru ke dalam local database browser
                registeredUsers.push({
                    name: fullName,
                    email: email,
                    password: password 
                });

                localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

                alert("Pendaftaran berhasil! Akun Anda telah disimpan secara lokal di browser.");
                window.location.href = 'login.html';
            }, 800); 
        });
    }

    // ==========================================
    // 2. LOGIKA LOGIN FORM
    // ==========================================
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah reload halaman

            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            const submitBtn = loginForm.querySelector('.btn-auth');

            // Ambil list database user dari localStorage
            let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

            // Cari user yang email dan password-nya cocok
            const matchedUser = registeredUsers.find(user => user.email === email && user.password === password);

            // Animasi Loading UX Sederhana
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Memverifikasi...";
            submitBtn.disabled = true;

            setTimeout(() => {
                if (matchedUser) {
                    // Jika cocok, buat token login tiruan & simpan session nama user
                    localStorage.setItem('userToken', 'mock-jwt-token-xyz789');
                    localStorage.setItem('loggedInUser', JSON.stringify({
                        name: matchedUser.name,
                        email: matchedUser.email
                    }));

                    alert(`Selamat Datang Kembali, ${matchedUser.name}!`);
                    window.location.href = 'index.html'; // Pindah ke homepage
                } else {
                    // Jika salah atau data tidak ditemukan
                    alert("Email atau password salah! Silakan periksa kembali atau daftar akun baru.");
                    
                    // Kembalikan status tombol jika gagal login
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                }
            }, 600);
        });
    }
});