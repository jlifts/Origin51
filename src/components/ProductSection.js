import React from "react";
import "../styles/Section.scss";

function Section({ title, imageUrl, body, alt }) {
  return (
    <section className="container">
      <img src={imageUrl} className="photo" alt={alt} />
      <h2 className="title">{title}</h2>
      <p className="body">{body}</p>
    </section>
  );
}

export default Section;
