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
    let numeroVerso = numeroDeVersos.concat(numeroDeVersos);
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
         <img src="imagens/verso${1}.JPEG"/>
     </figure>
        </div>`;
        contadorCartas++                                     
}





// let parCartas = [];
// let ii=0;


function virarCarta(carta) {
carta.classList.toggle("frente");
carta.classList.toggle("verso");
carta.innerHTML = `<figure><img src = 'imagens/verso${ii+1}.JPEG' /></figure>`;
parCartas.push(carta);
console.log(ii);
ii++;

if (parCartas.length>2 && parCartas[0] !== parCartas[1]){
    parCartas[0].classList.toggle("frente");
    parCartas[0].classList.toggle("verso");
    parCartas[0].innerHTML = `<figure><img src = 'imagens/front.png' /></figure>`;
    parCartas[1].classList.toggle("frente");
    parCartas[1].classList.toggle("verso");
    parCartas[1].innerHTML = `<figure><img src = 'imagens/front.png' /></figure>`;
}


}
