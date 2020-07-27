import React from "react";
import "./style.css"

const Section = ({title, body, extraContent}) => (
    <section className="section ">
    <h2 className="section__headline section__flex" >{title}
      {extraContent}
    </h2>
    {body}
  </section>
)

export default Section ;