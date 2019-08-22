function convertir(){
let decimal=parseInt(document.getElementById("numeroDecimal").value);
let binario;
binario = decimal.toString(2); 
document.getElementById('resultadoBinario').innerHTML = `<h6>Resultado: <h6>${binario}<br><br>`;
}
window.onload = resultadoBinario; 