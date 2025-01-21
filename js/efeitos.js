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

let navButton = document.getElementById('btn-header');

navButton.addEventListener('click', function(){
    const menu = document.querySelector('.menu-mobile');
    
    if(menu.classList.contains('open')){
     menu.classList.remove('open');
     document.querySelector('.icon').src = "images/menu_white_36dp.svg";
    } else {
     menu.classList.add('open');
     document.querySelector('.icon').src = "images/close_white_36dp.svg";
    }
})


//TEMPO DE TELA RECOMENDADO (PAG USO CONSCIENTE)

let btnEnviar = document.getElementById('btn-enviar');

btnEnviar.addEventListener('click', function(){
    let idade = parseInt(document.getElementById('idade').value);
    let horas = parseFloat(document.getElementById('horas').value.replace(":" , "."));
    let saida = document.getElementById('saida');


    if(idade <= 0 || idade > 99){
        alert("DADOS INVÁLIDOS \nSó são aceitas idades maiores que 0 e menores que 99");
    }

    if(horas < 0 || horas > 24){
        alert("DADOS INVÁLIDOS \nSó são aceitas horas positivas e menor ou igual a 24 horas")
    }

    if(idade >=1 && idade <= 2){
        if(horas > 0){
            saida.innerHTML = `
        <div class="resultado">
          <img src="images/Disappointed.png" alt="carinha-triste">
          <h3 class="vermelho">Acima do tempo recomendado</h3>
        </div>
        <p class="media">Sua média diaria: ${horas.toFixed(2).replace("." , ":")} horas</p>
        <p class="recomendado">Média diária recomendada: 0 horas</p>`;
        }
        else{
            saida.innerHTML = ` 
        <div class="resultado">
          <img src="images/Smiling.png" alt="carinha-triste">
          <h3 class="verde">Dentro do tempo recomendado</h3>
        </div>
        <p class="media">Sua média diaria: ${horas.toFixed(2).replace("." , ":")} horas</p>
        <p class="recomendado">Média diária recomendada: 0 horas</p>`
        }
    }
});
