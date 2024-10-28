import '../Screens/CssScreen.css'
import { TiPlus } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { Card } from '../Components/Card';
import { useEffect, useState } from 'react';

const initData = [
    {
        idTask: 1,
        nameTask: "Task 1",
        labels: [
            {
                idLabel: 1,
                nameLabel: "design",
                colorLanel: "#324856"
            },
            {
                idLabel: 2,
                nameLabel: "development",
                colorLanel: "#324856"
            },
        ],
        createDate: new Date(),
        startDate: null,
        doneDate: null,
    },
    {
        idTask: 2,
        nameTask: "Task 2",
        labels: [
            {
                idLabel: 1,
                nameLabel: "design",
                colorLanel: "#324856"
            },
        ],
        createDate: new Date(),
        startDate: new Date(),
        doneDate: null,
    },
    {
        idTask: 3,
        nameTask: "Task 3",
        labels: [],
        createDate: new Date(),
        startDate: new Date(),
        doneDate: new Date(),
    },
]

export const ManageTask = ()=>{
    const [isAdd, setIsAdd] = useState(false)
    const [newTask, setNewTask] = useState(null)
    const [listData, setListData] = [initData]
    const [taskTodo, setTaskTodo] = useState([])
    const [taskInprogress, setTaskInprogress] = useState([])
    const [taskDone, setTaskDone] = useState([])

    useEffect(()=>{
        setTaskTodo([])
        setTaskInprogress([])
        setTaskDone([])
        listData.forEach(item=>{
            if(item.doneDate) setTaskDone([...taskDone, item])
            else if(item.startDate) setTaskInprogress([...taskInprogress, item])
            else setTaskTodo([...taskTodo, item])
        })
    }, [listData])

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
                            <input className="input" placeholder='Write your new task' value={newTask} onInput={(e)=>setNewTask(e.target.value)}/>
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
                    {taskTodo?.map(item => <Card type={"todo"} data={item} key={item.idTask}/>)}
                </section>
                <section className="wrap-section wrap-section-inprogress">
                    <h3>In Progress</h3>
                    {taskInprogress?.map(item => <Card type={"progress"} data={item} key={item.idTask}/>)}
                </section>
                <section className="wrap-section wrap-section-done">
                    <h3>Done</h3>
                    {taskDone?.map(item => <Card type={"done"} data={item} key={item.idTask}/>)}
                </section>
            </main>
        </div>
    )
}