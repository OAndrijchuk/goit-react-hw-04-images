import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { ContextProvider } from 'store/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
  <ContextProvider>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      pauseOnHover
      theme="colored"
      closeOnClick
    />
    <App />
  </ContextProvider>
  //  </React.StrictMode>
);
