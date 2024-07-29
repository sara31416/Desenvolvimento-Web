var produtos = [
    {
        nome: "shampoo antipulga para cachorros",
        descricao: "500 ml de shampoo antipulgas",
        valor: 29.99,
        imagem: "data:image/jpeg;base64,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"
    },
    {
        nome: "condicionador para cachorros",
        descricao: "500 ml de condicionador sanol",
        valor: 39.99,
        imagem: "https://cobasi.vteximg.com.br/arquivos/ids/335442/3206667.jpg?v=638134548935100000"
    },
    {
        nome: "kit shampoo, condicionador e colonia para cachorros",
        descricao: "O shampoo e o condicionador contem 500 ml e a colonia 120 ml",
        valor: 89.99,
        imagem: "https://images.tcdn.com.br/img/img_prod/573283/kit_para_banho_caes_shampoo_pelos_escuros_condicionador_revitalizante_e_perfume_colonia_femea_sanol_536007_1_ee630f41dc9f2df53f753d79d3ba6cc3.jpg"
    },
    {
        nome: "shampoo para gatos",
        descricao: "500 ml de shampoo sanol",
        valor: 29.99,
        imagem: "https://www.petlove.com.br/images/products/224894/product/Shampoo_Sanol_Cat_para_Gatos_-_500_mL_31077040.jpg?1627721179"
    },
    {
        nome: "shampoo condicionador para gatos",
        descricao: "500 ml de shampoo condicionador matacura",
        valor: 39.99,
        imagem: "https://www.petlove.com.br/images/products/233175/product/Shampoo_e_Condicionador_Matacura_Antipulgas_para_Gatos_2605926.jpg?1627747799"
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