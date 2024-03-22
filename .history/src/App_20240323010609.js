import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';

import AdminDashboard from './pages/admin/AdminDashboard';


const App = () => {


  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
      
          <Route path="/admin-dashboard" element={<AdminDashboard />}/>

          <Route path="/student-dashboard" element={<Student />}/>
        
          <Route path='*' element={<Navigate to="/login" />} />
          
        </Routes>
    </Router>
  )
}

export default App