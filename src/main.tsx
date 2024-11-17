import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './global';
import { Routes } from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyle />
        <Routes />
        <ToastContainer/>
    </StrictMode>
);
