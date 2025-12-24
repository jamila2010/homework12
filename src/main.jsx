import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<>
  <Toaster richColors={true} position='top-center' reverseOrder={false} expand={true} />
    <App />
    </>
 
)
