let listaDeAmigos = [];

function adicionarAmigo() {
    // Capturar o input e o nome digitado
    let input = document.querySelector('#amigo');
    let nome = input.value.trim();

    // Verificar se o campo está vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        input.focus();
        return;
    }

    // Verificar se o nome já foi adicionado e evitar duplicados
    if (listaDeAmigos.some(a => a.toLowerCase() === nome.toLowerCase())) {
        alert('Este nome de amigo já foi adicionado.');
        return;
    }

    // Adiciona o nome ao array
    listaDeAmigos.push(nome);
    input.value = '';
    input.focus();

  
    atualizarListaDeAmigos();
}

// Exibe a lista na interface 
function atualizarListaDeAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';

    listaDeAmigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Permitir adicionar pressionando Enter
document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#amigo");

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            adicionarAmigo();
        }
    });
});

function sortearAmigo() {
    let input = document.querySelector('#amigo');
    let resultado = document.querySelector('#resultado');
        
    if (listaDeAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos antes de sortear.');
        input.focus();
        return;
    }


    let amigoSecreto = Math.floor(Math.random() * listaDeAmigos.length);
    let sorteado = listaDeAmigos[amigoSecreto];
    
    resultado.innerHTML = `<li>O amigo sorteado foi: ${sorteado}</li>`;
    listaDeAmigos.splice(amigoSecreto, 1);
    atualizarListaDeAmigos();

    input.value = '';
    input.focus();
 
}  

   





