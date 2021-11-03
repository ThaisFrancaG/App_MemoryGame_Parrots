function virarCarta(carta) {

    if (carta !== null){
        alert("estou funcionando!");
carta.classList.toggle("frente");
carta.classList.toggle("verso");
carta.innerHTML.src = "imagens/IMG_2853.JPEG";
    }


}