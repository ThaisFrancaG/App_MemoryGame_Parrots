
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
// pokemon, (des)comente essa parte para mudar o tema do jogo!
tema = "pokemon";
    let mesa = document.querySelector(".mesa-cartas");
    mesa.innerHTML +=` <div data-identifier="card" class = "carta" onclick = "virarCarta(this)">
    <figure class = "frente" data-identifier="front-face">
         <img src="imagens/front_pokemon.png"/>
     </figure>
     <figure class = "verso" data-identifier="back-face">
         <img src="imagens/pokemon/verso${numeroVerso[contadorCartas]}.png"/>
     </figure>
        </div>`;
        contadorCartas++    

//slack     (des)comente essa parte para mudar o tema do jogo!

// tema  = slack;
        // let mesa = document.querySelector(".mesa-cartas");
        // mesa.innerHTML +=` <div data-identifier="card" class = "carta" onclick = "virarCarta(this)">
        // <figure class = "frente" data-identifier="front-face">
        //      <img src="imagens/front.png"/>
        //  </figure>
        //  <figure class = "verso" data-identifier="back-face">
        //      <img src="imagens/slack/verso (${numeroVerso[contadorCartas]}).gif"/>
        //  </figure>
        //     </div>`;
        //     contadorCartas++        
         
}


let parCartas = [];
let viradas = 0;
let numeroDePares = 0;

function virarCarta(carta){

if (parCartas.length<2){

    carta.classList.toggle("giro");
    carta.classList.add("selecionada"); 
    parCartas.push(carta);
    carta.setAttribute("onclick",'teste(this)');
    conferenciaPares = document.querySelectorAll(".selecionada").length;

    if(conferenciaPares==2) {

        if(parCartas[0]==parCartas[1]){
            alert("aff");
            parCartas = [];
        }
else{

    setTimeout(function(){
    if(parCartas[0].querySelector(".verso").innerHTML === parCartas[1].querySelector(".verso").innerHTML){
    parCartas[0].classList.add("par");
    parCartas[1].classList.add("par");
    parCartas[0].removeAttribute("onclick");
    parCartas[1].removeAttribute("onclick");
  
    }
    else{
        parCartas[0].classList.toggle("giro");
        parCartas[1].classList.toggle("giro");
        parCartas[0].setAttribute("onclick",'virarCarta(this)');
        parCartas[1].setAttribute("onclick",'virarCarta(this)');
    }
    parCartas[0].classList.remove("selecionada");
    parCartas[1].classList.remove("selecionada");
    parCartas = [];
    conferenciaPares =0;
    fimDoJogo()

    },1000);
}

    }
    viradas++; 
}
 
    else{
        alert ("Aguarde antes de clicar novamente!");
}
console.log(parCartas);
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
       else{alert("obrigado por jogar!");}
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

function teste(){
    alert("Opa, você já selecionou essa carta");
}