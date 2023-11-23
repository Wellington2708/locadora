function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagemJogo = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');

    if(imagemJogo.classList.contains("dashboard__item__img--rented")){
        imagemJogo.classList.remove("dashboard__item__img--rented");
        botao.style.backgroundColor = "#1875E8";
        botao.innerHTML = "Alugar";


    }else{
        imagemJogo.classList.add("dashboard__item__img--rented");
        botao.innerHTML = 'Devolver';
        botao.style.backgroundColor = "#01080E";

    }

}


