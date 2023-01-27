import { Container, Row ,Col, Tab, TabContent} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import "./Skill.css"
import img1 from "../assets/img12.png";
import img2 from "../assets/img13.png";
import img3 from "../assets/img14.png";

export const Projects = () =>{
    const project =[
        {
            title:"Registration form",
            description:"Design & storage",
            url:"https://sweet-eclair-0ed263.netlify.app",
            imgurl:img2
        },
        {
            title:"demo Web Site",
            description:"only Design",
            url:"https://gregarious-semifreddo-dc4d66.netlify.app",
            imgurl:img1,
        },
        {
            title:"News",
            description:"Design & Api deta Get",
            url:"https://creative-zuccutto-3df5bb.netlify.app",
            imgurl:img3
        },
    ]

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p> Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
                        <div>
                            <Row>
                                {
                                    project.map((project,index) =>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}