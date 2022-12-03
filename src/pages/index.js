import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import "../fonts/font.css";

const Accueil = () => {
  return (
    <>
      <Layout>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </Layout>
    </>
  );
};

export const Head = () => <Seo title="Accueil" />;

export default Accueil;
