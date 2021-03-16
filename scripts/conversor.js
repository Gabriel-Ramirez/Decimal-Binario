$(document).ready(function() {
    $('#numeronumero').keypress(function(e) {
        if (e.keyCode == 13)
            $('#c').click();
    });
});



function convertir(base) {
    var numero = document.getElementById("numeroDecimal").value;
    let binario, octal, hexadecimal, decimal;
    base = parseInt(base);
    
    if(base != 10){
        numero = parseInt(numero, base); 
    }else{
        numero = parseInt(numero); 
    }
    console.log(numero); 

    if (base == 2,10,8,16) {
        decimal = numero; 
        binario = numero.toString(2); 
        octal = numero.toString(8);
        hexadecimal = numero.toString(16);

       if(base == 10){
            document.getElementById('resultadoBinario').innerHTML = `Binario:${binario}<br> 
            Octal: ${octal} <br> 
            hexadecimal:  ${hexadecimal} <br><br>`;
        }else if(base == 8){
            document.getElementById('resultadoBinario').innerHTML = `Binario:${binario}<br> 
            Decimal: ${decimal} <br> 
            hexadecimal:  ${hexadecimal} <br><br>`;
        }else if(base == 16){
            document.getElementById('resultadoBinario').innerHTML = `Binario:${binario}<br> 
            Octal: ${octal} <br> 
            decimal:  ${decimal} <br><br>`;
        }else if(base == 2 ){
            document.getElementById('resultadoBinario').innerHTML = `Decimal:${decimal}<br> 
            Octal: ${octal} <br> 
            hexadecimal:  ${hexadecimal} <br><br>`;
        }

    }else{
        document.getElementById('resultadoBinario').innerHTML = `No es un número valido`;
    }
 

}
window.onload = resultadoBinario;