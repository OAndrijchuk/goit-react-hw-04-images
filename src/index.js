import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      pauseOnHover
      theme="colored"
      closeOnClick
    />
    <App />
  </>
);
