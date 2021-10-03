import React from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import Cart from '../Cart/Cart';
import {deleteFromDb,clearTheCart} from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
const cartImage = 'https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png';

const OrderReview = () => {
    const[products] = useProduct();
    const[cart,setCart] = useCart(products);
    const history = useHistory();
    //handle remove cart
    const handleRemove = (key) =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
        // setCart(newCart);
    }
    //handlePlaceOrder
    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
        history.push('/order');
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.length?cart.map(product => <ReviewItem 
                    key={product.key} 
                    handleRemove={handleRemove}
                    cart={product}></ReviewItem>)
                    :
                    <div><img src={cartImage} alt=".." /></div>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="purches-btn">Place Order</button>
                </Cart> 
            </div>
        </div>
    );
};

export default OrderReview;