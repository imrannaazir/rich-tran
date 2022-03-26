// import 
import React, { useEffect, useState } from 'react';
import Tran from '../../Tran/Tran';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

// create Products Component
const Products = () => {

    //useState for set fetching data
    const [products, setProducts] = useState([])

    // useState for cart
    const [cart, setCart] = useState([])

    const [tran, setTran] = useState([])
    const rndInt = Math.floor(Math.random() * 5) + 1
    console.log(rndInt)
    const getTran = () => {
        setTran(cart[rndInt])
        console.log(tran);
    }


    //function for try again button that clear the cart
    const removeCart = () => {
        setCart([])
        setTran([])
    }

    //function that handle cart 
    const handleAddToCart = product => {
        let newCart = []
        //if the length of newCart is smaller than 4 , clicking product will add in the cart
        if (newCart.length < 4) {
            newCart = [...cart, product]
            setCart(newCart);
        }

        // if the length of newCart is bigger than 4, nothing will be changed 
        if (newCart.length > 4) {
            newCart = [...cart, product]
            setCart(newCart);
            setCart(cart);
            alert('You cannot select more than 4 products.')
        }
        console.log(cart);
    }



    // use effect for fetching data
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])




    //component body

    return (
        // the cart part of the page
        <div className='container'>
            <div className='cart-container'>
                <div className='cart-info'>
                    <p className='cart-heading'>Your Tran:</p>

                    {
                        <Tran tran={tran}></Tran>
                    }
                    <p className='cart-heading'>Selected Products:</p>
                    {

                        cart.map(item => <Cart key={item.id} item={item}></Cart>)
                    }
                    <div className='cart-btn-container'>
                        <p onClick={getTran} className='cart-btn'>Get Tran→</p>
                        <p onClick={removeCart} className='cart-btn'>Try Again→</p>
                    </div>
                </div>

            </div>

            {/* this is the main part of the page */}
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