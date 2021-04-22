import React from "react";
import "../styles/Section.scss";

function Section({ title, imageUrl, body, alt }) {
  return (
    <section className="containerP">
      <img src={imageUrl} className="photoP" alt={alt} />
      <h2 className="titleP">{title}</h2>
      <p className="bodyP">{body}</p>
    </section>
  );
}

export default Section;
