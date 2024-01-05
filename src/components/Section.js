import React from "react";
import '../css/todo.css'

const Section = () => {
  return (
    <section>
      <h2>Добро пожаловать на официальный сайт VIP MOTORS!</h2>
    </section>
  )
}

export default Section;


//       Section.js
// import React from 'react';
// import { useState } from "react";
//
// export default function AddTodo({onAddTodo}) {
//     const [title, setTitle] = useState('')
//
//     return (
//         <>
//             <input placeholder="Add Tod"
//             value={title}
//             onChange={e => setTitle(e.target.value)}/>
//             <button onClick={() => {
//                 setTitle('')
//                 onAddTodo(title)
//             }}>
//                 Add
//             </button>
//         </>
//     )
// }