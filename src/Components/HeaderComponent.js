import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';
import './Styles/HeaderComponent.css'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return(

            <Navbar dark expand='md'>
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand href="/">
                        <img src='assets/images/robinhood.svg' width={35} alt="Stocks App"/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="justify-content-end">
                            <NavItem>
                                <NavLink className="nav-link" to='/'>Free Stocks</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/'>Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/'>Cash</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/'>Messages</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/'>Account</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        )
    }
}


export default Header
