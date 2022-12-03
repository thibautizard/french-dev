import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage as Image, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children }) => {
  const { title, date, hero_image_alt, hero_image } = data.mdx.frontmatter;
  const content = data.mdx.body;
  const image = getImage(hero_image);

  return (
    <Layout pageTitle={title}>
      <Date>{date}</Date>
      <Image image={image} alt={hero_image_alt} />
      <Content>{content}</Content>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const Date = styled.p``;
const Content = styled.p``;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
