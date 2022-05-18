/*
OBJETIVO 1 - Quando passar o mouse em cima do personagem temos que:
    
    - colocar a classe selecionado no personagem que está o mouse;
    - retirar a classe selecionado do anterior


OBJETIVO 2 - Quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

    - Trocar a imagem e o nome do jogador 1

*/

// const homemDeFerro = document.getElementById('homem-de-ferro');
// const thor =  document.getElementById('thor');
// const hulk =  document.getElementById('hulk');
// const nova =  document.getElementById('nova');
// const viuvaNegra =  document.getElementById('viuva-negra');
// const capitaoAmerica =  document.getElementById('capitao-america');
// const ultron =  document.getElementById('ultron');
// const doutorDoom =  document.getElementById('doutor-doom');
// const fenix =  document.getElementById('fenix');

// homemDeFerro.addEventListener('mouseenter', ()=> {
//     homemDeFerro.classList.add('selecionado')
//     thor.classList.remove('selecionado')
// })

//fazendo uma lista de personagens

const personagens = document.querySelectorAll('.personagem')




personagens.forEach((personagem)=>{
        personagem.addEventListener('mouseenter', () => {
            
            const idSelecionado = personagem.attributes.id.value;

            if(idSelecionado === 'ultron') return

            const personagemSelecionado = document.querySelector('.selecionado')

            personagemSelecionado.classList.remove('selecionado') 

            personagem.classList.add('selecionado')

            
            const imagemJogador1 = document.getElementById('personagem-jogador-1')

            imagemJogador1.src = `src/imagens/${idSelecionado}.png`

            const nomeJogador1 = document.getElementById('nomeJogador1')
            
            const nomeSelecionado = personagem.getAttribute('data-name')

            nomeJogador1.innerHTML = nomeSelecionado

        })
         
    }
)
