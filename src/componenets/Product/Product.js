// import 
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

//create a function that receive mapping product data and a function as a prop


const Product = ({ product, handleAddToCart }) => {
    const { name, img, price } = product;

    return (
        <div className='product'>

            <img src={img} alt="" />
            <h1 className='product-name'>{name}</h1>
            <p className='price'>Price: $ {price} Million</p>
            <p onClick={() => handleAddToCart(product)} className='btn'>Get it free<FontAwesomeIcon icon={faShoppingCart} /></p>





        </div>
    );
};

export default Product;