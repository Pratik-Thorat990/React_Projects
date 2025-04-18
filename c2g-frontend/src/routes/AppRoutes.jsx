import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GoogleLoginPage from '../pages/GoogleLoginPage'
import LandingPage from '../pages/LandingPage'
import ProtectedRoute from '../components/ProtectedRoutes'

function AppRoutes() {
  return (
    <div>
         <Routes>
            <Route path="/" element={<GoogleLoginPage />} />
            <Route path="/login" element={<GoogleLoginPage />} />
    
        {/* ✅ Protected Landing Page Route */}
        <Route
            path="/landing"
            element={
                    <ProtectedRoute>
                    <LandingPage />
                    </ProtectedRoute>
                    }   
        />
    </Routes>
    </div>
  )
}

export default AppRoutes
