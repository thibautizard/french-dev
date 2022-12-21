import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import GlobalStyle from "../theme/globalStyle";

export default function Layout({ pageTitle, children, align }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Title align={align}>{pageTitle}</Title>
      <Content>{children}</Content>
    </>
  );
}

const Title = styled.h1`
  font-size: 3.5rem;
  margin-top: 80px;
  margin-bottom: 60px;
  text-align: ${({ align }) => align || "left"};
`;

const Content = styled.main``;

export const Head = () => {
  return <title>frenchdev</title>;
};
