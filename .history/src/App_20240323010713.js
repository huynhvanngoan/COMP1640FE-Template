import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';

import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import Guestboard from './pages/guest/StudentDashboard';


const App = () => {


  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
      
          <Route path="/admin-dashboard" element={<AdminDashboard />}/>

          <Route path="/student-dashboard" element={<StudentDashboard />}/>

          <Route path="/guest-dashboard" element={<Guestboard />}/>
        
          <Route path='*' element={<Navigate to="/login" />} />
          
        </Routes>
    </Router>
  )
}

export default App