
let parCartas = [];
let ii=0;


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
