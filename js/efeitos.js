//SCROLL DO HEADER
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 0);
});

//BTN LER MAIS E MENOS

const button = document.getElementById('ler-mais');
button.addEventListener('click', function(){
    const card = document.querySelector('.card');
    card.classList.toggle('ativado');

    //if (car)
});