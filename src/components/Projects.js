import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Letsdev",
      description: "A web based platform to connect with other developers",
      imgUrl: projImg3,
      link:'https://devbuilder.tech'
    },
    {
      title: "Househub",
      description: "An android application for students or other users to get and share flats",
      imgUrl: projImg3,
      link:'https://vidstore.netlify.app'
    },
    {
      title: "Food Delivery",
      description: "Angular,Nodejs,Mongodb",
      imgUrl: projImg1,
      link:'https://instant-food.netlify.app'
    },
    {
      title: "News Today",
      description: "React, Nodejs",
      imgUrl: projImg3,
      link:'https://abhishekgund.netlify.app'
    },
    {
      title: "RealTime Chat Application",
      description: "Youtube API,React,MaterialUI",
      imgUrl: projImg3,
      link:'https://chat-whatsapp-clone.netlify.app'
    },
    {
      title: "Youtube Clone",
      description: "Youtube API,React,MaterialUI",
      imgUrl: projImg3,
      link:'https://vidstore.netlify.app'
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Project Gives Us Real Life Knowledge Of how Software Engineer Do Thier Work At Industry Level.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
