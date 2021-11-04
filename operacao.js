//primeiro, com quantas cartas será o jogo
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
    console.log(numeroDeVersos);
    console.log(numeroVerso);
    numeroVerso.sort(comparador);
//peguei do notion, depois quero testar outros jeitos de fazer
    function comparador(){
        return Math.random() - 0.5; 
    }
    console.log(numeroVerso+" "+"embaralhado");
}

//Depois, criar as cartas que serão usadas. Isso deve ser feito no JS e no HTML

let contadorCartas = 0;

while (contadorCartas<numeroCartas){

    let mesa = document.querySelector(".mesa-cartas");
    mesa.innerHTML +=` <div class = "carta" onclick = "virarCarta(this)">
    <figure class = "frente">
         <img src="imagens/front.png"/>
     </figure>
     <figure class = "verso">
         <img src="imagens/verso${numeroVerso[contadorCartas]}.JPEG"/>
     </figure>
        </div>`;
        contadorCartas++                                     
}

console.log(contadorCartas);
//agora  virar as cartas, em pares
let parCartas = [];
let ii=0;

function virarCarta(carta){
    carta.querySelector(".frente").style.display = "none";
    carta.querySelector(".verso").style.display = "flex";
    carta.classList.add("selecionada");
    //vou tentar colocar uma cofnerência de seleção para que eu possa virar elas depois
    parCartas.push(carta);
    ii++
    console.log("o valor atual de ii é"+ii);
    conferencia1 = document.querySelectorAll(".selecionada");
    console.log(conferencia1.lenght);
    
// preciso de um condicional para trabalhar só em pares
    if (ii == 2){
        //quando ii=2, já foram selecionadas duas cartas
        if(parCartas[0]!==parCartas[1]){
         let carta1 = document.querySelector(".selecionada");
         carta1.querySelector(".verso").style.display = "none";
         carta1.querySelector(".frente").style.display = "flex";
         carta1.classList.remove = ("selecionada");
         let carta2 = document.querySelector(".selecionada");
         carta2.querySelector(".verso").style.display = "none";
         carta2.querySelector(".frente").style.display = "flex";
         carta2.classList.remove = ("selecionada");
        }
        ii=0;
        console.log("o valor atual de ii é"+ii);

    }
}


// function virarCarta(carta) {
// carta.classList.toggle("frente");
// carta.classList.toggle("verso");
// parCartas.push(carta);
// console.log(ii);
// ii++;

// if (parCartas.length>2 && parCartas[0] !== parCartas[1]){
//     parCartas[0].classList.toggle("frente");
//     parCartas[0].classList.toggle("verso");
//     parCartas[0].innerHTML = `<figure><img src = 'imagens/front.png' /></figure>`;
//     parCartas[1].classList.toggle("frente");
//     parCartas[1].classList.toggle("verso");
//     parCartas[1].innerHTML = `<figure><img src = 'imagens/front.png' /></figure>`;
// }


// }
