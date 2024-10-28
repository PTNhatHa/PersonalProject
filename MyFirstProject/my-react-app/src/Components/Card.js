import { useState } from 'react';
import '../Components/CssComponent.css'
import Modal from 'react-modal';
import { formatDateTime } from '../Utils/Utils';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdOutlineDownloadDone } from "react-icons/md";
import { FaAnglesRight } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { RiEditFill } from "react-icons/ri";

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
    const [isShow, setIsShow] = useState(false)
    const [isEditLabel, setIsEditLabel] = useState(false)
    return(
        <>
            <div className="wrap-card" id={data.idTask} onClick={()=>setIsShow(true)}>
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
            <Modal
                isOpen={isShow}
                onRequestClose={()=>setIsShow(false)}
                className={"my-modal"}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)' // Thay đổi màu overlay
                      }
                }}
            >
                <div>
                    <header className='modal-header'>
                        <p className='modal-title'>{data.nameTask}</p>
                        <CgClose size={24} className='btn-circle' onClick={()=>setIsShow(false)}/>
                    </header>
                    <div className="card-wrap-label">
                        <p className='modal-sub-title'>Label:</p>
                        {data.labels?.map(item => <p className="card-label" key={item.idLabel}>{item.nameLabel}</p>)}
                        <RiEditFill size={14} className='btn-circle' onClick={()=>setIsShow(false)}/>
                    </div>
                    <div className="modal-wrap-content">
                        <p className='modal-sub-title'>Create date:</p>
                        <p className='modal-sub-content'>{formatDateTime(data.createDate)}</p>
                    </div>
                    {data.startDate &&
                        <div className="modal-wrap-content">
                            <p className='modal-sub-title'>Start date:</p>
                            <p className='modal-sub-content'>{formatDateTime(data.startDate)}</p>
                        </div>
                    }
                    {data.doneDate &&
                        <div className="modal-wrap-content">
                            <p className='modal-sub-title'>Done date:</p>
                            <p className='modal-sub-content'>{formatDateTime(data.doneDate)}</p>
                        </div>
                    }
                </div>
                <div className="card-bottom">
                    <div className="btn-gray modal-bottom">
                        <p>Delete</p>
                        <RiDeleteBin2Fill  size={24}/>
                    </div>
                    {type === "todo" ?
                        <div className="card-btn-green modal-bottom">
                            <p>Start</p>
                            <BsFire  size={24}/>
                        </div>
                    : type === "progress" ?
                        <div className="card-btn-red modal-bottom">
                            <p>Done</p>
                            <MdOutlineDownloadDone  size={24}/>
                        </div>
                    : ""
                    }
                </div>
            </Modal>
        </>
    )
}