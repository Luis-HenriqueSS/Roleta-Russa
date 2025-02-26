let balaVerdadeira = Math.floor(Math.random() * 6) + 1

let rotacaoTambor = 0 //GIRAR O TAMBOR APÓS CADA DISPARO FALSO
let numeroTambor = 1 //COMPARAR SE A PROXIMA CAPSULA CONTEM A BALA
//TRANSFORMAR A IMAGEM E BOTÕES EM OBJETOS NO JAVA SCRIPT
let tamborImagem = document.getElementById("tamborImagem")
let puxarGatilho = document.getElementById("puxarGatilho")
let girarTambor = document.getElementById("girarTambor")
//LEVAR O CLICK DO BOTÃO PARA A FUNÇÃO ESPECIFICA
document.getElementById("girarTambor").addEventListener("click", girar)
document.getElementById("puxarGatilho").addEventListener("click", disparar)

function girar() {

    girarTambor.disabled = true //DESABILITAR BOTÃO PRO USUARIO NÃO FAZER MERDA
    let voltasTambor = Math.floor(Math.random() * 6) * 360 + 360
    //GIRAR O TAMBOR RAPIDAMENTE
    tamborImagem.style.transition = "transform 1s ease-out"
    tamborImagem.style.transform = `rotate(${rotacaoTambor + voltasTambor}deg)`

    setTimeout(() => {
        rotacaoTambor += voltasTambor
        puxarGatilho.disabled = false //VOLTAR BOTÕES
        girarTambor.disabled = false
    }, 1000)

    numeroTambor = 1 //REDEFINIÇÃO DA BALA
    document.getElementById("contadorBalas").textContent = `(0/6)`
    balaVerdadeira = Math.floor(Math.random() * 6) + 1
}

function disparar() {

    puxarGatilho.disabled = true
    girarTambor.disabled = true
    tamborImagem.style.transition = "transform 0.5s ease-out"
    rotacaoTambor += 60
    tamborImagem.style.transform = `rotate(${rotacaoTambor}deg)`

    if (balaVerdadeira == numeroTambor) {
        setTimeout(() => {
            morteMorrida()
        }, 600) //DELAY PRO TAMBOR GIRAR ANTES DA BALA SER DISPARADA

    } else {
        setTimeout(() => {
            document.getElementById("contadorBalas").textContent = `(${numeroTambor}/6)`
            numeroTambor ++
            girarTambor.disabled = false
            puxarGatilho.disabled = false
        }, 600) //AUMENTAR E MOSTRAR O NUMERO ATUAL DA CAPSULA

    }
}

function morteMorrida() {

    document.getElementById("mensagemMorte").style.display = "block"
    document.getElementById("sangue").style.display = "block"
    puxarGatilho.disabled = true
    girarTambor.disabled = true

    setTimeout(() => {
        document.getElementById("mensagemMorte").style.display = "none"
        document.getElementById("sangue").style.display = "none"
        girarTambor.disabled = false
    }, 2000)
    //VOLTAR VARIAVEIS PARA FORMA PADRÃO
    rotacaoTambor = 0
    numeroTambor = 1
    tamborImagem.style.transition = "none"
    tamborImagem.style.transform = `rotate(0deg)`
    document.getElementById("contadorBalas").textContent = `(0/6)`
}