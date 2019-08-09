
//var decimal = 10; 
function convertir(){
var decimal=parseInt(document.getElementById("numeroDecimal").value);
console.log('El numero en decimal es: ')
console.log(decimal); 
var binario;
binario = decimal.toString(2); 
console.log('El numero en binario es: ');
console.log(binario);
document.getElementById('resultadoBinario').innerHTML = binario;
}
window.onload = resultadoBinario; 