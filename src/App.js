
import React, { useState } from "react";

const TodoApp = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleInputChange = (event) => {
        setNewTask(event.target.value)
    }
    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask])
            setNewTask('');
        }
    }
    return (
        <div>
            <h2>TodoApp</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <div>
                <input type="text" value={newTask} onChange={handleInputChange}/>
                <button onClick={handleAddTask}>Добавить задачу</button>
            </div>
        </div>
    )
}
export default TodoApp


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