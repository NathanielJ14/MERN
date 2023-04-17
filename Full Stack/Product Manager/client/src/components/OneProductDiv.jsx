import React from 'react'


export const OneProductDiv = (props) => {
    const {product} = props
    return (
        <div>
            <h2>{product.title}</h2>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
        </div>
    )
}
