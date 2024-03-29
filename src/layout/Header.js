import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    //console.log(props);
  }



  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    const { title } = this.props;
    return (
      <div>

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">TWSystem</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home Page</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>





        {/* <hr/>
          <h3>{title}</h3>
          <ul>
            <li>
              <Link to="/">Home</Link> 
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
          </ul>
        <hr/> */}
      </div>
    )
  }
}

export default Header;