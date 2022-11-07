//finding main div perent of the input elements and button
const div = document.querySelector("#inputs");

//find the celsius input
const cels = div.querySelector("#cels");

//find the fahrenheit input
const farn = div.querySelector("#farn");


cels.addEventListener("input", celsHandler);

function celsHandler() {
    let output = parseFloat(cels.value * (9/5) +32 );

    farn.value = parseFloat(output.toFixed(3));
}


farn.addEventListener("input", farnHandler);

function farnHandler() {
    let output = parseFloat(farn.value -32 * 5/9);

    cels.value = parseFloat(output.toFixed(3));
}
