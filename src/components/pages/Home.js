import React from "react";
import dashboard from "../../assets/images/dashboard.png";
import mockup from "../../assets/images/Mockup.png";
// import rico from "../../assets/images/Photo-of-Ricardo.jpg";
import placeholder from "../../assets/images/placeholder-img.jpeg";
// import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div id="projects">
      <section class="card-img-top">
        <h3>Project 1: GreenTrip Planner</h3>
        <a href="https://jimbo8702.github.io/Project-One/">
          <img
            class="img-responsive img-rounded"
            src={mockup}
            alt="Project 1: GreenTrip Planner"
          />
        </a>
        <p>
          If individuals are able to quantify the time vs. money vs. CO2
          relationship of different methods of transit, then individuals will be
          able to make better informed decisions about what to prioritize for
          different trips. This application is the first step in accomplishing
          that initiave.
        </p>
      </section>

      <section class="card">
        <h3>Project 2: My Interactions</h3>
        <a href="https://my-interactions.herokuapp.com">
          <img src={dashboard} alt="project 2: My Interactions" />
        </a>
        <p>
          This application allows users to create profiles to research and store
          drug interactions behind a secure and personal login.
        </p>
      </section>

      <section class="card">
        <h3>Contextify</h3>
        <img src={placeholder} alt="project 3" />
        <p>Brief description</p>
      </section>

      {/* <section class="card">
        <h3>Project 4</h3>
        <img src="./assets/images/placeholder-img.jpeg" alt="project 4" />
        <p>Brief description</p>
      </section> */}
    </div>
  );
}
