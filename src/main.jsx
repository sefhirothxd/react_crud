import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UseTodoProvider from './context/UseTodoProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UseTodoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UseTodoProvider>
);
