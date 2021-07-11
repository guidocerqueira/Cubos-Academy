const express = require("express");

const prods = require('./controlers/products.js')
const cart = require('./controlers/cart.js')

const router = express();

router.get('/produtos', prods.prodList);
router.get('/carrinho', cart.displayCart);
router.post('/carrinho/produtos', cart.addProd);
router.patch('/carrinho/produtos/:idProduto', cart.editProdQuantity);
router.delete('/carrinho/produtos/:idProduto', cart.deleteProd);
router.delete('/carrinho', cart.clearCart);
router.post('/carrinho/finalizar-compra', cart.cartCheckout);

module.exports = router; 