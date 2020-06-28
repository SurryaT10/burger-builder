import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckoutSummary.css'

const checkoutSummary = (props) => {
    return (
        <div className="checkout-summary">
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
                <Button 
                    btnType="danger"
                    clicked={props.checkoutCancelled} >CANCEL</Button>
                <Button 
                    btnType="success"
                    clicked={props.checkoutContinued} >CONTINUE</Button>
            </div>
        </div>
    )
}

export default checkoutSummary