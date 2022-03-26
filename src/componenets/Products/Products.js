import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const removeCart = () => {
        setCart([])
    }
    const handleAddToCart = product => {
        let newCart = []
        if (newCart.length < 4) {
            newCart = [...cart, product]
            setCart(newCart);
        }
        if (newCart.length > 4) {
            newCart = [...cart, product]
            setCart(newCart);
            setCart(cart);
            alert('You cannot select more than 4 products.')
        }

    }
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container'>
            <div className='cart-container'>
                <div className='cart-info'>
                    <h4 className='cart-heading'>Selected Product:</h4>
                    {
                        cart.map(item => <Cart key={item.id} item={item}></Cart>)
                    }
                    <div className='cart-btn-container'>
                        <p className='cart-btn'>Get One Tran</p>
                        <p onClick={removeCart} className='cart-btn'>Try Again</p>
                    </div>
                </div>


            </div>
            <div> <h1 className='heading'>Choose four products and get one tran.</h1>

                <div className='products'>

                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div></div>




        </div>
    );
};

export default Products;