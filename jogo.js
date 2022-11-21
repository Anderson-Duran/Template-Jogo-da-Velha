let quadrados = [...document.querySelectorAll('.quadrado')];
let jogador = 'X';
let ganhador = false;
let btn = document.querySelector("#btn");
let jogadorAtual = document.querySelector('p');
let conteudos = [...document.querySelectorAll('main')];



function geraMatriz(){
    let matriz = []
    for (let i =0;i<3;i++){
        aux=[]
        for (let j=0;j<3;j++){
            aux.push('')
        }
        matriz.push(aux);
    }
    return matriz
}


function marcarQuadrado(valor){
    valor.innerHTML=jogador;
    let line = valor.dataset.line;
    let column = valor.dataset.column;
    pontuacao[line][column] = jogador;
    verificaJogo();
}

function trocarJogador(){
    if (jogador == 'X'){
        jogador = "O";
    }
    else{
        jogador = "X";
    }
    jogadorAtual.textContent = `Jogador atual: ${jogador}`;
}


function verificaJogo(){
    
    for (let i=0; i < pontuacao.length; i++){
        if (pontuacao[0][0] != '' && pontuacao[0][0] == pontuacao[1][0] && pontuacao[0][0] == pontuacao[2][0]){
            const novoElem = document.createElement('div');
            novoElem.setAttribute('class','resultado')
            novoElem.textContent=`Vencedor é o jogador ${jogador}!!!`;
            document.querySelector('main').appendChild(novoElem);
            ganhador = true;
            jogadorAtual = `Jogador Atual: ${jogador}`
            break;
        }
        if (pontuacao[0][1] != '' && pontuacao[0][1] == pontuacao[1][1] && pontuacao[0][1] == pontuacao[2][1]){
            const novoElem = document.createElement('div');
            novoElem.setAttribute('class','resultado')
            novoElem.textContent=`Vencedor é o jogador ${jogador}!!!`;
            document.querySelector('main').appendChild(novoElem);
            ganhador = true;
            jogadorAtual = `Jogador Atual: ${jogador}`
            break;
        }
        if (pontuacao[0][2] != '' && pontuacao[0][2] == pontuacao[1][2] && pontuacao[0][2] == pontuacao[2][2]){
            const novoElem = document.createElement('div');
            novoElem.setAttribute('class','resultado')
            novoElem.textContent=`Vencedor é o jogador ${jogador}!!!`;
            document.querySelector('main').appendChild(novoElem);
            ganhador = true;
            jogadorAtual = `Jogador Atual: ${jogador}`
            break;
        }
    }

    for (let i=0; i < pontuacao.length; i++){
        if (pontuacao[0][0] != '' && pontuacao[0][0] == pontuacao[0][1] && pontuacao[0][0] == pontuacao[0][2]){
            const novoElem = document.createElement('div');
            novoElem.setAttribute('class','resultado')
            novoElem.textContent=`Vencedor é o jogador ${jogador}!!!`;
            document.querySelector('main').appendChild(novoElem);
            ganhador = true;
            jogadorAtual = `Jogador Atual: ${jogador}`
            break;
        }
        if (pontuacao[1][0] != '' && pontuacao[1][0] == pontuacao[1][1] && pontuacao[1][0] == pontuacao[1][2]){
            const novoElem = document.createElement('div');
            novoElem.setAttribute('class','resultado')
            novoElem.textContent=`Vencedor é o jogador ${jogador}!!!`;
            document.querySelector('main').appendChild(novoElem);
            ganhador = true;
            jogadorAtual = `Jogador Atual: ${jogador}`
            break;
        }
        if (pontuacao[2][0] != '' && pontuacao[2][0] == pontuacao[2][1] && pontuacao[2][0] == pontuacao[2][2]){
            const novoElem = document.createElement('div');
            novoElem.setAttribute('class','resultado')
            novoElem.textContent=`Vencedor é o jogador ${jogador}!!!`;
            document.querySelector('main').appendChild(novoElem);
            ganhador = true;
            jogadorAtual = `Jogador Atual: ${jogador}`
            break;
        }
    }

    for (let i=0; i < pontuacao.length; i++){
        if (pontuacao[0][0] != '' && pontuacao[0][0] == pontuacao[1][1] && pontuacao[0][0] == pontuacao[2][2]){
            const novoElem = document.createElement('div');
            novoElem.setAttribute('class','resultado')
            novoElem.textContent=`Vencedor é o jogador ${jogador}!!!`;
            document.querySelector('main').appendChild(novoElem);
            ganhador = true;
            jogadorAtual = `Jogador Atual: ${jogador}`
            break;
        }
        if (pontuacao[2][0] != '' && pontuacao[2][0] == pontuacao[1][1] && pontuacao[2][0] == pontuacao[0][2]){
            const novoElem = document.createElement('div');
            novoElem.setAttribute('class','resultado')
            novoElem.textContent=`Vencedor é o jogador ${jogador}!!!`;
            document.querySelector('main').appendChild(novoElem);
            ganhador = true;
            jogadorAtual = `Jogador Atual: ${jogador}`
            break;
        }
    }
    
}

let reset = ()=>{
    
    quadrados.map((el)=>{
        el.textContent = '';
        el.classList.remove('selecionado');
    })
    if (document.querySelector('.resultado') != null) {
        document.querySelector('.resultado').remove(this);
    }
    delete pontuacao;
    jogo();
}


function jogo(){
    pontuacao = geraMatriz();
    ganhador = false;
    jogador = 'X';

    jogadorAtual.textContent = `Jogador Atual: ${jogador}`;

    quadrados.map((el)=>{
        el.addEventListener('click', (el)=>{
            quadrado = el.target
           
            if (quadrado.textContent == '' && ganhador == false){
                marcarQuadrado(quadrado);
                quadrado.classList.toggle('selecionado');
                trocarJogador();
            }
        })
    })

    btn.onclick=reset;
    
}

jogo()

