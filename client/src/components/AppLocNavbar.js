import React, { Component } from 'react';
import LocationList from'./LocationList';
//Our app's navigation bar
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';


class AppLocNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, //defining navBar state
        }
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    
   
    render() {
        return(
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Location Navbar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navBar>
                            <NavItem>
                                <NavLink href="http://localhost:4000/api/locations/">
                                Location List
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
      
    }
}





export default AppLocNavbar;