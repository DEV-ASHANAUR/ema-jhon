import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total += product.price * product.quantity;
        totalQuantity += product.quantity;
    }
    const shipping = total > 0 ? 15:0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h2 className="text-center">Cart Summery</h2>
            <h4 className="text-center">Items ordered:{props.cart.length}</h4>
            <p className="text-center">Total Quantity : {totalQuantity}</p>
            <p className="text-center">Cart Total : $ {total.toFixed(2)}</p>
            <p className="text-center">Shipping : $ {shipping}</p>
            <p className="text-center">Tax : $ {tax.toFixed(2)}</p>
            <h4 className="text-center">Grand Total : {grandTotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;