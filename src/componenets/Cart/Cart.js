import React from 'react';
import './Cart.css'

const Cart = ({ item, tran }) => {
    console.log(tran);
    const { img, name } = item;
    return (

        <div className='item-container'>
            <div className='cart-item'>
                <img src={img} alt="" />
                <p>{name}</p>
            </div> <p className='x'>X</p>

        </div>
    );


};

export default Cart;