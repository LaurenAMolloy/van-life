import './App.css'
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages'
import Nav from './layouts/Nav'


function App() {
  return (
    <>
    <Nav />
    <Routes>
      {/* All of my routes go here! */}
      {/* localhost:5173/ */}
     <Route path="/" element={<Pages.HomePage />}/>
     <Route path="/home" element={<Pages.HomePage />}/>
     <Route path="/about" element={<Pages.AboutPage />} />
     <Route path="/vans" element={<Pages.VansPage />} />
    </Routes>
    </>
  )
}

export default App
