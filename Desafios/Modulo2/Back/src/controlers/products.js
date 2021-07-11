const { readJSON } = require('../utility/db.js');

async function prodList(req,res) {
    let { produtos } = await readJSON();
    const { categoria, precoInicial, precoFinal } = req.query;

    if (!produtos) {
        return res.status(200).json([]);
    }

    produtos = produtos.filter(p => p.estoque > 0);

    console.log(produtos)

    if (categoria) {
        produtos = produtos.filter(p => p.categoria === categoria);
    }

    if (precoInicial) {
        produtos = produtos.filter(p => p.preco >= precoInicial)
    }

    if (precoFinal) {
        produtos = produtos.filter(p => p.preco <= precoFinal)
    }

    return res.status(200).json()
}

module.exports = { prodList }