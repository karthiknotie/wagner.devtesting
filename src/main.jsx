import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/Styles/style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
