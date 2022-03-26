import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container'>
            <div>
                <h1>this is cart</h1>
            </div>
            <div> <h1 className='heading'>Choose four products and get one tran.</h1>

                <div className='products'>

                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div></div>




        </div>
    );
};

export default Products;