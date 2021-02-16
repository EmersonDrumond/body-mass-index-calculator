function calcular() {
    let name = document.getElementById('name').value
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    let res = document.getElementById('res')
    if (name == '' && height == '' && weight == '') {
        res.textContent = 'Fill in all the details!!!'
    }
    let valor = (weight / (height * height)).toFixed(1)
    res.textContent = valor
    var clas = ''
    if (valor < 18.5) {
        clas = 'under weight'
    }else if (valor < 25) {
        clas = 'ideal weight'
    }else if (valor < 30) {
        clas = 'slightly overweight'
    } else if (valor < 35) {
        clas = 'with grade 1 obesity'
    } else if (valor < 40) {
        clas = 'with grade 2 obesity'
    }else {
        clas = 'with grade 3 obesity'
    }
    res.textContent = `${name} your BMI is ${valor} and you are ${clas}.`
}