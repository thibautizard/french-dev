import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

export default function Seo({ title }) {
  const siteData = useSiteMetadata();
  return (
    <title>
      {title} | {siteData.title}
    </title>
  );
}
