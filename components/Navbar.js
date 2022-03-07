import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Badge,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavbarBrand,
} from "reactstrap";
import logo from '../public/styling/logo.webp'
const Navs = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div id="Navbar">
      <Navbar className="bgnav" expand="md">
        <NavbarBrand href="/">
          <Image src={logo} alt="logo" height="75px" width="90px" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar></Nav>
          <NavbarText>
            <NavLink href="/food">Story</NavLink>
          </NavbarText>
          <NavbarText>
            <NavLink href="/food">Food</NavLink>
          </NavbarText>
          <NavbarText>
            <NavLink href="/food">Location</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Navs;
