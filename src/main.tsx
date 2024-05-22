import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
if (root) {
  root.className = 'h-screen w-screen overflow-scroll no-scrollbar';
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
