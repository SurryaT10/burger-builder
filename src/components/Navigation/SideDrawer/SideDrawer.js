import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux1/Aux'

const sideDrawer = (props) => {

    let attachedClasses = 'close'
    if (props.open) {
        attachedClasses = 'open'
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={"sidedrawer " + attachedClasses} onClick={props.closed} >
                <div className="logo-div-sidedrawer">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer