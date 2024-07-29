// funçaõ anonima
var exibeMensagem = function(msg) {
    console.log(msg)
}

exibeMensagem(`Hello world`)

// Arrow Function ECMAScript 6
var exibeNome = (nome) => {
    console.log(nome)
}

exibeNome(`Fulano`)




function imprimirNome(pessoa){
    console.log (pessoa)
}

imprimirNome(`Sara`)

var pessoa = {
    nome:`Sara`,
    idade: 18
}

imprimirNome(pessoa.nome)