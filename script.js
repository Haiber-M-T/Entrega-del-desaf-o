function encryptText() {
    let input = document.getElementById('inputText').value;
    let encrypted = btoa(input); // Simple base64 encoding for demo purposes
    document.getElementById('outputText').textContent = encrypted;
}

function decryptText() {
    let input = document.getElementById('inputText').value;
    try {
        let decrypted = atob(input); // Simple base64 decoding for demo purposes
        document.getElementById('outputText').textContent = decrypted;
    } catch (e) {
        document.getElementById('outputText').textContent = "Error: Texto no encriptado en base64";
    }
}
