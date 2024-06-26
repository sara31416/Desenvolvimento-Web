var nomes = [`Sara`, `Diana`, `Vinicius`]
console.log(nomes)

nomes.push(`Odair`, `Edilene`, `Nilda`)
console.log(nomes)

console.log(`o tamanho do array é `+ nomes.length)

nomes.reverse()
console.log(nomes)

nomes.shift(nomes)
console.log(nomes)

nomes.sort(nomes)
console.log(nomes)

var posicaodiana = nomes.indexOf(Diana)
nomes.splice(posicaodiana,1)
console.log(nomes)
