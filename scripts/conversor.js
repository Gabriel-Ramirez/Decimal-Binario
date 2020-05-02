$(document).ready(function() {
    $('#numeroDecimal').keypress(function(e) {
        if (e.keyCode == 13)
            $('#c').click();
    });
});



function convertir(tipo) {
    let decimal = parseInt(document.getElementById("numeroDecimal").value);
    let valor;
    if (tipo != "10") {
        valor = decimal.toString(tipo);
    }
    if (tipo == "10") {
        valor = parseInt(decimal, 2);
    }

    document.getElementById('resultadoBinario').innerHTML = `<h6>Resultado: <h6>${valor}<br><br>`;
}
window.onload = resultadoBinario;