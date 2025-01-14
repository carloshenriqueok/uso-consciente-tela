//SCROLL DO HEADER
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 0);
});

//BTN LER MAIS E MENOS

const button = document.querySelectorAll('.ler-mais');

button.forEach(button => {
button.addEventListener('click', function(){
    const card = this.closest('.card');
    card.classList.toggle('ativado');

        if (card.classList.contains('ativado')){
            return button.textContent = "LER MENOS";
        }

        return button.textContent = "LER MAIS";

    });
});

//HEADER MOBILE
function menuShow(){
    const menu = document.querySelector('.menu-mobile');
    
       if(menu.classList.contains('open')){
        menu.classList.remove('open');
        document.querySelector('.icon').src = "images/menu_white_36dp.svg";
       } else {
        menu.classList.add('open');
        document.querySelector('.icon').src = "images/close_white_36dp.svg";
       }

}
