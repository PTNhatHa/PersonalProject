import '../Screens/CssScreen.css'
import { TiPlus } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { Card } from '../Components/Card';
import { useState } from 'react';

export const ManageTask = ()=>{
    const [isAdd, setIsAdd] = useState(false)
    const [newTask, setNewTask] = useState(null)
    
    return(
        <div className="wrap-screen">
            <header>
                <h1>Magage your tasks</h1>
                <div className="wrap-add-task">
                    {isAdd !== true ? 
                        <div className="btn" onClick={()=>setIsAdd(true)}>
                            <TiPlus size={18}/>
                            <p>Add task</p>
                        </div>
                    :
                        <>
                            <input className="input" placeholder='Write your new task'/>
                            <div className="btn">
                                <FaCheck  size={18}/>
                            </div>
                            <div className="btn" onClick={()=>{
                                setIsAdd(false)
                                setNewTask(null)
                            }}>
                                <IoClose size={18}/>
                            </div>
                        </>
                    }   
                </div>
            </header>
            <main className='main-task'>
                <section className="wrap-section wrap-section-todo">
                    <h3>Todo</h3>
                    <div>
                        <Card type={"todo"}/>
                        <Card type={"todo"}/>
                        <Card type={"todo"}/>
                    </div>
                </section>
                <section className="wrap-section wrap-section-inprogress">
                    <h3>In Progress</h3>
                    <div>
                        <Card type={"progress"}/>
                        <Card type={"progress"}/>
                    </div>
                </section>
                <section className="wrap-section wrap-section-done">
                    <h3>Done</h3>
                    <div>
                        <Card type={"done"}/>
                    </div>
                </section>
            </main>
        </div>
    )
}