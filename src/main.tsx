import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {PrimeReactProvider} from "primereact/api";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <PrimeReactProvider>
            <App />
        </PrimeReactProvider>
    </StrictMode>
)
