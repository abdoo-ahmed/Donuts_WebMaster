import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import './index.css'
import App from './App.jsx'
import { ProductsProvider } from './Components/Context/ContextDonuts.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <App/>
    </ProductsProvider>
  </StrictMode>,
)
