import React from 'react'

const ProductItem = (props) => {
    const Product = props.product;
    return(
        <div>
            <h3>{Product.ten}</h3>
            <h4>{Product.gia}</h4>
        </div>
    )
}

export default ProductItem