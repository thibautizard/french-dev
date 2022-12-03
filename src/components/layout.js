import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import GlobalStyle from "../theme/globalStyle";

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Title>{pageTitle}</Title>
      <Content>{children}</Content>
    </>
  );
}

const Title = styled.h1`
  font-size: 3rem;
`;

const Content = styled.main``;

export const Head = () => {
  return <title>frenchdev</title>;
};
