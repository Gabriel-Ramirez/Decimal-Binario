$(document).ready(function(){
    $('#numeroDecimal').keypress(function(e){
      if(e.keyCode==13)
      $('#c').click();
    });
});



function convertir(tipo){
let decimal=parseInt(document.getElementById("numeroDecimal").value);
let valor;
valor = decimal.toString(tipo); 
document.getElementById('resultadoBinario').innerHTML = `<h6>Resultado: <h6>${valor}<br><br>`;
}
window.onload = resultadoBinario; 

