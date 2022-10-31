// 0 = Água / Nada
// 1 = Navio

/* let mapaNavios = [
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
]
*/



// Mapa gabarito:
let mapaNavios = []

// Mapa que o jogador vai ver:
let mapaJogador = []

// Variável para saber quando acabou o jogo; Se chegar a 0, o jogo acaba.
let naviosRestantes = 0

// Variável para saber quantas jogadas necessárias para vencer.
let numJogadas = 0



// Função para preparar o mapa e iniciar o jogo:
function iniciarJogo(tamanho, quantidadeNavios) {
    //limpando console
    console.clear()
    // Verifica se existem mais navios que casas disponíveis.
    if (quantidadeNavios > tamanho * tamanho) {
        return 'Quantidade de navios maior que a quantidade de casas disponíveis!'
    }
    else {
        // Resetando as variáveis:
        mapaNavios = []
        mapaJogador = []
        numJogadas = 0
        naviosRestantes = quantidadeNavios

        // Criando as casas vazias:
        for (let i = 0; i < tamanho; i++) {
            let linhaNavios = []
            let linhaJogador = []
            for(let j = 0; j < tamanho; j++) {
                linhaNavios.push(0)
                linhaJogador.push(0)
            }
            mapaJogador.push(linhaJogador)
            mapaNavios.push(linhaNavios)
        }

        // preenchendo as casas aleatoriamentes:
        for(let i = 0; i < quantidadeNavios; i++) {
            let navioAdicionado = false

            while (navioAdicionado == false) {
                // Math.floor serve para arredondar para baixo
                let coluna = Math.floor(Math.random() * tamanho)
                let linha = Math.floor(Math.random() * tamanho)

                if(mapaNavios[linha][coluna] == 0) {
                    mapaNavios[linha][coluna] = 1
                    navioAdicionado = true
                }
            }
        }
        console.table(mapaJogador)
    }    
}



// Função para poder jogar:
function jogar(linha, coluna) {
    console.clear
    if(mapaNavios[linha] == undefined || mapaNavios[linha][coluna] == undefined){
        return 'Valor inválido.'
    }
    else {
        if(mapaNavios[linha][coluna] == 1) {
            mapaJogador[linha][coluna] = 'X'
            mapaNavios[linha][coluna] = 0
            naviosRestantes--
            console.log('Você atingiu um návio!')
        }
        else {
            mapaJogador[linha][coluna] = '-'
            console.log('Você errou! Água atingida.')
        }

        console.table(mapaJogador)
        
        numJogadas++
        console.log(`Quantidade de jogadas: ${numJogadas}.`)

        if(naviosRestantes == 0) {
            return ('Parabéns!! Você ganhou!')
        }
        else {
            return `Navios restantes: ${naviosRestantes}.`
        }
    }
}
