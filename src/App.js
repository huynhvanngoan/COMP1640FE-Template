import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import StudentListArticle from './pages/student/StudentListArticles';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentNewArticles from './pages/student/StudentCreateArticles'; //
import DepartmentDashboard from './pages/department/DepartmentDashboard';
import MarketingDashboard from './pages/marketing/MarketingDashboard';
import GuestDashboard from './pages/guest/GuestDashboard';
import Layout from './pages/admin/layout';


const App = () => {


  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
      
          <Route path="/admin" element={<Layout />}/>

          <Route path="/student-dashboard" element={<StudentDashboard />}/>
          <Route path="/student-dashboard/list-article" element={<StudentListArticle />}/>
          <Route path="/student-dashboard/new-article" element={<StudentNewArticles />}/>

          <Route path="/guest-dashboard" element={<GuestDashboard />}/>

          <Route path="/department-dashboard" element={<DepartmentDashboard />}/>

          <Route path="/marketing-dashboard" element={<MarketingDashboard />}/>
        
          <Route path='*' element={<Navigate to="/login" />} />
          
        </Routes>
    </Router>
  )
}

export default App