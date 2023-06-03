import React, { Component } from "react";
import { Navbar, Container, FormControl, Nav } from "react-bootstrap";
import { BiCart } from "react-icons/bi";
class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Shopping Cart</Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="search"
              className="m-auto"
            ></FormControl>
          </Navbar.Text>
        </Container>
        <BiCart color="white" fontSize="25px" alignRight></BiCart>
      </Navbar>
    );
  }
}

export default Header;
