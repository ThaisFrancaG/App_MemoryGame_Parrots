
let numeroCartas = prompt('Insira um número par de 4 a 14!');10
while (numeroCartas<4 || numeroCartas>14 || numeroCartas%2 !==0) {
    alert('Desculpe, mas você inseriu um número invalido!');
    numeroCartas = prompt('Insira um número par de 4 a 14!');
}


let myVar = setInterval(contadorRelogio, 1000);

//pegar as opcoes possiveis de verso para construir as cartas
let numeroDeVersos = [];
let numeroVerso = [];

for (let i=0;i<(numeroCartas/2);i++){
    numeroDeVersos.push(i+1);
    numeroVerso = numeroDeVersos.concat(numeroDeVersos);

    numeroVerso.sort(comparador);
//peguei do notion, depois quero testar outros jeitos de fazer
    function comparador(){
        return Math.random() - 0.5; 
    }

}


let contadorCartas = 0;

while (contadorCartas<numeroCartas){

    let mesa = document.querySelector(".mesa-cartas");
    mesa.innerHTML +=` <div data-identifier="card" class = "carta" onclick = "virarCarta(this)">
    <figure class = "frente">
         <img src="imagens/front.png"/>
     </figure>
     <figure class = "verso">
         <img src="imagens/verso${numeroVerso[contadorCartas]}.png"/>
     </figure>
        </div>`;
        contadorCartas++                                     
}


let parCartas = [];
let viradas = 0;
let numeroDePares = 0;

function virarCarta(carta){

    if (parCartas.length<2){

        if (carta.querySelector(".par") == null){

    carta.classList.toggle("carta-giro");
    carta.querySelector(".frente").style.display = "none";
    carta.querySelector(".verso").style.display = "flex";
    carta.classList.add("selecionada");

    parCartas.push(carta);
    conferenciaPares = document.querySelectorAll(".selecionada").length;
  
    if(conferenciaPares==2){

    setTimeout(function(){
    if(parCartas[0].querySelector(".verso").innerHTML === parCartas[1].querySelector(".verso").innerHTML){
        // alert('você tem um par');
    parCartas[0].classList.add("par");
    parCartas[1].classList.add("par");
    }
    else{

        parCartas[0].querySelector(".frente").style.display = "flex";
        parCartas[0].querySelector(".verso").style.display = "none";
        parCartas[1].querySelector(".verso").style.display = "none";
        parCartas[1].querySelector(".frente").style.display = "flex";
    }
    parCartas[0].classList.remove("selecionada");
    parCartas[1].classList.remove("selecionada");
    parCartas = [];
    conferenciaPares =0;
    fimDoJogo()
  
    },1000);
    }
    viradas++;
    
}}
   
    else{
        alert ("Aguarde antes de clicar novamente!");
}

}

function fimDoJogo(){
    numeroDePares = document.querySelectorAll(".par").length;
    if (numeroDePares==numeroCartas){
        pararRelogio();
        alert (`você ganhou em ${viradas} jogadas! Você jogou por ${tempo} segundos` );
       let reiniciar = prompt("Você quer jogar novamente?");
       if (reiniciar == "sim"){
           location.reload();
       } 
       else{prompt("obrigado por jogar!");}
    }
}

let contadorSegundos= 0; 
let contadorMinutos= 0; 
let contadorHoras= 0; 
let tempo = 0;
function contadorRelogio() {
tempo++;
contadorSegundos++;
// console.log(contadorSegundos);
if(contadorSegundos<10){
document.querySelector('#segundos').innerHTML = `0${contadorSegundos}`;}
else{document.querySelector('#segundos').innerHTML = contadorSegundos;}

if(contadorSegundos ==59){
    contadorSegundos =0;
    contadorMinutos++;
    if(contadorMinutos<10){
        document.querySelector('#minutos').innerHTML = `0${contadorMinutos}`;}
        else{document.querySelector('#minutos').innerHTML = contadorMinutos;}
}
if(contadorMinutos ==59 && contadorSegundos ==59){
    contadorMinutos =0;
    contadorSegundos = 0;
    contadorHoras++;
    if(contadorHoras<10){
        document.querySelector('#horas').innerHTML = `0${contadorHoras}`;}
        else{document.querySelector('#horas').innerHTML = contadorHoras;}
}
}

function pararRelogio(){
    clearInterval (myVar);
}

