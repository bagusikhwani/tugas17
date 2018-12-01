import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button } from 'reactstrap';

import Logo from '../assets/santrenkoding_logo.png';

import {Link} from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/"><img style={{width:30}} src={Logo}/></NavbarBrand>
            <Link to="/">
            <NavbarBrand>Santren Koding</NavbarBrand>
            </Link>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link to="/kajian">
                    <NavLink>Kajian Koding</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                  <Link to="/mondok">
                  <NavLink>Mondok Koding</NavLink>
                  </Link>  
                </NavItem>
                <NavItem>
                  <Link to="/kitab">
                    <NavLink>Kitab Koding</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                    <Link to="/login">
                     <Button className="bg-success">Masuk / Daftar</Button>
                    </Link>
                </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
