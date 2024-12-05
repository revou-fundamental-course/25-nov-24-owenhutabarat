const bmiForm = document.getElementById('bmiForm');
const resultDiv = document.getElementById('result');

bmiForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (weight <= 0 || height <= 0) {
        resultDiv.innerHTML = "Silakan masukkan berat dan tinggi yang valid.";
        return;
    }

    const bmi = weight / (height * height);
    let category;

    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Berat badan normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan berat badan";
    } else {
        category = "Kegemukan (Obesitas)";
    }

    resultDiv.innerHTML = `BMI Anda adalah <strong>${bmi.toFixed(2)}</strong> (${category}).`;
});