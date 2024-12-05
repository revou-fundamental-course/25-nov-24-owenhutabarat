// Menangani pengiriman form
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Mengambil nilai input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;

    // Validasi input
    if (weight <= 0 || height <= 0) {
        alert("Berat dan tinggi harus lebih besar dari 0.");
        return;
    }

    // Menghitung BMI
    const bmi = weight / (height * height);
    let resultText = `BMI Anda adalah ${bmi.toFixed(2)}. `;

    // Menentukan kategori BMI
    if (bmi < 18.5) {
        resultText += "Anda termasuk kategori Kurang Berat Badan.";
    } else if (bmi < 24.9) {
        resultText += "Anda termasuk kategori Berat Badan Normal.";
    } else if (bmi < 29.9) {
        resultText += "Anda termasuk kategori Kelebihan Berat Badan.";
    } else {
        resultText += "Anda termasuk kategori Obesitas.";
    }

    // Menampilkan hasil
    document.getElementById('result').innerText = resultText;
});