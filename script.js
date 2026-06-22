function toggleMenu(menuId){

    const menu = document.getElementById(menuId);

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}

function toggleMenu(menuId){

    const menu = document.getElementById(menuId);

    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}

function abrirCurso(menuId){

    document.querySelectorAll('.curso-menu')
    .forEach(menu=>{

        if(menu.id !== menuId){
            menu.style.display = "none";
        }

    });

    const menuAtual = document.getElementById(menuId);

    if(menuAtual.style.display === "block"){
        menuAtual.style.display = "none";
    }else{
        menuAtual.style.display = "block";
    }


}

function esconderTodasAulas(){

    document.querySelectorAll(
        '.aula-ia, .aula-word, .aula-excel, .aula-ppt'
    ).forEach(aula=>{
        aula.classList.remove('ativa');
    });

}

function abrirAulaIA(id){

    esconderTodasAulas();

    document.getElementById(id)
    .classList.add('ativa');

}

function abrirAulaWord(id){

    esconderTodasAulas();

    document.getElementById(id)
    .classList.add('ativa');

}

function abrirAulaExcel(id){

    esconderTodasAulas();

    document.getElementById(id)
    .classList.add('ativa');

}

function abrirAulaPPT(id){

    esconderTodasAulas();

    document.getElementById(id)
    .classList.add('ativa');

}

function esconderTodasAulas(){

    document.querySelectorAll(
        '.aula-ia, .aula-word, .aula-excel, .aula-ppt'
    ).forEach(aula=>{
        aula.classList.remove('ativa');
    });

}

function abrirAulaIA(id){

    esconderTodasAulas();

    document.getElementById(id)
    .classList.add('ativa');

}

function abrirAulaWord(id){

    esconderTodasAulas();

    document.getElementById(id)
    .classList.add('ativa');

}

function abrirAulaExcel(id){

    esconderTodasAulas();

    document.getElementById(id)
    .classList.add('ativa');

}

function abrirAulaPPT(id){

    esconderTodasAulas();

    document.getElementById(id)
    .classList.add('ativa');

}

let slideAtual = 0;

const slides = document.querySelectorAll('.slide');

function trocarBanner(){

    slides[slideAtual].classList.remove('ativo');

    slideAtual++;

    if(slideAtual >= slides.length){
        slideAtual = 0;
    }

    slides[slideAtual].classList.add('ativo');

}

setInterval(trocarBanner, 4500);