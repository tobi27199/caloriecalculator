function calculate() {
    var age = parseFloat(document.getElementById('age').value);
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var activityMultiplier = parseFloat(document.getElementById('activity').value);
    var gender = parseFloat(document.getElementById('sex').value);

    if (!isNaN(age) && !isNaN(height) && !isNaN(weight) && !isNaN(activityMultiplier) && !isNaN(gender)) {
        if(gender == 1){
        var x1 = 66.47 + (15.75 * weight) + (5.0 * height) - (6.75 * age);
        var x2 = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        var x3 = (x1 + x2) / 2;
        var result = x3 * activityMultiplier;

        // Ausgabe des Ergebnisses in ein Element mit der ID "resultOutput"
        document.getElementById('resultOutput').innerText = 'Ergebnis: ' + result;
        }
        else if(gender == 2){
        var x1 = 665.09 + (9.56 * weight) + (1.84 * height) - (4.67 * age);
        var x2 = (10 * weight) + (6.25 * height) - (5 * age) -161;
        var x3 = (x1 + x2) / 2;
        var result = x3 * activityMultiplier;

        // Ausgabe des Ergebnisses in ein Element mit der ID "resultOutput"
        document.getElementById('resultOutput').innerText = 'Ergebnis: ' + result;
        }

        
    } else {
        alert('Bitte geben Sie gültige Werte ein.');
    }
}