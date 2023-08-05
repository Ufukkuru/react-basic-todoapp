import { useState } from 'react'
import './App.css'
import Headers from './components/Headers'
import CreateTask from './components/CreateTask'
import Tasks from './components/Tasks'
import Footer from './components/Footer'

function App() {
  const [tasks, setTasks] = useState([])
  
  const addTask = (newTask)=>{
    setTasks((prevTask)=>{
      return[
        ...prevTask,
        newTask
      ]
    })
  }

  const deleteTask =(id)=>{
    setTasks((prevTask)=>{
      debugger
      return prevTask.filter((taskItem, index)=>{
        return index !== id
      })
    })
  }

  return (
    <>
      <div>
        <Headers/>
        <CreateTask onAdd={addTask}/>
        <div className='grid grid-cols-3'>
        {tasks.map((taskItem, index)=>{
          return(
            <Tasks key={index} id={index} title={taskItem.title} task={taskItem.task} delete={deleteTask}/>
          )
        })}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
