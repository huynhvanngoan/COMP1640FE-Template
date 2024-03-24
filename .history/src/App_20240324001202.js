import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import DepartmentDashboard from './pages/department/DepartmentDashboard';
import MarketingDashboard from './pages/marketing/MarketingDashboard';
import GuestDashboard from './pages/guest/GuestDashboard';
const App = () => {


  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
      
          <Route path="/admin-dashboard" element={<Lay />}/>

          <Route path="/student-dashboard" element={<StudentDashboard />}/>

          <Route path="/guest-dashboard" element={<GuestDashboard />}/>

          <Route path="/department-dashboard" element={<DepartmentDashboard />}/>

          <Route path="/marketing-dashboard" element={<MarketingDashboard />}/>

          {/* <Route path='/marketing-homepage' element={<MarketingHomePage  />}/> */}
        
          <Route path='*' element={<Navigate to="/login" />} />
          
        </Routes>
    </Router>
  )
}

export default App