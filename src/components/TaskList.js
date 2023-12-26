import React from 'react';
import { useState } from "react";

export default function TaskList({
    todos, onChangeTodo, onDeleteTodo
}) {
    return(
        <ul>
            {todos.map(todos => (
                <li key={todos.id}>
                    <Task todos={todos} onChange={onChangeTodo} onDelete={onDeleteTodo}/>
                </li>
            ))}
        </ul>
    )
}
function Task({todos, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false)
    let todoContent
    if (isEditing) {
        todoContent = (
            <>
            <input value={todos.title} onChange={e =>{
                onChange({
                    ...todos,
                    title: e.target.value
                })
            }}
            />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        )
    } else {
        todoContent = (
            <>
                {todos.title}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        )
    }
    return (
        <label>
            <input type="checkbox" checked={todos.done} onChange={e =>{
                onChange({
                    ...todos,
                    done: e.target.checked
                })
            }}/>
            {todoContent}
            <button onClick={() => onDelete(todos.id)}>
                Delete
            </button>
        </label>
    )
}
