import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <a id="logo" href="#">
        <h1>Capture</h1>
      </a>
      <ul>
        <a href="#">
          <li>1. About Us</li>
        </a>
        <a href="#">
          <li>2. Our Work</li>
        </a>
        <a href="#">
          <li>3. Contact Us</li>
        </a>
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
