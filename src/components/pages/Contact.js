import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div>
      <div id="contactme">
        <h1 className="contactH2">Contact Me</h1>
        <ul className="repeating-before">
          <li>
            <a href="mailto:ricardougarcia@gmail.com"> Email</a>
          </li>
          <li>
            <a href="tel:7577179517"> Call</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ricardougarcia/"> LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/ricardougarcia"> Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
