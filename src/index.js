import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RegistrationForm from "./form";
import TaskApp from "./components/Massiv";
import TodoList from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RegistrationForm/>
      <TaskApp/>
      <TodoList/>
  </React.StrictMode>
);
