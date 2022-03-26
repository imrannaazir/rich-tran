import React from 'react';
import './Tran.css'

const Tran = ({ tran }) => {
    const { name, img } = tran
    return (
        <div className='tran-container'>

            <h1 className='tran-heading'>{name}</h1>
            <img src={img} alt="" />


        </div>
    );
};

export default Tran;