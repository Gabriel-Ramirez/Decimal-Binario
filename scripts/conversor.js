$(document).ready(function() {
    $('#numeroDecimal').keypress(function(e) {
        if (e.keyCode == 13)
            $('#c').click();
    });
});



function convertir(tipo) {
    var decimal = parseInt(document.getElementById("numeroDecimal").value);
    var valor;
    if (tipo != 10) {
        valor = decimal.toString(tipo);
        document.getElementById('resultadoBinario').innerHTML = `<h6>Resultado: <h6>${valor}<br><br>`;
    }
    if (tipo === 10) {
        valor = parseInt(decimal, 2);
        document.getElementById('resultadoBinario').innerHTML = `<h6>Resultado: <h6>${valor}<br><br>`;
    }

}
window.onload = resultadoBinario;