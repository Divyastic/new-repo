
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { UserRole } from './types';
import AdmissionForm from './pages/AdmissionForm';
import AdminDashboard from './pages/AdminDashboard';
import AdmissionsReview from './pages/AdmissionsReview';
import HostelView from './pages/HostelView';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import FacultyCourses from './pages/FacultyCourses';
import FacultyAttendance from './pages/FacultyAttendance';
import FacultyGrading from './pages/FacultyGrading';
import FinanceModule from './pages/FinanceModule';
import ReportsModule from './pages/ReportsModule';
import LoginPage from './pages/LoginPage';

// Student Pages
import StudentFees from './pages/student/StudentFees';
import StudentReceipt from './pages/student/StudentReceipt';
import StudentExams from './pages/student/StudentExams';
import StudentResults from './pages/student/StudentResults';
import StudentHostel from './pages/student/StudentHostel';
import StudentNotifications from './pages/student/StudentNotifications';
import StudentLibrary from './pages/student/StudentLibrary';

// Layout wrapper for authenticated routes
const DashboardLayout: React.FC<{ role: UserRole; onLogout: () => void }> = ({ role, onLogout }) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar role={role} onLogout={onLogout} />
      <div className="flex-1 ml-64 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={!userRole ? <LoginPage onLogin={handleLogin} /> : <Navigate to={
            userRole === UserRole.ADMIN ? '/admin' : 
            userRole === UserRole.FACULTY ? '/faculty' : '/student'
        } />} />
        
        <Route path="/apply" element={<AdmissionForm />} />

        {/* Admin Routes */}
        <Route 
          path="/admin" 
          element={userRole === UserRole.ADMIN ? <DashboardLayout role={UserRole.ADMIN} onLogout={handleLogout} /> : <Navigate to="/" />}
        >
          <Route index element={<AdminDashboard />} />
          <Route path="admissions" element={<AdmissionsReview />} />
          <Route path="hostel" element={<HostelView />} />
          <Route path="fees" element={<FinanceModule />} />
          <Route path="reports" element={<ReportsModule />} />
        </Route>

        {/* Faculty Routes */}
        <Route 
          path="/faculty" 
          element={userRole === UserRole.FACULTY ? <DashboardLayout role={UserRole.FACULTY} onLogout={handleLogout} /> : <Navigate to="/" />}
        >
          <Route index element={<FacultyDashboard />} />
          <Route path="courses" element={<FacultyCourses />} />
          <Route path="attendance" element={<FacultyAttendance />} />
          <Route path="grading" element={<FacultyGrading />} />
        </Route>

        {/* Student Routes */}
        <Route 
          path="/student" 
          element={userRole === UserRole.STUDENT ? <DashboardLayout role={UserRole.STUDENT} onLogout={handleLogout} /> : <Navigate to="/" />}
        >
          <Route index element={<StudentDashboard />} />
          <Route path="fees" element={<StudentFees />} />
          <Route path="receipt" element={<StudentReceipt />} />
          <Route path="exams" element={<StudentExams />} />
          <Route path="results" element={<StudentResults />} />
          <Route path="hostel" element={<StudentHostel />} />
          <Route path="notifications" element={<StudentNotifications />} />
          <Route path="library" element={<StudentLibrary />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
