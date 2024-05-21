function calculate() {
    var age = parseFloat(document.getElementById('age').value);
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var activityMultiplier = parseFloat(document.getElementById('activity').value);
    var gender = parseFloat(document.getElementById('sex').value);
    var bmi_;

    if (!isNaN(age) && !isNaN(height) && !isNaN(weight) && !isNaN(activityMultiplier) && !isNaN(gender)) {
        var bmi = weight / ((height / 100) * (height / 100));
        var result;

        if (gender == 1) {
            var x1 = 66.47 + (15.75 * weight) + (5.0 * height) - (6.75 * age);
            var x2 = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            var x3 = (x1 + x2) / 2;
            result = x3 * activityMultiplier;
        } else if (gender == 2) {
            var x1 = 665.09 + (9.56 * weight) + (1.84 * height) - (4.67 * age);
            var x2 = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            var x3 = (x1 + x2) / 2;
            result = x3 * activityMultiplier;
        }

        if (bmi <= 18.5) {
            bmi_ = "Achtung: Sie sind stark untergewichtig";
        } else if (bmi <= 24.9) {
            bmi_ = "Sie haben ein normales Gewicht.";
        } else if (bmi <= 29.9) {
            bmi_ = "Sie haben Übergewicht (Grad I).";
        } else if (bmi <= 34.9) {
            bmi_ = "Sie haben Übergewicht (Grad II).";
        } else {
            bmi_ = "Achtung: Sie haben starkes Übergewicht (Adipositas).";
        }

        document.getElementById('resultOutput').innerHTML = 'Ergebnis: ' + result.toFixed(3) + ' Kalorien am Tag.<br>BMI: ' + bmi_;
    } else {
        alert('Bitte geben Sie gültige Werte ein.');
    }
}
