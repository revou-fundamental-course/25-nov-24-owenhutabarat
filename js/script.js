document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        let resultText = `BMI Anda adalah ${bmi.toFixed(2)}. `;

        if (bmi < 18.5) {
            resultText += "Anda termasuk kategori Kurang Berat Badan.";
        } else if (bmi < 24.9) {
            resultText += "Anda termasuk kategori Berat Badan Normal.";
        } else if (bmi < 29.9) {
            resultText += "Anda termasuk kategori Kelebihan Berat Badan.";
        } else {
            resultText += "Anda termasuk kategori Obesitas.";
        }

        document.getElementById('result').innerText = resultText;
    } else {
        document.getElementById('result').innerText = "Silakan masukkan nilai yang valid.";
    }
});