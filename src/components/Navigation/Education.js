import { Container,Row,Col } from "react-bootstrap"
import Vertual from "../assets/img12345.png"
import Vertual1 from "../assets/ship.png"
import "./Skill.css"
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";
import 'animate.css';

export const Education = ()=>{
  return(
    <Container className="main45">
            <h2>Education</h2>
            <TrackVisibility>
            {({isVisible}) =>
            <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
        <Row>
         <Col>
            <div className="main67">
                <img src={Vertual} alt="img" />
                <div className="main68">
                    <h3>Virtual University of Pakistan</h3>
                    <p>Bachelor of Science in Computer Science</p>
                    <p>2022</p>
                </div>
            </div>
         </Col>
        </Row>
        </div>}
        </TrackVisibility>
        <TrackVisibility>
        {({isVisible}) =>
            <div className={isVisible ? "animate__animated animate__backInRight" : ""}>
        <Row>
         <Col>
            <div className="main67">
                <img src={Vertual1} alt="img" />
                <div className="main68">
                    <h3>Pakistan Shipowner College</h3>
                    <p>Intermediate Pre engineering</p>
                    <p>2018</p>
                </div>
            </div>
         </Col>
        </Row>   
        </div>}
        </TrackVisibility>
    </Container>
  )
}

