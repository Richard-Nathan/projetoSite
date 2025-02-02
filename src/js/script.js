
function getLocalTimeInTimezone(timezone) {
    const date = new Date()
    return date.toLocaleString("pt-BR", { timeZone: timezone })
}
function update() {
    const tokyoTimeElement = document.getElementById("hora")
    if (!tokyoTimeElement) return
    tokyoTimeElement.textContent = getLocalTimeInTimezone("Asia/Tokyo")

}
let parar
const mediaQuery = window.matchMedia("(max-width:550px)")
function verificarTamanho(e) {
    if (e.matches) {
        //matches é uma propriedade do objeto retornado(uma mediaquery) quando seu usa matchmedia,
        //no qual verifica se a condição (tamanho) é verdadeira.
        clearInterval(parar)
    } else {
        update();
        setInterval(update, 1000)

    }
}
verificarTamanho(mediaQuery)
mediaQuery.addEventListener("change", verificarTamanho)


function nada() {
    let nome = document.getElementById('inome').value
    alert(`Desculpe ${nome}, ainda não aprendi essa parte :)`)
}