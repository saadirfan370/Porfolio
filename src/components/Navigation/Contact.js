import { useState } from "react"
import { Container } from "react-bootstrap";
import {Row,Col} from "react-bootstrap";

export const Contact = () =>{
    const forInitialDetail = {
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:""
    }
    const [formDetails,setformDetails] = useState(forInitialDetail);
    const[buttonText,setButtonText] = useState("send");
    const [status,setstatus]= useState({});
    const onFormUpdate =(category,value) =>{
        setformDetails({
            ...formDetails ,
            [category] : value
        });
    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:3000/contact",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json;charset=utf-8",
            },
            body:JSON.stringify(formDetails),
        });
        setButtonText("send");
        let result  = response.json();
        setformDetails(forInitialDetail);
        if(result.code === 200){
            setstatus({success:true,message:"message send successfully"});
        }else{
            setstatus({success:false,message:"Something went wrong please try again latter."})
        }
    }


    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src="" alt="contact us" />
                    </Col>
                    <Col md={6}>
                        <h2>
                            Get in Touch
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate("firstName",e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate("lastName",e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e)=> onFormUpdate("email",e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Phone No" onChange={(e)=> onFormUpdate("phone",e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea rows={6} value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message",e.target.value)} ></textarea>
                                    <button type="submit" ><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message&&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "succeess"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}