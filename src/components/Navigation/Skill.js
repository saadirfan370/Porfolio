import { Row ,Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Skill.css'
import meter1 from "../assets/meter1.png"




export const Skill  = () =>{
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };

          return(
            <section className="Skill" id="Skill">
                <container>
                    <Row>
                        <Col>
                        <div className="Skill-bx">
                            <h2>
                               Skills
                            </h2>
                            <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="image" />
                                    <h5>Backend</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="image" />
                                    <h5>Programming</h5>
                                </div>
                            </Carousel>
                        </div>
                        </Col>
                    </Row>
                </container>
                {/* <img className="background-image-left" src={meter1} /> */}
            </section>
          )
}