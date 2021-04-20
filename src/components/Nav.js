import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  console.log(pathname);

  return (
    <>
      <StyledNav>
        <Link id="logo" to="/">
          <h1>Capture</h1>
        </Link>
        <ul>
          <Link to="/">
            <li>
              1. About Us
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/" ? "100%" : "0%" }}
              />
            </li>
          </Link>
          <Link to="/work">
            <li>
              2. Our Work
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/work" ? "100%" : "0%" }}
              />
            </li>
          </Link>
          <Link to="/contact">
            <li>
              3. Contact Us
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
              />
            </li>
          </Link>
        </ul>
        <Hamburger onClick={() => setOpen(!isOpen)}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </Hamburger>
      </StyledNav>
      <MobilePanel style={isOpen ? open : {}}>
        <ul>
          <Link to="/">
            <li style={{ color: pathname === "/" ? "#23d997" : null }}>
              1. About Us
            </li>
          </Link>
          <Link to="/work">
            <li style={{ color: pathname === "/work" ? "#23d997" : null }}>
              2. Our Work
            </li>
          </Link>
          <Link to="/contact">
            <li style={{ color: pathname === "/contact" ? "#23d997" : null }}>
              3. Contact Us
            </li>
          </Link>
        </ul>
      </MobilePanel>
    </>
  );
};

const StyledNav = styled.nav`
  display: flex;
  margin: auto;
  background: rgba(40, 40, 40, 0.98);
  backdrop-filter: blur(10rem);
  -webkit-backdrop-filter: blur(10rem);
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  margin: auto;
  position: sticky;
  top: 0;
  z-index: 3;

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
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
    margin-left: auto;
    list-style: none;

    @media (max-width: 1300px) {
      display: none;
    }

    li {
      position: relative;
    }
  }

  @media (max-width: 1300px) {
    padding: 0 5rem;
  }
`;

const Line = styled(motion.div)`
  position: absolute;
  bottom: -80%;
  width: 0%;
  height: 0.2rem;
  background: #23d997;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  .hamburger-line {
    width: 30px;
    height: 3px;
    margin: 0.5rem 0;
    background: white;
  }

  @media (max-width: 1300px) {
    display: block;
  }
`;

const MobilePanel = styled.div`
  display: none;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 3;
  background: rgba(40, 40, 40, 0.98);

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 10rem 0 15rem 0;
    width: 100%;
    list-style: none;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 600;
      color: white;
      text-decoration: none;
      text-align: center;
      min-height: 5rem;
      padding: 10rem 1.5rem;
      width: 100vw;
      transition: all 0.75s;

      &:hover {
        background: rgba(50, 50, 50, 0.3);
      }
    }
  }
`;

const open = {
  display: "flex"
};

export default Nav;
