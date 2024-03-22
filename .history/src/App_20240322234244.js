import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';

import AdminDashboard from './pages/admin/AdminDashboard';


const App = () => {


  return (
    <Router>
  
        <Routes>
          <Route path="/" element={<Homepage />} />
          
          <Route path="/loginPage" element={<LoginPage/>} />
      
          <Route path="/AdminDashboard" element={<AdminDashboard />}/>
        
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>

    </Router>
  )
}

export default App