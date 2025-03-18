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
        listElement.innerHTML = "";

        for (let index = 0; index < amigos.length; index++) {
            const itemElement = document.createElement('li');
            itemElement.innerHTML = amigos[index];
            listElement.appendChild(itemElement);
        }
    }
    inputElement.value = '';
}
function sortearAmigo() {
    if(amigos.length == '') {
        alert('Você precisa adicionar amigos!');
    } 
    else 
    {
        const listElement = document.getElementById('resultado');
        listElement.innerHTML = "";

        const indexAleatorio = Math.floor(Math.random() * amigos.length);

        const itemElement = document.createElement('li');
        itemElement.innerHTML = "O amigo secreto sorteado é: " + amigos[indexAleatorio];
        listElement.appendChild(itemElement);
    }
    
}
