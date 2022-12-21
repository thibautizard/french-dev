import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";
import "../fonts/font.css";

const Accueil = () => {
  return (
    <>
      <Layout pageTitle="Bienvenue sur FrenchDev" align="center">
        <Introduction>
          {" "}
          Développeur frontend depuis 4 ans, j'anime ce blog pour relayer au
          public francophone toutes les ressources possibles et imaginables pour
          booster ta carrière de développeur web. <br /> <br />
          Dans les tutos, j'essaie d'expliquer et de démystifier les principaux
          concepts qui t'aideront à mieux coder et à monter en compétence.
        </Introduction>

        <Cards>
          <Card>Test1</Card>
          <Card>Test2</Card>
          <Card>Test3</Card>
        </Cards>
      </Layout>
    </>
  );
};

const Introduction = styled.p`
  font-size: 1.3rem;
  text-align: center;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
`;

const Card = styled.div`
  min-width: 250px;
  height: 150px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.012),
    0px 0px 2.3px rgba(0, 0, 0, 0.011), 0px 0px 4.4px rgba(0, 0, 0, 0.012),
    0px 0px 7.8px rgba(0, 0, 0, 0.017), 0px 0px 14.6px rgba(0, 0, 0, 0.033),
    0px 0px 35px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const Head = () => <Seo title="Accueil" />;

export default Accueil;
