const { readJSON, writeJSON } = require('../utility/db.js');
const { setCalCart, validateUserData, validateStockCheckout } = require('../utility/cart.js');

async function addProd(req,res) {
    const { id, quantidade } = req.body;

    if (!id || !quantidade) {
        return res.status(400).json({ mensagem: "Passar id ou quantidade do produto" });
    }

    const dataJSON = await readJSON;
    const { cart, produtos } = dataJSON;

    const idFound = produtos.find (p => p.id === id);

    if (!idFound) {
        return res.status(400).json({ mensagem: "Id não encontrado" })
    }

    const newProd = { id, quantidade, nome: idFound.nome, preco: idFound.preco, categoria: idFound.categoria }

    if (quantidade > idFound.estoque) {
        return res.status(400).json({ mensagem: "Estoque insuficiente" })
    }

    const inCart = cart.produtos.findIndex(p => p.id ===id);

    if (inCart === -1) {
        dataJSON.cart.produtos.push(newProd);
    } else {
        dataJSON.cart.produtos[inCart].quantidade += newProd;
    }

    const calCart = setCalCart(dataJSON.cart);

    const updateCart = await writeJSON(dataJSON);

    if (!updateCart) {
        return res.status(500).json({ mensagem: "Falha ao adcionar produto no carrinho." });
    }

    return res.status(201).json(calCart);
}

async function editProdQuantity(req,res) {
    const { quantidade } = req.body;
    const id = Number(req.params.id);

    if (!id || !quantidade){
        return res.status(400).json({ mensagem: "Passar id ou quantidade." });
    }

    const dataJSON = await readJSON();
    const { cart, produtos } = dataJSON;

    const idFound = produtos.find (p => p.id === id);

    if (!idFound) {
        return res.status(400).json({ mensagem: "Id não encontrado" })
    }

    const indexCartProd = cart.produtos.findIndex(p => p.id === id);

    if (indexCartProd === -1){
        return res.status(400).json({ mensagem: "Produto não está no carrinho" });
    }
    
    if (quantidade + cart.produtos[indexCartProd].quantidade > idFound.estoque){
        return res.status(400).json({ mensagem: "Estoque insuficiente" });
    }

    if (quantidade + cart.produtos[indexCartProd].quantidade > 0) {
        return res.staus(400).json({ mensagem: "Não é possível diminuir além da quantidade existente no carrinho." });
    }

    dataJSON.cart.produtos[indexCartProd].quantidade += quantidade;

    if (cart.produtos[indexCartProd].quantidade === 0 ){
        dataJSON.cart.produtos.splice(indexCartProd, 1);
    }

    const updateCart = await writeJSON(dataJSON);

    if(!updateCart){
        return res.status(400).json({ mensagem: "Falha ao atualizar quantidade do produto" });
    }

    const calCart = setCalCart(dataJSON.cart);

    return res.status(200).json(calCart);
}

async function deleteProd(req, res) {
    const id = Number(req.params.id);

    const dataJSON = await readJSON();

    const { cart } = dataJSON;

    const indexCartProd = cart.produtos.findIndex(p=> p.id === id);

    if (indexCartProd === -1){
        return res.status(400).json({ mensagem: "produto não está no carrinho" });
    }

    dataJSON.cart.produtos.splice(indexCartProd, 1);

    const updateCart = await writeJSON(dataJSON);

    if (!updateCart) {
        return res.status(400).json({ mensagem: "Falha ao deletar produto do carrinho" });
    }

    const calCart = setCalCart(dataJSON.cart);

    return res.status(200).json(calCart);
}

async function clearCart(req, res) {
    const dataJSON = await readJSON();
    
    dataJSON.cart = { produtos: [], subTotal: 0, deliveryDay: null, deliveryFee: 0, cartTotal: 0 }

    const updateCart = await writeJSON(dataJSON);

    if(!updateCart) {
        return res.status(400).json({ mensagem: "Não foi possível limpar o carrinho" });
    }

    return res.status(200).json({ mensagem: "carrinho limpo" })
}

async function displayCart(req, res){
    const { cart } = await readJSON();

    const calCart = setCalCart(cart);

    return res.status(200).json(calCart);
}

async function cartCheckout(req, res) {
    const payment = req.body;

    const dataJSON = await readJSON();
    const { cart, produtos } = dataJSON;

    if (cart.produtos.length ===0){
        return res.status(404).json({ mensagem: "Carrinho vazio." });
    }

    if (!payment.costumer){
        return res.status(404).json({ mensagem: "Informe os dados do cliente." })
    }

    const validUsedData = validateUserData(payment.costumer);

    if (!validUsedData) {
        return res.status(404).json({ mensagem: "Dados inválidos do usuário." })
    }

    const outOfStock = validateStockCheckout(cart, produtos);

    if (outOfStock.length !== 0){
        return res.status(404).json({ mensagem: "Produtos em falta no carrinho", outOfStock });
    }

    const calCart = setCalCart(cart);

    for (const cartP of cart.produtos) {
        const indexStockProd = produtos.findIndex(p => p.id === cartP.id);

        dataJSON.produtos[indexStockProd].estoque -= cartP.quantidade;
    }

    dataJSON.cart = { produtos: [], subTotal: 0, deliveryDay: null, deliveryFee: 0, cartTotal: 0 }

    const updateJSON = await writeJSON(dataJSON);

    if(!updateJSON) {
        return res.send(404).json({ mensagem: "Falha ao abater produtos do estoque." });
    }

    return res.send(200).json({ mensagem: "Compra finalizada com sucesso.", carrinho: calCart });


}

module.exports = {addProd, editProdQuantity, deleteProd, clearCart, displayCart, cartCheckout }