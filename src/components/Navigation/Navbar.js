import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import { Contact } from './Contact';

import './style.css';


function BasicExample() {
    const [activeLink, setActiveLink]=useState("home");
    const [scrolled, setScrolled]= useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener('scroll',onScroll);
    },[])

    const onUpdateActiveLink= (value)=>{
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container className='container'>
        <Navbar.Brand href="#home">
            <a href='#' className='Logo' >
              <span className='grey-color'>{`<`}</span>
              <span className='logo-name'>Saad Irfan</span>
              <span className='grey-color'>{`/>`}</span>
            </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto1">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-Link" : "navbar-Link"} onClick={()=>onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#Skill" className={activeLink === "skill" ? "active navbar-Link" : "navbar-Link"} onClick={()=>onUpdateActiveLink("skills")}>Skill</Nav.Link>
            <Nav.Link href="#projects"className={activeLink === "projects" ? "active navbar-Link" : "navbar-Link"} onClick={()=>onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className={scrolled ?"social":'social-icon'}>
                <a href='https://www.linkedin.com/in/saad-irfan-704702242/' target="_blank" ><img className={scrolled ?"icon5":'icon32'} src={linkedin} alt='' /></a>
                <a href='#' onClick={()=> alert("Sorry No account Here")}><img className={scrolled ?"icon5":'icon32'} src={facebook} alt='' /></a>
                <a href='#'><img className={scrolled ?"icon5":'icon32'} src={instagram} alt='' /></a>
            </div>
            <button className='vvd'><a href='#footer'><span>Let's Connect</span></a></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;