import React, { useState } from "react";
import "./css/todo.css"

const TodoList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const [editingTask, setEditingTask] = useState(null)

  const addTask = () => {
    if (newTask.trim() !== "") {
      if (editingTask !== null) {
        // Редактирование задачи
        updateTask(editingTask, newTask)
      } else {
        // Добавление новой задвчи
        createTask(newTask);
      }
      setNewTask("")
      setEditingTask(null)
    }
  }

  const createTask = (text) => {
    const newTaskObject = {
      id: Date.now(),
      text: text,
    }
    setTasks([...tasks, newTaskObject])
  }
  const updateTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    )
    setTasks(updatedTasks)
  }
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }
  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId)
    if (taskToEdit) {
      setNewTask(taskToEdit.text)
      setEditingTask(taskId)
    }
  };

  return (
    <div>
      <h1>Todos List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>
          {editingTask !== null ? "Редактировать" : "Добавить задачу"}
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => editTask(task.id)}>Редактировать</button>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;



//     LESSON 5

// import React from 'react';
// import { useState } from "react";
// export default function Form() {
//     const [form, setForm] = useState({
//         firstName: 'Barbara',
//         lastName: 'Johnson',
//         phoneNumber: +996100200300
//     })
//     return(
//         <>
//             <label>
//                 First name:
//                 <input value={form.firstName} onChange={e => {
//                     setForm({
//                         ...form,
//                         firstName: e.target.value
//                     })
//                 }}/>
//             </label>
//             <label>
//                 Last name:
//                 <input value={form.lastName} onChange={e => {
//                     setForm({
//                         ...form,
//                         lastName: e.target.value
//                     })
//                 }}/>
//             </label>
//             <label>
//                 Phone number:
//                 <input value={form.phoneNumber} onChange={e => {
//                     setForm({
//                         ...form,
//                         phoneNumber: e.target.value
//                     })
//                 }}/>
//             </label>
//             <p>
//                 {form.firstName}{''}
//                 {form.lastName}{''}
//                 {form.phoneNumber}{''}
//             </p>
//         </>
//     )
// }


// import React from 'react';
// import { useState } from "react";
// import { sculptureList } from "./data";
//
// export default function Gallery() {
//     const [index, setIndex] = useState(0)
//     const [showMore, setShowMore] = useState(false)
//     const hasNext = index < sculptureList.length - 1;
//
//     function handleNextClick() {
//         if (hasNext) {
//             setIndex(index +1)
//         } else {
//             setIndex(0)
//         }
//     }
//     function handleMoreClick() {
//         setShowMore(!showMore)
//     }
//     let sculpture = sculptureList[index]
//     return (
//         <>
//             <button onClick={handleNextClick}>
//                 Next
//             </button>
//             <h2>
//                 <i>{sculpture.name}</i>
//                 by {sculpture.artist}
//             </h2>
//             <h3>
//                 ({index + 1} of {sculptureList.length})
//             </h3>
//             <button onClick={handleMoreClick}>
//                 {showMore ? "hide" : "Show"} details
//             </button>
//             {showMore && <p>{sculpture.description}</p>}
//             <img src={sculpture.url} alt={sculpture.alt}/>
//         </>
//     )
// }



//     HOME WORK 2

// const TwoSquares = () => {
//   const [Color1, setColor1] = useState('red')
//   const [Color2, setColor2] = useState('blue')
//
//   const SquareClick = (squareNumber) => {
//     if (squareNumber === 1) {
//       setColor1('blue')
//       setColor2('red')
//     } else {
//       setColor1('red')
//       setColor2('blue')
//     }
//   };
//
//   return (
//     <div>
//       <div
//         style={{ width: '100px', height: '100px', backgroundColor: Color1, margin: '10px', display: 'inline-block' }}
//         onClick={() => SquareClick(1)}
//       />
//       <div
//         style={{ width: '100px', height: '100px', backgroundColor: Color2, margin: '10px', display: 'inline-block' }}
//         onClick={() => SquareClick(2)}
//       />
//     </div>
//   );
// };
//
// export default TwoSquares


// export default function Search() {
//     function publish(formData) {
//         const content = formData.get("content")
//         const button = formData.get("button")
//         console.log(`'${content} sdfghjk '${button}'`)
//     }
//     function save(formdata) {
//         const content = formdata.get("content")
//         console.log(`your draft of '${content}' has been saved!`)
//     }
//     return(
//         <form action={publish}>
//             <textarea name="content" rows={4} cols={40} />
//             <br/>
//             <button type="submit" name="button" value="submit">
//                 Publish
//             </button>
//             <button formAction={save}>Save Draft</button>
//         </form>
//     )
// }