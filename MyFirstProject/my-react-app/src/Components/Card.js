import '../Components/CssComponent.css'
import { FaAnglesRight } from "react-icons/fa6";

export const Card = (props)=>{
    return(
        <div className="wrap-card">
            <p className="card-title">Name tassk nay kho qua di ba con</p>
            <div className="card-wrap-label">
                <p className="card-label">design</p>
                <p className="card-label">development</p>
            </div>
            <div className="card-bottom">
                {props.type === "todo" ?
                    <div className="card-btn-green">
                        <p>Start</p>
                        <FaAnglesRight size={14}/>
                    </div>
                : props.type === "progress" ?
                    <div className="card-btn-red">
                        <p>Done</p>
                        <FaAnglesRight size={14}/>
                    </div>
                : ""
                }
            </div>
        </div>
    )
}