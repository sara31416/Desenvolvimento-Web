//exemplo de laço for em javascript

for(var fator1 = 0; fator1 <= 10; fator1++) {
    console.log("Tabuada do n° " + fator1)
   for(var fator2 = 0; fator2 <= 10; fator2++) {
    var resultado = fator1 + fator2
    console.log(fator1 + "x " + fator2 + " = " + resultado)
   }
}

var nomes = [`Sara`, `Vinicius`, `Diana`, `Edilene`, `Odair`]

for(var vetorDeNomes = 0; vetorDeNomes <= nomes.length - 1; vetorDeNomes++){
    console.log(nomes[vetorDeNomes])
}