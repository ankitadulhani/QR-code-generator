const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return; // Return if input is empty
    
    // Show loading state
    generateBtn.innerText = "Generating QR Code...";
    
    // Update QR code image src with API
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(qrValue)}`;
    
    // When QR code image loads
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

// Remove active class when input is empty
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
});