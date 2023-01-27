import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightShort } from 'react-bootstrap-icons';
import { useEffect,useState } from "react";
import './Banner.css'
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";
import 'animate.css';
import img3 from "../assets/WhatsApp-2.png"
import { Contact } from "./Contact";
import {Link} from "react-router-dom"

const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["Front end Developer","web Developer"];
    const [text, setText]  = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return ()=> {clearInterval(ticker)};
    },[text])

    const tick  = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0 , text.length + 1)

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === fullText){
            setisDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ""){
            setisDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center ctrColor">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                            <span className="tagline">Hi There,</span>
                            {/* <h1>{`I'm Saad `}<span className="wrap">{text}</span></h1> */}
                            <h1 className="New2">{`I'm Saad Irfan`}</h1>
                            {/* <h1>{`I Am `}<span className="wrap">{text}</span></h1> */}
                            <h1 className="new">{`I Am `}<span className="wrap">{text}</span></h1>
                            <p>
                            A passionate Front end Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
                            </p>
                        </div>}
                        </TrackVisibility>
                            <button ><Link to={"/contact"}>CONTACT ME {<ArrowRightShort />}</Link></button>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="imgset">
                        <img src={img3} alt="header image" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Banner;