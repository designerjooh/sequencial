//variáveis
let numero1, numero2, resultado1;

//Processamento
function somar(){
    //Entrada
    numero1 = parseInt(document.getElementById("numero1").value);
    numero2 = parseInt(document.getElementById("numero2").value);
    resultado1 = numero1 + numero2;
    //Saída
    document.getElementById("resultado1").innerHTML = "Resultado:" + resultado1;
}


//Variaveis
let celsius, F;

function converter(){
    //entrada
    celsius = parseFloat(document.getElementById("celsius").value);
    
    //Processamento
    F = (celsius * 9 / 5) + 32;

    //saida
    document.getElementById("resultado2").innerHTML = "F = " + F;
}

//variaveis
let volume, raio, altura;

function Cvolume(){
    //Entrada 
    raio = parseFloat(document.getElementById("raio").value);
    altura = parseFloat(document.getElementById("altura").value);

    //processamento
    volume = 3.14159 * (raio * 2) * altura;

    //saida
    document.getElementById("resultado3").innerHTML = "O volume é:" + volume;
}

let v, comprimento, largura, alto;

function vol(){
    comprimento = parseFloat(document.getElementById("comprimento").value);
    largura = parseFloat(document.getElementById("largura").value);
    alto = parseFloat(document.getElementById("alto").value);

    v = comprimento * largura * alto;

    document.getElementById("resultado4").innerHTML = "O Volume é:" + v

}