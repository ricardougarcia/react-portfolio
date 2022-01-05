import React from "react";
import dashboard from "../../assets/images/dashboard.png";
import mockup from "../../assets/images/Mockup.png";
import placeholder from "../../assets/images/placeholder-img.jpeg";
import contextify from "../../assets/images/contextify.png";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div id="projects" class="container">
      <section class="card-img-top">
        <h3>GreenTrip Planner</h3>
        <a href="https://jimbo8702.github.io/Project-One/">
          <img
            class="thumbnail"
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

      <section class="card-img-top">
        <h3>My Interactions</h3>
        <a href="https://my-interactions.herokuapp.com">
          <img
            src={dashboard}
            class="thumbnail"
            alt="project 2: My Interactions"
          />
        </a>
        <p>
          This application allows users to create profiles to research and store
          drug interactions behind a secure and personal login.
        </p>
      </section>

      <section class="card-img-top">
        <h3>Contextify</h3>
        <img src={contextify} class="thumbnail" alt="project 3" />
        <p>
          Contextify is a full stack MERN application that that offers visual
          representation of data. Contextify can handle general weight,
          distance, and time conversions as well as abstract conversions. This
          application is to help users quantify their metrics in a more
          digestible context, like say...bananas!
        </p>
      </section>

      {/* <section class="card">
        <h3>Project 4</h3>
        <img src="./assets/images/placeholder-img.jpeg" alt="project 4" />
        <p>Brief description</p>
      </section> */}
    </div>
  );
}
