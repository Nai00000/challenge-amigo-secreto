//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionarAmigo() {
    let inputElement = document.getElementById('amigo');
    
    const nomeDoAmigo = `${inputElement.value}`.trim();
    if (nomeDoAmigo == '') {
        alert('Por favor, insira um nome.');
    } 
    else 
    {
        amigos.push(nomeDoAmigo);

        const listElement = document.getElementById('listaAmigos');

        const itemElement = document.createElement('li');
        itemElement.innerHTML = amigos[amigos.length - 1];
        listElement.appendChild(itemElement);
        
    }
    inputElement.value = '';
}
