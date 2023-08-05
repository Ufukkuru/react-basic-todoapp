import React, { useState } from 'react'


function CreateTask(props) {

    const [task, setTask] = useState({
        title:'',
        task:''
    })

    function detectChange (event){
        const {name,value} = event.target;
        setTask((prevTask)=>{
            return{
                ...prevTask,
                [name]:value,
            }
        })
    }
    
    function submitChange(event){
        props.onAdd(task)
        setTask({
            title:'',
            task:'',
        })
        event.preventDefault()
    }

  return (
    <>
    <form className='mt-10 text-2xl font-bold ml-36'>
            <div className='flex container'>
            <label>Header:</label>
            <input type="text" value={task.title} onChange={detectChange}  name='title' className='w-80 border-2 border-black ml-2 text-lg' placeholder='Plase Enter Header' />
            </div>
            <div className='flex container mt-5'>
            <label className='ml-1'>Task:</label>
            <textarea type="text" value={task.task} onChange={detectChange} name='task' className='w-80 h-24 border-2 border-black ml-9 text-lg' placeholder='Please Enter Task'/>
            </div>
            <button onClick={submitChange} className='w-80 ml-24 rounded-xl text-white hover:bg-teal-700 ease-in-out transition-transform delay-150 mt-5 bg-teal-900'>Add Task</button>
        </form>
    </>
  )
}

export default CreateTask