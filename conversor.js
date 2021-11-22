let btn = document.querySelector('button');
let btnDos = document.querySelector('#btn-2');
let btnTres = document.querySelector('#btn-3');
let btnCuatro = document.querySelector('#btn-4');


const convert = () => {
let pesos = document.querySelector('#input-peso');
let dolarInput = document.querySelector('#falseInputDolar');

    let pesoDolar = pesos.value * 0.0100;
    dolarInput.textContent = pesoDolar
}

const convertDolar = () => {
let dolar = document.querySelector('#input-dolar');
let pesoInput = document.querySelector('#falseInputPeso');

    let dolarConvert = dolar.value * 100.40;
    pesoInput.textContent = dolarConvert
}

//De peso a euro
const convertPeso = () => {
let inputPeso = document.querySelector('#input-pesos');
let EuroInput = document.querySelector('#falseInputEuro');

    let convertToEuro = inputPeso.value * 0.0089;
    EuroInput.textContent = convertToEuro;
}
//De euro a peso
const convertEuro = () => {
let inputEuro = document.querySelector('#input-euros');
let inputAPeso = document.querySelector('#falseInputPesos');

    let converAPeso = inputEuro.value * 112.84;
    inputAPeso.textContent = converAPeso;
}


btn.addEventListener('click', convert);
btnDos.addEventListener('click', convertDolar);
btnTres.addEventListener('click',convertPeso);
btnCuatro.addEventListener('click',convertEuro);