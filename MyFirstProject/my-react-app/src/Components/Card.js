import '../Components/CssComponent.css'
import { FaAnglesRight } from "react-icons/fa6";

const initData = [
    {
        idTask: 1,
        nameTask: "Task 1",
        labels: [
            {
                idLabel: 1,
                nameLabel: "design",
                colorLabel: "#324856"
            },
        ],
        createDate: new Date(),
        startDate: null,
        doneDate: null,
    },
]
export const Card = (props)=>{
    const {type, data} = props
    return(
        <div className="wrap-card" id={data.idTask}>
            <p className="card-title">{data.nameTask}</p>
            <div className="card-wrap-label">
                {data.labels?.map(item => <p className="card-label" key={item.idLabel}>{item.nameLabel}</p>)}
            </div>
            <div className="card-bottom">
                {type === "todo" ?
                    <div className="card-btn-green">
                        <p>Start</p>
                        <FaAnglesRight size={14}/>
                    </div>
                : type === "progress" ?
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