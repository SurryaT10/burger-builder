import React from 'react'
import './Order.css'

const Order = (props) => {
    const ingredients = []

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }


    const ingredientOutput = ingredients.map(ig => {
        return (
            <span className="items" key={ig.name}>{ig.name} ({ig.amount})</span>
        )
    })

    return (
        <div className="order">
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default Order