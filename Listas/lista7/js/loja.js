var produtos = [
    {
        nome: "shampoo anti pulga para cachorros",
        descricao: "500 ml de shampoo anti pulgas",
        valor: 29.99,
        imagem: "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fsuperhuman-era-is-it-worth-reading-v0-uppbjiv8p93c1.jpg%3Fauto%3Dwebp%26s%3Dc3d83cc17d07a76e12e6572cc3199ac0031d78d0"
    },
    {
        nome: "condicionador anti pulga para cachorros",
        descricao: "500 ml de condicionador anti pulga",
        valor: 39.99,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "kit shampoo, condicionador e colonia para cachorros",
        descricao: "O shampoo e o condicionador contem 500 ml e a colonia 100 ml",
        valor: 89.99,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "shampoo anti pulga para gatos",
        descricao: "500 ml de shampoo anti pulgas",
        valor: 29.99,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "condicionador anti pulga para gatos",
        descricao: "500 ml de condicionador anti pulga",
        valor: 39.99,
        imagem: "https://via.placeholder.com/150"
    }

]

var conteudoPrincipal = document.getElementById(`conteudo-principal`)

for (produto of produtos) {
    var conteudoProduto = document.createElement(`div`)
    conteudoProduto.className = "conteudo-produto"

    var imagemProduto = document.createElement(`img`)
    imagemProduto.src = produto.imagem
    conteudoProduto.appendChild(imagemProduto)

    var nomeProduto = document.createElement(`h2`)
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    var descricaoProduto = document.createElement(`p`)
    descricaoProduto.textContent = produto.descricao
    conteudoProduto.appendChild(descricaoProduto)

    var valorProduto = document.createElement(`P`)
    valorProduto.textContent = `R$ ${produto.valor}`
    conteudoProduto.appendChild(valorProduto)

    var botoes = document.createElement(`div`)
    botoes.className = "bnt"

    var botaoComprar = document.createElement(`button`)
    botaoComprar.textContent = "Comprar"
    botoes.appendChild(botaoComprar)

    var botaoDetalhes = document.createElement(`button`)
    botaoDetalhes.textContent = "Detalhes"
    botoes.appendChild(botaoDetalhes)

    conteudoProduto.appendChild(botoes)

    conteudoPrincipal.appendChild(conteudoProduto)

}