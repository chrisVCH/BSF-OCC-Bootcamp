// Main application app.js

const cart = require('./cart');
const calculateTotal = require('./order');
const products = require('./product');

// Add products to the cart
cart.addToCart(products[0]);
cart.addToCart(products[2]);

console.log('Cart Item', cart.getCartItems());

const totaAmount = calculateTotal(cart.getCartItems());
console.log('total order amount:', totaAmount);
