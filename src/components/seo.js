import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

export default function Seo({ title }) {
  return (
    <title>
      {title} | {useSiteMetadata()}
    </title>
  );
}
