//Conversor de moedas

function Converter(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
    var valorEmEuro = valorEmReal * 0.16110; //cotação do euro em 15/09/21 09:30
    var valorFixado = valorEmEuro.toFixed(2);
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado é €" + valorFixado + "!";
    elementoValorConvertido.innerHTML = valorConvertido;
}