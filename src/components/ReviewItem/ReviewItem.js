import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../Product/Product.css';
// import Rating from 'react-rating';
const ReviewItem = (props) => {
    const{key,name,stock,img,seller,price,quantity} = props.cart;
    const cartItem = <FontAwesomeIcon icon={faTrash} />
    return (
        <div className='product-caontainer'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h3 className="name-color">{name}</h3>
                <p><small>By : {seller}</small></p>
                <p>Price : ${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <p>Quantity : {quantity}</p>
                <button onClick={()=>props.handleRemove(key)} className='cart-btn'> {cartItem} Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;