// Menambahkan event listener untuk form saat disubmit
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Mengonversi cm ke m
    const gender = document.getElementById('gender').value;

    // Validasi input
    if (weight <= 0 || height <= 0 || gender === "") {
        document.getElementById('result').innerText = "Silakan masukkan nilai yang valid.";
        document.getElementById('explanation').innerText = "";
        return;
    }

    // Menghitung BMI
    const bmi = weight / (height * height);
    let resultText = `BMI Anda: ${bmi.toFixed(2)}. `;

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

    // Menyediakan penjelasan tentang BMI
    const explanationText = `BMI Anda menunjukkan bahwa Anda memiliki berat badan ${bmi < 24.9 ? "normal" : "lebih."}`;
    document.getElementById('explanation').innerText = explanationText;
});