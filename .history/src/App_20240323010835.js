import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';

import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import Guestboard from './pages/guest/StudentDashboard';
import DepartmentDashboard from './pages/department/DepartmentDashboard';
import MarketingDashboard from './pages/marketing/MarketingDashboard';


const App = () => {


  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
      
          <Route path="/admin-dashboard" element={<AdminDashboard />}/>

          <Route path="/student-dashboard" element={<StudentDashboard />}/>

          <Route path="/guest-dashboard" element={<Gu />}/>

          <Route path="/department-dashboard" element={<DepartmentDashboard />}/>

          <Route path="/marketing-dashboard" element={<MarketingDashboard />}/>
        
          <Route path='*' element={<Navigate to="/login" />} />
          
        </Routes>
    </Router>
  )
}

export default App