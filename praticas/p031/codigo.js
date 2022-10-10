let entradaEmail = document.getElementById('t-email').value
    let entradaSenha = document.getElementById('t-senha').value

    let botao = document.getElementById('botao-submit')

    let letras = []


function entrou() {
    for(let c = 0;c < entradaEmail.length;c++) {
        letras.push(entradaEmail[c])
    }

    if(entradaEmail.length == '' || letras.indexOf('@') === -1 || entradaSenha == '' || entradaSenha.length < 8) {
        botao.animate
    }
}
