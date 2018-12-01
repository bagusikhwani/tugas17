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
            <NavbarBrand onClick={()=>this.props.ChangePage("Home")}>Santren Koding</NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink onClick={()=>this.props.ChangePage("Kajian")}>Kajian Koding</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>this.props.ChangePage("Mondok")}>Mondok Koding</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>this.props.ChangePage("Kitab")}>Kitab Koding</NavLink>
                </NavItem>
                <NavItem>
                    <Button className="bg-success">Masuk / Daftar</Button>
                </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
