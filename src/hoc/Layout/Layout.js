import React, {Component} from 'react'
import Aux from '../Aux1/Aux'
import './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import {connect} from 'react-redux' 
class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    SideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar isAuth={this.props.isAuthenticated} drawerToggleClicked={this.SideDrawerToggleHandler} />
                <SideDrawer isAuth={this.props.isAuthenticated} open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
                <main className="content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


const mapstateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapstateToProps)(Layout)