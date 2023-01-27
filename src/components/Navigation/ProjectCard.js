import {Col} from "react-bootstrap";
import "./Skill.css"

export const ProjectCard =({title,description,imgurl,url})=>{
return(
    <Col ms={6} md={4}>
        <div className="idx2">
        <div className="proj-imgbx" onClick={()=> window.open(url,"_blank")}>
            <img src={imgurl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
        </div>
    </Col>
)
}