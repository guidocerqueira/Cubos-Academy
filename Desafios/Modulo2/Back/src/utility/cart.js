const { addBusinessDays } = require('date-fns');

function setCalCart(cart) {
    const deliveryFeeDefault = 5000;
    const minFreeDelivery = 20000;

    let subTotal = 0;

    cart.produtos.forEach (p => { subTotal += p.preco * p.quantidade });

    let deliveryDay = addBusinessDays(Date.now(), 15);

    const  deliveryFee = (subTotal > minFreeDelivery || cart.produtos.length === 0) ? 0 : deliveryFeeDefault;

    const cartTotal = subTotal + deliveryFee;

    const calCart = {subTotal, deliveryDay, deliveryFee, cartTotal, produtos:cart.produtos};

    return calCart;
}

function validateUserData(costumer){
    if (costumer !== 'individual'){
        return false
    }

    if(costumer.country.length !== 2){
        return false
    }

    if (costumer.name.trim().split(' ').length < 2){
        return false
    }

    if (!costumer.documents || costumer.documents.length === 0){
        return false
    }

    if (costumer.documents[0].type !== 'cpf' || costumer.documents[0].length !== 11) {
        return false
    }


}

function validateStockCheckout(cart, stockProd) {
    const outOfStock = [];

    for (const cartProd of cart.produtos) {
        const produto = stockProd.find(p => p.id === cartProd.id);

        if (cartProd.quantidade > produto.estoque){
            outOfStock.push(produto);
        }
    }

    return outOfStock;
}


module.exports = { setCalCart, validateUserData, validateStockCheckout }