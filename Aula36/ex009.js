let div = document.querySelector("#div-legenda")

console.log(div.getBoundingClientRect())

function criarMensagemAbaixo(div, html) {
    let mensagem = document.createElement("div")
    mensagem.style.cssText = "position: absolute; color: red;"

    let coords = obterCoordenadas(div)

    mensagem.style.left = coords.left + "px"
    mensagem.style.top = coords.bottom + "px"

    mensagem.innerHTML = html

    return mensagem
}  

function criarMensagemAcima(div, html) {
    let mensagem = document.createElement("div")
    mensagem.style.cssText = "position: absolute; color: red;"

    let coords = obterCoordenadas(div)

    mensagem.style.left = coords.left + "px"
    mensagem.style.top = coords.bottom + "80px"

    mensagem.innerHTML = html

    return mensagem
}  

function obterCoordenadas(div) {
    let coords = div.getBoundingClientRect()

    return {
        top: coords.top + window.pageYOffset,
        right: coords.right + window.pageXOffset,
        bottom: coords.bottom + window.pageYOffset,
        left: coords.left + window.pageXOffset
    }
}

