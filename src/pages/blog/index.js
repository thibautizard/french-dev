import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
export default function Blog({ data }) {
  const posts = data.allMdx.nodes;

  return (
    <Layout pageTitle="Blog">
      {posts.map(({ frontmatter, id, excerpt }) => (
        <MiniaturePost key={id}>
          <Link to={`/blog/${frontmatter.slug}`}>{frontmatter.title}</Link>
          <Date>{frontmatter.date}</Date>
          <Extrait>{excerpt}</Extrait>
        </MiniaturePost>
      ))}
    </Layout>
  );
}

const MiniaturePost = styled.article`
  margin-bottom: 40px;
`;

const Date = styled.p``;

const Extrait = styled.p``;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YY")
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
