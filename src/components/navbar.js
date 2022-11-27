import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <Nav>
      <Logo />
      <Liens>
        <Lien to="/blog">Blog</Lien>
        <Lien to="/portfolio">Portfolio</Lien>
        <Lien to="/about">About</Lien>
      </Liens>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 0;
`;

const Logo = () => {
  const style = {
    logo: {
      color: "#000000",
      fontWeight: 900,
      fontSize: "23px",
      textDecoration: "none",
    },

    logoSecond: {
      color: "grey",
    },

    logoThird: {
      color: "#b2b0b0",
    },
  };

  return (
    <Link to="/" style={style.logo}>
      French
      <span style={style.logoSecond}>Dev</span>
    </Link>
  );
};

const Liens = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
`;

const Lien = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -2px;
    background: black;
    transition: all ease-in-out 0.5s;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`;
