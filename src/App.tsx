import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import CustomerDashboard from './pages/CustomerDashboard';
import DriverDashboard from './pages/DriverDashboard';
import UserProfile from './pages/UserProfile';
import DriverProfile from './pages/DriverProfile';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            <Route
              path="/customer/*"
              element={
                <ProtectedRoute requiredRole="customer">
                  <Routes>
                    <Route path="dashboard" element={<CustomerDashboard />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="" element={<Navigate to="dashboard" replace />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
            
            <Route
              path="/driver/*"
              element={
                <ProtectedRoute requiredRole="driver">
                  <Routes>
                    <Route path="dashboard" element={<DriverDashboard />} />
                    <Route path="profile" element={<DriverProfile />} />
                    <Route path="" element={<Navigate to="dashboard" replace />} />
                  </Routes>
                </ProtectedRoute>
              }
            />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
