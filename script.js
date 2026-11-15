const linkInput = document.getElementById("linkInput");
const generateBtn = document.getElementById("generateBtn");
const qrContainer = document.getElementById("qr");

function generateQR(){
    const text = linkInput.value.trim();

    qrContainer.innerHTML = "";

    if (!text) {
        linkInput.focus();
        return;
    }

    new QRCode(qrContainer, {
        text : text,
        width: 180,
        height: 180
    });
}

generateBtn.addEventListener("click", generateQR);

linkInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") generateQR();
});