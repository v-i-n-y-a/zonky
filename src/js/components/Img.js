import React from "react";
import _ from "lodash";

const Img = ({ src, alt }) => {
  if (!src || typeof src !== "string") return <img />;
  const props = { src: `/loans/marketplace${src}`, alt: alt ? alt : "" };
  return <img {...props} class="img-responsive" />;
};
export default Img;
