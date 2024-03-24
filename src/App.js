import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/student/StudentDashboard';
import DepartmentDashboard from './pages/department/DepartmentDashboard';
import GuestDashboard from './pages/guest/GuestDashboard';

import Layout from './pages/admin/layout';
import LayoutMarketing from './pages/marketing/LayoutMarketing';




const App = () => {


  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
      
          <Route path="/admin" element={<Layout />}/>
  

          <Route path="/student-dashboard" element={<StudentDashboard />}/>

          <Route path="/guest-dashboard" element={<GuestDashboard />}/>

          <Route path="/department-dashboard" element={<DepartmentDashboard />}/>

          <Route path="/marketing-dashboard" element={<LayoutMarketing />}/>
        
          <Route path='*' element={<Navigate to="/login" />} />
          
        </Routes>
    </Router>
  )
}

export default App