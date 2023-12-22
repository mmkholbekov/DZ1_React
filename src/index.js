import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RegistrationForm from "./form";
import TodoApp from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RegistrationForm/>
      <TodoApp/>
  </React.StrictMode>
);
