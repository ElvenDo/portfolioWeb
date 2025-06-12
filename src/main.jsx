import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/index.scss'
import NotFound from './page/NotFound.jsx'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import PageProjet from './page/projet.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/projets/:slug' element={<PageProjet />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>

  </StrictMode>,
)