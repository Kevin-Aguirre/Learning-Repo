// es7 + react/edix/react-native snippets rafce

import React, { useEffect } from "react"
import List from './components/List'
import axios from "axios"
import { baseURL } from "./utils/constant"

const App = () => {

  const [input, setInput] = React.useState("")
  const [tasks, setTasks] = React.useState([])
  const [updateUI, setUpdateUI] = React.useState(false)
  const [updateID, setUpdateId] = React.useState(null)

  useEffect(() => {
    axios.get(`${baseURL}/get`)
      .then((res) => {
        console.log(res.data);
        setTasks(res.data)
      })

  }, [updateUI])

  const addTask = () => {
    axios.post(`${baseURL}/save`, {task : input})
      .then((res) => {
        console.log(res.data);
        setInput("")
        setUpdateUI((prevState) => !prevState)
      })
  }

  const updateMode = (id, text) => {
    console.log(text);
    setInput(text)
    setUpdateId(id)
  }

  const updateTask = () => {
    axios.put(`${baseURL}/update/${updateID}`, {task : input})
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState)
        setUpdateId(null)
        setInput("")
      })
  }

  return (
    <main>
      <h1 className="title">Crud Operations</h1>
      <div className="input_holder">
        <input type="text" value={input} onChange={(e) => {
          setInput(e.target.value)
        }}/>
        <button type="submit" onClick={updateID ? updateTask : addTask}>
          {updateID ? "Update Task" : "Add Task"  }
        </button>
      </div>
      <ul>
        {tasks.map((task) => {
          return (
            <List 
              key={task._id}
              id={task._id}
              task={task.task}
              setUpdateUI={setUpdateUI}
              updateMode={updateMode}
            />
          )
        })}
      </ul>
    </main>
  )
}

export default App;



/*
Deploy frontend on: Vercel/Netlify
Deploy backend on: Render/Heroku
https://www.youtube.com/watch?v=PvMDWbAPPK4
*/