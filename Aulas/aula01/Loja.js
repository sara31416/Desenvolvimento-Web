var produtos = [
    {
        nome: "racao para gatos filhotes",
        descricao: "3 Kg de ração para gatos filhotes, sabor frango",
        valor: 60,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "racao para cachorros filhotes",
        descricao: "3 Kg de ração para cachoros filhotes, sabor carne",
        valor: 65,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "racao para gatos adultos",
        descricao: "3 Kg de ração para gatos adultos, sabor salmon",
        valor: 65,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "racao para cachorros adultos",
        descricao: "3 Kg de racao para cachorros adultos, sabor frango",
        valor: 70,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "shampoo anti pulgas para gatos",
        descricao: "250 ml de shampoo anti pugas para gatos",
        valor: 25,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "shampoo anti pulgas para cachorros",
        descricao: "250 ml de shampoo anti pulgas para cachorros",
        valor: 25,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "kit shampoo condicionador e loção",
        descricao: "kit anti pulga para cachorros filhotes",
        valor: 45,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "kit shampoo condicionador e loção",
        descricao: "kit anti pulga para gatos filhotes",
        valor: 45,
        imagem: "https://via.placeholder.com/150"
    },
]

var conteudoPrincipal = document.getElementById(`conteudo-principal`)

for (var produto of produtos) {
    var conteudoproduto = document.createElement(`div`)
    conteudoproduto.className = "conteudo-produto"

    conteudoProduto.appendChild( document.createElement(`img`).src = "https://via.placeholder.com/150")

    var nomeProduto = document.createElement(h2)
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    var descricaoProduto = document.createElement(`p`)
    descricaoProduto.textContent = produto.descricao
    conteudoProduto.appendChild(descricaoproduto)

    var valorproduto = document.createElement(`p`)
    valorProduto.textContent = `R$ ${produto.valor}`
    conteudoProduto.appendChild(valorproduto)

    var bootaoComprar = document.createElement(`div`)
    botoes.className = "btn"

    var botaoComprar = document.createElement(`button`)
    botaoComprar.textContent = "comprar"
    botoes.appendChild(botaoComprar)

    var botaoDetalhes = document.createElement(`button`)
    botaoDetalhes.textContent = "Detalhes"
    botoes.appendChild(botaoDetalhes)

    conteudoProduto.appendChild(botoes)

    conteudoPrincipal.appendChild(conteudoproduto)
}