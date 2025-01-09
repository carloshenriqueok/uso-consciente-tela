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