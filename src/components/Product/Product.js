import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';
const Product = (props) => {
    // console.log(props.product);
    const{name,stock,img,seller,price,star} = props.product;
    const cartItem = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product-caontainer">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h3 className="name-color">{name}</h3>
                <p><small>By : {seller}</small></p>
                <p>Price : ${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <Rating
                initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                />
                <br />
                <br />
                <button onClick={()=>props.handleAddToCart(props.product)} className='cart-btn'> {cartItem} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;