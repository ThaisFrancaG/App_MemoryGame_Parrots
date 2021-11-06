// primeiro, com quantas cartas será o jogo
// numeroCartas = prompt('Insira um número par de 4 a 14!');

// while (numeroCartas<4 || numeroCartas>14 || numeroCartas%2 !==0) {
//     alert('Desculpe, mas você inseriu um número invalido!');
//     numeroCartas = prompt('Insira um número par de 4 a 14!');
// }

numeroCartas = 4;

//pegar as opcoes possiveis de verso para construir as cartas
let numeroDeVersos = [];
let numeroVerso = [];


for (let i=0;i<(numeroCartas/2);i++){
    numeroDeVersos.push(i+1);
    numeroVerso = numeroDeVersos.concat(numeroDeVersos);
    // console.log(numeroDeVersos);
    // console.log(numeroVerso);
    numeroVerso.sort(comparador);
//peguei do notion, depois quero testar outros jeitos de fazer
    function comparador(){
        return Math.random() - 0.5; 
    }
    // console.log(numeroVerso+" "+"embaralhado");
}

//Depois, criar as cartas que serão usadas. Isso deve ser feito no JS e no HTML

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

// console.log(contadorCartas);
//agora  virar as cartas, em pares
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
   
    //vou tentar colocar uma cofnerência de seleção para que eu possa virar elas depois
    parCartas.push(carta);
    conferenciaPares = document.querySelectorAll(".selecionada").length;
    // console.log("o total de cartas selecionadas é"+conferenciaPares);

  
    if(conferenciaPares==2){
    // alert('teste');

setTimeout(function(){

    if(parCartas[0].querySelector(".verso").innerHTML === parCartas[1].querySelector(".verso").innerHTML){
        // alert('você tem um par');
    parCartas[0].classList.add("par");
    parCartas[1].classList.add("par");

    }
    else{
        // alert('voce nao tem um par');
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
    // console.log("o total de cartas selecionadas é"+conferenciaPares);
    },1000);
    }
    viradas++;
    // console.log(viradas);
}}

    
    else{
        alert ("Aguarde antes de clicar novamente!");
}

// console.log("número de pares é"+numeroDePares);


}

function fimDoJogo(){
    numeroDePares = document.querySelectorAll(".par").length;
    if (numeroDePares==numeroCartas){
        alert (`você ganhou em ${viradas} jogadas!`);

        
    }
    console.log(numeroCartas);
        console.log(numeroDePares);
}