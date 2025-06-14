import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Domains from './pages/Domains.jsx'
import User from './pages/User.jsx'
import Quiz from './pages/Quiz.jsx'
import Results from './pages/Results.jsx'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Domains/>}></Route>
        <Route path="/User" element={<User/>}></Route>
        <Route path="/quiz" element={<Quiz/>}></Route>
         <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
     </> 
  )
}

export default App
