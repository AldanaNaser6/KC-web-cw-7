function BMI(weight, height) {
    let result = weight / (height * height);
    return Math.round(result*10)/10 || 0;
}

console.log(BMI(70, 1.7));
console.log(BMI(75, 1.75));
console.log(BMI(80, 1.73));
console.log(BMI(90, 1.72));
console.log(BMI(50, 1.68));
console.log(BMI(100, 1.55));
console.log(BMI());

function Status(bmi) {
    if (bmi < 18.5) {
        return("لديك نقص في الوزن")
    } else if (bmi >= 18.5 && bmi < 25) {
        return "وزنك صحي"
    } else {
        return "لديك زيادة في الوزن"
    }
}

function Color(bmi) {
    if (bmi < 18.5) {
        return "orange"
    } else if (bmi >= 18.5 && bmi < 25) {
        return "green"
    } else {
        return "red"
    }
}


function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = BMI(weight, height);

    let desc = Status(bmi);

    let div = document.getElementById("result");
    div.innerText = bmi + " == " + desc;
    div.style = "color: "+Color(bmi)
}
