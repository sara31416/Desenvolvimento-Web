//Errrado
var nome = `fulano` // variavel de escopo global

if (nome == `Fulano`) {
    var sobrenome = `teste` // variavel de escopo local
}

console.log(sobrenome)

//Certo
let nome = `fulano` // variavel de escopo global

if (nome == `Fulano`) {
    let sobrenome = `teste` // variavel de escopo local
}

console.log(sobrenome)

// Escopo de variaveis

let nome = `Fulano`
let cpf = `3243243225`

xonsole.log(cpf)
if(nome == `Fulano`){
    let sobrenome = `Teste`
    console.log(Sobrenome)
}

for(let index = 0; index < 1; index++) {
    let nome2 = `dolinho`
}

console.log(nome2)