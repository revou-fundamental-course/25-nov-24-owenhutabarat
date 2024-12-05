// Mendapatkan elemen dari DOM
const bmiForm = document.getElementById('bmiForm');
const resultDiv = document.getElementById('result');

// Menangani pengiriman formulir
bmiForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir standar

    // Mengambil nilai dari input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;

    // Validasi input
    if (weight <= 0 || height <= 0) {
        resultDiv.innerHTML = "Silakan masukkan berat dan tinggi yang valid.";
        return;
    }

    // Menghitung BMI
    const bmi = weight / (height * height);
    let category;

    // Menentukan kategori BMI
    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Berat badan normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan berat badan";
    } else {
        category = "Kegemukan (Obesitas)";
    }

    // Menampilkan hasil
    resultDiv.innerHTML = `BMI Anda adalah ${bmi.toFixed(2)} (${category}) untuk ${gender === 'male' ? 'Laki-Laki' : 'Wanita'}.`;
});