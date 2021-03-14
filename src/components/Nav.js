import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <Link id="logo" to="/">
        <h1>Capture</h1>
      </Link>
      <ul>
        <Link to="/">
          <li>1. About Us</li>
        </Link>
        <Link to="/work">
          <li>2. Our Work</li>
        </Link>
        <Link to="/contact">
          <li>3. Contact Us</li>
        </Link>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  background: #282828;
  min-height: 10vh;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  margin: auto;

  #logo {
    font-family: "Lobster", cursive;
    font-weight: lighter;
    font-size: 1.5rem;
  }

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
