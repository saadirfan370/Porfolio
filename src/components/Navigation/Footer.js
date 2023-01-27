import { Row,Col } from "react-bootstrap"
// import { MailchimpForm } from "./Mailchimp.form"
import Free from '../assets/FreePNG.png';
import location from '../assets/geo-alt.svg';
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram} from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";


import "./Skill.css"

export const Footer =()=>{
    return(
        <footer className="footer" id="footer">
            <container>
                <Row className=" foo1">
                    <Col sm={6}>
                    <h2>Reach Out to me!</h2>
                    <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
                    <p className="foo3" >location: <img src={location} /> Karachi, Pakistan</p>
                    <p>Phone No: 03132055886</p>
                    <p>Email: anasirfa577@gmail.com</p>
                    <div className="msg12">
                        <a style={{backgroundColor:"#333"}} href="https://github.com/saadirfan370" target={"_blank"}><BsGithub /></a>
                        <a  style={{backgroundColor:"#3b5998"}} href="https://www.linkedin.com/in/saad-irfan-704702242/" target={"_blank"}><BsLinkedin /></a>
                        <a style={{backgroundColor:"#ea4335"}} href="mailto:anasirfa577@gmail.com" target={"_blank"} ><BsFillEnvelopeFill /></a>
                        <a  style={{backgroundColor:"#3b5998"}} href=""><BsFacebook /></a>
                        <a style={{backgroundColor:"#fca326"}} href=""><BsInstagram /></a>
                    </div>
                    </Col>
                    <Col sm={6} className="text-center">
                        <img src={Free} /> 
                    </Col>
                </Row>
            </container>
        </footer>
    )
}