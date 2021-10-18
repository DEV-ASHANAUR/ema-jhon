import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb} from '../../utilities/fakedb';
import './Shop.css';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useCart(products);
    const [displayProduct,setDisplayProduct] = useState([]);
    // const [cart,setCart] = useState([]);
    
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(
            data => {
                    setProducts(data);
                    setDisplayProduct(data);
                }
            );
    },[]);
    //handleAddToCart
    const handleAddToCart = (product) =>{
        const exists = cart.find(pd => pd.key === product.key)
        let newCart = [];
        if(exists){
            const rest = cart.filter(pd => pd.key !== product.key)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,product];
        }else{
            product.quantity = 1;
            newCart = [...cart,product];
        }
        setCart(newCart);
        // add product to the local storage
        addToDb(product.key);
    }
    //handleSearch
    const handleSearch = (event) =>{
        const searchText = event.target.value;
        const searchResult = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(SearchResult.length);
        setDisplayProduct(searchResult);

    }

    return (
        <>
            <div className="search-section">
                <input 
                onChange={handleSearch}
                className="search-bar" 
                type="text" 
                placeholder='Type Here to Search' 
                />
            </div>
            {/* product containrt */}
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProduct.map(product => <Product 
                        key={product.key} 
                        handleAddToCart={handleAddToCart}
                        product={product}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className="purches-btn">Review Your Order</button>
                        </Link>
                    </Cart> 
                </div>
            </div>
        </>
    );
};

export default Shop;