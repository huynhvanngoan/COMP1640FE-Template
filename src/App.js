import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/student/StudentDashboard';
import DepartmentDashboard from './pages/department/DepartmentDashboard';
import MarketingDashboard from './pages/marketing/MarketingDashboard';
import GuestDashboard from './pages/guest/GuestDashboard';

import Layout from './pages/admin/layout';

import ListStudentArticles from './pages/student/StudentListArticles';


const App = () => {


  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
      
          <Route path="/admin" element={<Layout />}/>

          <Route path="/student-dashboard" element={<StudentDashboard />}/>

          <Route path="/guest-dashboard" element={<GuestDashboard />}/>

          <Route path="/department-dashboard" element={<DepartmentDashboard />}/>

          <Route path="/marketing-dashboard" element={<MarketingDashboard />}/>
        
          <Route path='*' element={<Navigate to="/login" />} />
          
        </Routes>
    </Router>
  )
}

export default App