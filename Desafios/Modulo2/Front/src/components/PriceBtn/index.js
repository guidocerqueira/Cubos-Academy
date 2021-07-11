import React from 'react';
import './styles.css';

function PriceBtn({ handleClick, price, type, children }) {
    return (
        <button className={"pricebtn" + type} onClick={handleClick}>
            {children}
            <span className="price">R$ {price.toString().replace('.', ',')}</span>
        </button>
    )
}

export default PriceBtn;