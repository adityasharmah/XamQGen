import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    to right,
    #000000,
    #333333
  ); /* Black gradient background */
  padding: 10px 20px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
`;

const Logo = styled.img`
  width: 80px; /* Adjust the size as needed */
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" />
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/get-started">Get Started</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
