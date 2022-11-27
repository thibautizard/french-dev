import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import GlobalStyle from "../theme/globalStyle";

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Titre>{pageTitle}</Titre>
      <main>{children}</main>
    </>
  );
}

const Titre = styled.h1`
  font-size: 3rem;
`;

export const Head = () => {
  return <title>frenchdev</title>;
};
