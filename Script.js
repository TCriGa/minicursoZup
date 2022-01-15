const imagem = document.querySelector('#imagem');
const imagem2 = document.querySelector('#imagem2');
const imagem3 = document.querySelector('#imagem3');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie = document.querySelector('#especie');
const especie2 = document.querySelector('#especie2');
const especie3 = document.querySelector('#especie3');
const condicao = document.querySelector('#status');
const condicao2 = document.querySelector('#status2');
const condicao3 = document.querySelector('#status3');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() *671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio},${numeroAleatorio+1},${numeroAleatorio+2}`, {
        method:'GET',
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data[0].image;
        imagem2.src = data[1].image;
        imagem3.src = data[2].image;
        imagem.alt = data[0].name;
        imagem2.alt = data[1].name;
        imagem3.alt = data[2].name;
        nomeDoPersonagem.innerHTML = data[0].name;
        nomeDoPersonagem2.innerHTML = data[1].name;
        nomeDoPersonagem3.innerHTML = data[2].name;
        especie.innerHTML = data[0].species;
        especie2.innerHTML = data[1].species;
        especie3.innerHTML = data[2].species;
        condicao.innerHTML = data[0].status;
        condicao2.innerHTML = data[1].status;
        condicao3.innerHTML = data[2].status;



    });
    
}

botao.onclick = pegarPersonagem;