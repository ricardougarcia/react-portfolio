import React from "react";
import dashboard from "../../assets/images/dashboard.png";
import mockup from "../../assets/images/Mockup.png";
import contextify from "../../assets/images/contextify.png";
import "../styles/Home.css";

import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    // card one
    <Container id="container">
      {/* <Row>
        <Col> */}
      <div class="card-display">
        <>
          <>
            <Card
              class="card-frame"
              style={{ width: "25rem" }}
              border="primary"
              id="card1"
              className="cards"
            >
              <Card.Img
                variant="top"
                src={dashboard}
                className="cardImg"
                style={{ width: "100%" }}
              />
              <Card.Body id="cardBody1">
                <Card.Title>My Interactions</Card.Title>
                <Card.Text>
                  This application allows users to create profiles to research
                  and store drug interactions behind a secure and personal
                  login.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://my-interactions.herokuapp.com"
                >
                  Check it out
                </Button>
              </Card.Body>
              {/* card two */}
            </Card>
            <Card
              style={{ width: "25rem" }}
              border="success"
              id="card2"
              className="cards"
            >
              <Card.Img
                variant="top"
                src={mockup}
                className="cardImg"
                style={{ width: "100%" }}
              />
              <Card.Body id="cardBody2">
                <Card.Title>Green Trip Planner</Card.Title>
                <Card.Text className="cardText">
                  If individuals are able to quantify the time vs. money vs. CO2
                  relationship of different methods of transit, then individuals
                  will be able to make better informed decisions about what to
                  prioritize for different trips. This application is the first
                  step in accomplishing that initiave.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://jimbo8702.github.io/Project-One/"
                >
                  Check it out
                </Button>
              </Card.Body>
            </Card>
            {/* card three */}
          </>
          <Card
            style={{ width: "25rem" }}
            border="alert"
            id="card3"
            className="cards"
          >
            <Card.Img variant="top" src={contextify} className="cardImg" />
            <Card.Body id="cardBody3">
              <Card.Title>Contextify</Card.Title>
              <Card.Text>
                Contextify is a full stack MERN application that that offers
                visual representation of data. Contextify can handle general
                weight, distance, and time conversions as well as abstract
                conversions. This application is to help users quantify their
                metrics in a more digestible context, like say...bananas!
              </Card.Text>
              <Button
                variant="primary"
                href="https://protected-tundra-53056.herokuapp.com/"
              >
                Check it out
              </Button>
            </Card.Body>
          </Card>
        </>
      </div>
      {/* </Col>
      </Row> */}
    </Container>
  );
}
// <div>
//   <Carousel fade>
//     <Carousel.Item interval={7000}>
//       <a href="https://my-interactions.herokuapp.com">
//         <img
//           className="d-block w-100"
//           src={dashboard}
//           // src="holder.js/800x400?text=Second slide&bg=282c34"
//           alt="Second slide"
//         />
//       </a>

//       <Carousel.Caption>
//         {/* <h3 className="captionH3">My Interactions</h3>
//         <p className="captionP">
//           This application allows users to create profiles to research and
//           store drug interactions behind a secure and personal login.
//         </p> */}
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item interval={7000}>
//       <a href="https://jimbo8702.github.io/Project-One/">
//         <img
//           className="d-block w-100"
//           src={mockup}
//           // src="holder.js/800x400?text=First slide&bg=373940"
//           alt="First slide"
//         />
//       </a>
//       <Carousel.Caption>
//         {/* <h3 className="captionH3">Green Trip Planner</h3> */}
//         {/* <p className="captionP">
//           {" "}
//           If individuals are able to quantify the time vs. money vs. CO2
//           relationship of different methods of transit, then individuals
//           will be able to make better informed decisions about what to
//           prioritize for different trips. This application is the first step
//           in accomplishing that initiave.
//         </p> */}
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item interval={7000}>
//       <a href="https://protected-tundra-53056.herokuapp.com/">
//         <img
//           className="d-block w-100"
//           src={contextify}
//           // src="holder.js/800x400?text=Third slide&bg=20232a"
//           alt="Third slide"
//         />
//       </a>

//       <Carousel.Caption>
//         {/* <h3 className="captionH3">Contextify</h3>
//         <p className="captionP">
//           Contextify is a full stack MERN application that that offers
//           visual representation of data. Contextify can handle general
//           weight, distance, and time conversions as well as abstract
//           conversions. This application is to help users quantify their
//           metrics in a more digestible context, like say...bananas!
//         </p> */}
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
// </div>

// previous cards
//   <div id="projects" class="container">
//   <div class="card-img-top">
//     <h3>GreenTrip Planner</h3>
//     <a href="https://jimbo8702.github.io/Project-One/">
//       <img class="thumbnail" src={mockup} alt="Project 1: GreenTrip Planner" />
//     </a>
//     <p>
//       If individuals are able to quantify the time vs. money vs. CO2
//       relationship of different methods of transit, then individuals will be
//       able to make better informed decisions about what to prioritize for
//       different trips. This application is the first step in accomplishing that
//       initiave.
//     </p>
//   </div>

//   <div class="card-img-top">
//     <h3>My Interactions</h3>
//     <a href="https://my-interactions.herokuapp.com">
//       <img src={dashboard} class="thumbnail" alt="project 2: My Interactions" />
//     </a>
//     <p>
//       This application allows users to create profiles to research and store
//       drug interactions behind a secure and personal login.
//     </p>
//   </div>

//   <div class="card-img-top">
//     <h3>Contextify</h3>
//     <img src={contextify} class="thumbnail" alt="project 3" />
//     <p>
//       Contextify is a full stack MERN application that that offers visual
//       representation of data. Contextify can handle general weight, distance,
//       and time conversions as well as abstract conversions. This application is
//       to help users quantify their metrics in a more digestible context, like
//       say...bananas!
//     </p>
//   </div>

//   <div class="card">
//   <h3>Project 4</h3>
//   <img src="./assets/images/placeholder-img.jpeg" alt="project 4" />
//   <p>Brief description</p>
// </section>
// </div>;
{
  /* <div id="projects" class="container">
  <section class="card-img-top">
    <h3>GreenTrip Planner</h3>
    <a href="https://jimbo8702.github.io/Project-One/">
      <img class="thumbnail" src={mockup} alt="Project 1: GreenTrip Planner" />
    </a>
    <p>
      If individuals are able to quantify the time vs. money vs. CO2
      relationship of different methods of transit, then individuals will be
      able to make better informed decisions about what to prioritize for
      different trips. This application is the first step in accomplishing that
      initiave.
    </p>
  </section>

  <section class="card-img-top">
    <h3>My Interactions</h3>
    <a href="https://my-interactions.herokuapp.com">
      <img src={dashboard} class="thumbnail" alt="project 2: My Interactions" />
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
      representation of data. Contextify can handle general weight, distance,
      and time conversions as well as abstract conversions. This application is
      to help users quantify their metrics in a more digestible context, like
      say...bananas!
    </p>
  </section>

  {/* <section class="card">
  <h3>Project 4</h3>
  <img src="./assets/images/placeholder-img.jpeg" alt="project 4" />
  <p>Brief description</p>
</section> */
}
