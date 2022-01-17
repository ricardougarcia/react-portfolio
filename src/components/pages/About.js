import React from "react";
import rico from "../../assets/images/Photo-of-Ricardo.jpg";
import "../styles/About.css";
// import GoogleDocsViewer from "react-google-docs-viewer";
import DocViewer from "../Doc.js";

export default function About() {
  return (
    <div className="aboutContainer">
      <h1 className="aboutH1">About Me</h1>
      <img src={rico} className="thumbnail" alt="Responsive image" />

      <p className="aboutP">
        Welcome to my portfolio page! My name is Ricardo Garcia, and I am
        excited to showcase a few of my projects and give insights to my
        colorful work experience. Just a quick glance at my work history will
        show you that my professional background is as diverse as the projects
        you see showcased on this page. For the past 7 years I have worked in
        educational technology and overtime have grown passionate about
        leveraging technology to improve lives; working elbow to elbow with
        schools across the nation to see just how techonlogy can bridge gaps in
        equity and be an invaluable pedagogical tool. This is the main reason I
        decided to become a software developer. My goal is to positively impact
        lives by helping to create and design solutions that make a measurable
        impact in the communities that I serve. Thanks for browsing around and
        feel free to ask for more!
      </p>
      <div className="resume">
        <h2>Resume:</h2>
        <DocViewer source="https://docs.google.com/document/d/1mjYCAXpFPIY1qFQ2Jg3OimAzDupuF-n_SU3nRfldiS0/edit?usp=sharing" />
      </div>
    </div>
  );
}
