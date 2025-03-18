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
