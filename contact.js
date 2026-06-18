/* ===========================================
   MRST Fashion Contact Page JS
=========================================== */

// Form elements
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Scroll to top button
const topBtn = document.querySelector(".top-btn");

// =========================
// FORM SUBMIT HANDLER
// =========================

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("⚠️ Please fill all required fields!");
        return;
    }

    // Email check (basic)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("⚠️ Please enter a valid email!");
        return;
    }

    // Show success message
    successMessage.style.display = "block";

    // Reset form
    form.reset();

    // Hide message after 3 sec
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);

    // Optional: console log (for backend later)
    console.log({
        name,
        email,
        phone,
        subject,
        message
    });
});


// =========================
// SCROLL TO TOP BUTTON
// =========================

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =========================
// WHATSAPP QUICK MESSAGE (OPTIONAL)
// =========================

// Example function (future use)
function openWhatsApp() {
    let phoneNumber = "8801605019908";

    let url = `https://wa.me/${phoneNumber}`;

    window.open(url, "_blank");
}