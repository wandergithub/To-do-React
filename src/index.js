import React from 'react';
import ReactDOM from 'react-dom/client';
// component file
import TodoContainer from './components/TodoContainer';

// stylesheet
import './App.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
