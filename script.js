document.addEventListener("DOMContentLoaded", function () {
    // 1. Update Tanggal Otomatis di Bar Atas
    function updateDate() {
        const dateElement = document.getElementById("current-date");
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const today = new Date();
        dateElement.textContent = today.toLocaleDateString('id-ID', options);
    }
    updateDate();

    // 2. Fitur Toggle Dark / Light Mode
    const themeBtn = document.getElementById("theme-toggle");
    const body = document.body;

    themeBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        const icon = themeBtn.querySelector("i");
        
        if (body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });

    // 3. Form Subscription / Langganan
    const subForm = document.getElementById("subscribe-form");
    if (subForm) {
        subForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const emailInput = document.getElementById("sub-email").value;
            if (emailInput) {
                alert("Terima kasih! Email " + emailInput + " berhasil terdaftar untuk mendapatkan buletin harian.");
                subForm.reset();
            }
        });
    }

    // 4. Efek Klik Interaktif pada Navigasi
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navItems.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});