let songEl = document.querySelector('audio')
songEl.volume = 0.4
songEl.play()

let indiceMusica = 0

songEl.addEventListener('ended', () => {
    songEl.src = `songs/[${indiceMusica}].mp3`
    indiceMusica++
})

let botaoExpandirRetrairEl = document.querySelectorAll('.botao-expandir-retrair')

botaoExpandirRetrairEl[0].innerHTML = '+'

for(let i = 0; i < botaoExpandirRetrairEl.length; ++i)
    botaoExpandirRetrairEl[i].addEventListener('click', () => {
        let paragrafoEl = botaoExpandirRetrairEl[i].parentElement
        paragrafoEl.classList.toggle('expandido')

    if(botaoExpandirRetrairEl[i].innerHTML == '+')
        botaoExpandirRetrairEl[i].innerHTML = '-'
    
    else if(botaoExpandirRetrairEl[i].innerHTML == '-')
        botaoExpandirRetrairEl[i].innerHTML = '+'
    })

let datasInfo = [
    {
        data: '12/03/2022',
        info: 'Assalto ao telefone do futuro namorado (ele estava jogando bola) 😁'
    },
    {
        data: '23/06/2022',
        info: 'Fotoca fofita'
    },
    {
        data: '30/06/2022',
        info: 'Papando (2,5kg de tomamate 😋)'
    },
    {
        data: '21/07/2022',
        info: 'Batendo papinho e dando uma risadinhas 🤭'
    },
    {
        data: '30/07/2022',
        info: 'Noiva do crush na festa junina 😚'
    },
    {
        data: '14/08/2022',
        info: 'A caminho do aniversário do crush 😱'
    },
    {
        data: '24/08/2022',
        info: 'Dando uns amassos no crush 😏'
    },
    {
        data: '16/09/2022',
        info: 'Na aula de DET, mandando foto para o sogrinho 😎'
    },
    {
        data: '29/09/2022',
        info: 'Na aula de ARTES, com o amigo preso pelo secador 😒'
    },
    {
        data: '21/10/2022',
        info: 'Aniversário da Pollyana (ou seria Polliana? Talvez Poliana?). Apresentando o gatinho para a família toda 😻'
    },
    {
        data: '26/10/2022',
        info: 'Fazendo tratamento no rosto do boyfriend 💅'
    },
    {
        data: '09/11/2022',
        info: 'Dia de tirar foto do currículo Lattes. Aproveitando p tirar mais uma foto fofitcha 😽'
    },
    {
        data: '18/11/2022',
        info: 'Dando aquela descansada, afinal, gatinhas dormem cerca de 16 horas por dia! 🥱'
    },
    {
        data: '21/11/2022',
        info: 'Larissa Manoela? 😲'
    },
    {
        data: '21/11/2022',
        info: 'Há muito tempo, num reino distante, viviam um rei, uma rainha e sua filhinha, a princesa <br>Branca de Neve. Sua pele era branca como a neve, os lábios vermelhos (e dentes? 🤔) como o sangue <br> e os cabelos pretos como o ébano.'
    },
    {
        data: '22/11/2022',
        info: 'Cansadinha pós trabalho da Juju. Missão cumprida! 🤗'
    },
    {
        data: '26/11/2022',
        info: 'Despedida do Lucas. Cansada e estressada com esse povo 😤'
    },
    {
        data: '28/11/2022',
        info: 'Boas lembranças 🤭'
    },
    {
        data: '28/11/2022',
        info: '😙'
    },
    {
        data: '29/11/2022',
        info: 'Queridinha da professora? 🤓'
    },
    {
        data: '04/12/2022',
        info: 'Que linda! O narrador até se abala 😳'
    },
    {
        data: '06/12/2022',
        info: 'Último dia de aula de 2022! Expondo meu suquinho de uva 🍇'
    },
    {
        data: '06/12/2022',
        info: 'Soninho 😴'
    },
    {
        data: '12/12/2022',
        info: 'Agora perdi o ar 🥵'
    },
    {
        data: '15/12/2022',
        info: 'Penteadeira 💅'
    },
    {
        data: '15/12/2022',
        info: 'Pezuda fofucha 😻'
    },
    {
        data: '16/12/2022',
        info: 'Leitinho de canudinho 😘'
    },
    {
        data: '18/12/2022',
        info: 'Passeio com a família! 🤩'
    },
    {
        data: '18/12/2022',
        info: 'Amantes de museu 🧐'
    },
    {
        data: '18/12/2022',
        info: 'Amantes de novena? 🤔'
    },
    {
        data: '26/12/2022',
        info: 'Amantes de morango! 🍓'
    },
    {
        data: '31/12/2022',
        info: 'Mais uma dessas e o narrador desmaia de vez 🥵'
    },
    {
        data: '06/01/2023',
        info: 'Soninho da beleza 😴'
    },
    {
        data: '11/01/2023',
        info: 'Dando aquele grau no umbigo 🤠'
    },
    {
        data: '21/01/2023',
        info: 'Mais soninho 😸'
    },
    {
        data: '22/01/2023',
        info: 'Alian... Ops, desmaiei 😍'
    },
    {
        data: '24/01/2023',
        info: '"Um homem sem chifres é um homem sem defesas". Até o narrador já viu sua amada ir p cama com outro gatinho 😭'
    },
    {
        data: '25/01/2023',
        info: 'Florzinhas! 💐'
    },
    {
        data: '19/02/2023',
        info: 'Carnaval com a momis 🥳'
    },
    {
        data: '12/03/2023',
        info: 'Homi aranha 🕸️'
    },
    {
        data: '12/06/2023',
        info: 'Levando o gatinho para passear na cachoeira 🍃'
    },
    {
        data: '20/08/2023',
        info: 'Assistindo o jogo do gatinho ⚽'
    },
    {
        data: '09/10/2023',
        info: 'Que fofura! 🥰'
    },
    {
        data: '12/10/2023',
        info: 'Que foto fofinha 🥺. (Narrador se emocionou)'
    },
    {
        data: '01/11/2023',
        info: 'Halloween 🎃'
    },
    {
        data: '06/11/2023',
        info: '17 anos da gatinhaaaaa!!! 🥳🥳🥳'
    }
]

const servidorImagens = 'https://github.com/marcogrossi-mtb/-GAT-niver_imagens/blob/main/'
const TAM = 45

let imagemPrincipalEl = document.querySelector('#slide')
let slideDireitaEl = document.querySelector('#slide-direita')
let slideEsquerdaEl = document.querySelector('#slide-esquerda')

let indiceAntFoto = 45
let indiceFotoAtual = 0 
let indiceProxFoto = 1

const navegacao = (botaoClicado) => {
    if(botaoClicado === 1) {
        if(indiceProxFoto < TAM)
            indiceProxFoto++
        else
            indiceProxFoto = 0

        if(indiceAntFoto < TAM)
            indiceAntFoto++
        else
            indiceAntFoto = 0
        
        if(indiceFotoAtual < TAM)
            indiceFotoAtual++
        else
            indiceFotoAtual = 0
    }

    else if(botaoClicado == -1) {
        if(indiceFotoAtual > 0) 
            indiceFotoAtual--
        else
            indiceFotoAtual = TAM

        if(indiceAntFoto > 0) 
            indiceAntFoto--
        else
            indiceAntFoto = TAM

        if(indiceProxFoto > 0) 
            indiceProxFoto--
        else
            indiceProxFoto = TAM
    }

    imagemPrincipalEl.src = `servidor/[${indiceFotoAtual}]img.jpg`
    slideDireitaEl.src = `servidor/[${indiceProxFoto}]img.jpg`
    slideEsquerdaEl.src = `servidor/[${indiceAntFoto}]img.jpg`

    info.innerHTML = `<span>${indiceFotoAtual}/45</span><h2>${datasInfo[indiceFotoAtual].data}</h2><p>${datasInfo[indiceFotoAtual].info}</p>`
}

let botaoAnteriorEl = document.querySelector('#anterior')
let botaoProximoEl = document.querySelector('#proximo')

botaoProximoEl.addEventListener('click', () => navegacao(1))
botaoAnteriorEl.addEventListener('click', () => navegacao(-1))

let infoEl = document.querySelector('#info')

/*
imagemPrincipalEl.addEventListener('mouseover', () =>  info.innerHTML = `<h2>${datasInfo[indiceFotoAtual].data}</h2><p>${datasInfo[indiceFotoAtual].info}</p>`)
imagemPrincipalEl.addEventListener('mouseout', () => info.innerHTML = '')
*/