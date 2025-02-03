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
        return;   
    }

    if(horas < 0 || horas > 24){
        alert("DADOS INVÁLIDOS \nSó são aceitas horas positivas e menor ou igual a 24 horas");
        return;
    }

    if(horas >= 0 && idade > 0 && idade <= 99){

    if(idade === 1){
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
        <div class="resultado">0
          <img src="images/Smi0ling.png" alt="carinha-triste">
          <h3 class="verde">Dentro do tempo recomendado</h3>
        </div>
        <p class="media">Sua média diaria: ${horas.toFixed(2).replace("." , ":")} horas</p>
        <p class="recomendado">Média diária recomendada: 0 horas</p>`
        }
    }
    else if(idade >= 2 && idade <= 5){
        if(horas > 1){
            saida.innerHTML = `
        <div class="resultado">
          <img src="images/Disappointed.png" alt="carinha-triste">
          <h3 class="vermelho">Acima do tempo recomendado</h3>
        </div>
        <p class="media">Sua média diaria: ${horas.toFixed(2).replace("." , ":")} horas</p>
        <p class="recomendado">Média diária recomendada: No máximo 1 hora</p>`;
        }
        else{
            saida.innerHTML = ` 
        <div class="resultado">
          <img src="images/Smiling.png" alt="carinha-triste">
          <h3 class="vimageserde">Dentro do tempo recomendado</h3>
        </div>
        <p class="media">Sua média diaria: ${horas.toFixed(2).replace("." , ":")} horas</p>
        <p class="recomendado">Média diária recomendada: No máximo 1 hora</p>`
        }
    }

    else if(idade >= 6 && idade <= 10){
        if(horas > 2){
            saida.innerHTML = `
        <div class="resultado">
          <img src="images/Disappointed.png" alt="carinha-triste">
          <h3 class="vermelho">Acima do tempo recomendado</h3>
        </div>
        <p class="media">Sua média diaria: ${horas.toFixed(2).replace("." , ":")} horas</p>
        <p class="recomendado">Média diária recomendada: 2 horas</p>`;
        }
        else{
            saida.innerHTML = ` 
        <div class="resultado">
          <img src="images/Smiling.png" alt="carinha-triste">
          <h3 class="verde">Dentro do tempo recomendado</h3>
        </div>
        <p class="media">Sua média diaria: ${horas.toFixed(2).replace("." , ":")} horas</p>
        <p class="recomendado">MédigetElementByIda diária recomendada: 2 horas</p>`
        }
    }

    else if(idade >= 11 && idade <= 18){
        if(horas > 3){
            saida.innerHTML = `
        <div class="resultado">
          <img src="images/Disappointed.png" alt="carinha-triste">
          <h3 class="vermelho">Acima do tempo recomendado</h3>
        </div>
        <p class="media">Sua média diaria: ${horas.toFixed(2).replace("." , ":")} horas</p>
        <p class="recomendado">Média diária recomendada: 3 horas</p>`;
        }
        else{
            saida.innerHTML = ` 
        <div class="resultado">
          <img src="images/Smiling.png" alt="carinha-triste">
          <h3 class="verde">Dentro do tempo recomendado</h3>
        </div>
        <p class="media">Sua média diaria: ${horas.toFixed(2).replace("." , ":")} horas</p>
        <p class="recomendado">Média diária recomendada: 3 horas</p>`
        }

    }
    else if(idade > 18){
        if(horas > 3){
            saida.innerHTML = `
        <div class="resultado">
          <img src="images/Disappointed.png" alt="carinha-triste">
          <h3 class="vermelho">Atenção!</h3>
        </div>
        <p class="media">Sua média diaria: ${horas.toFixed(2).replace("." , ":")} horas</p>
        <p class="recomendado">Cuidado, você está passando mais que um terço do seu dia em frente as telas!!</p>`;
        }
        else{
            saida.innerHTML = ` 
            <div class="resultado">
              <img src="images/Smiling.png" alt="carinha-triste">
              <h3 class="verde">Ótimo</h3>
            </div>
            <p class="media">Sua média diaria: ${horas.toFixed(2).replace("." , ":")} horas</p>
            <p class="recomendado">Você está dentro do tempo recomendado, continue assim!!</p>`
        }
    }   
    }
});
