import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = (products) => {
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        if(products.length){
            const sevedCart = getStoredCart();
            const storedCart = [];
            for(const key in sevedCart){
                // console.log(key,sevedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quantity = sevedCart[key];
                    // console.log(quantity);
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct);
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    },[products]);
    return [cart,setCart];
};

export default useCart;