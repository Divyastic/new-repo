
import React, { useState } from 'react';
import { UserRole } from '../types';
import { GraduationCap, ShieldCheck, User, BookOpen } from 'lucide-react';

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [role, setRole] = useState<UserRole>(UserRole.STUDENT);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Demo Authentication Logic
    const credentials = {
      [UserRole.ADMIN]: { user: 'admin', pass: 'admin123' },
      [UserRole.FACULTY]: { user: 'faculty', pass: 'teach123' },
      [UserRole.STUDENT]: { user: 'student', pass: 'learn123' },
    };

    const cred = credentials[role];
    
    // Allow simplified login for demo purposes or exact match
    if ((email.includes(cred.user) || email === cred.user) && password === cred.pass) {
      onLogin(role);
    } else {
      setError('Invalid credentials. Please check the demo instructions.');
    }
  };

  const getRoleIcon = (r: UserRole) => {
    switch (r) {
      case UserRole.ADMIN: return <ShieldCheck size={24} />;
      case UserRole.FACULTY: return <BookOpen size={24} />;
      case UserRole.STUDENT: return <User size={24} />;
      default: return <User size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Brand */}
        <div className="md:w-1/2 bg-blue-600 p-12 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-900 opacity-90 z-0"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 rounded-full opacity-30 z-0"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl font-bold tracking-wide">CloudEduSync</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">Manage Your Campus Efficiently</h2>
            <p className="text-blue-100 leading-relaxed">
              Admissions, fees, hostels, and academics—all in one unified platform. Designed for modern institutions.
            </p>
          </div>

          <div className="relative z-10 text-sm text-blue-200 mt-12">
            © 2024 CloudEduSync Systems
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="md:w-1/2 p-12 bg-white">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Welcome Back</h3>
          <p className="text-slate-500 mb-8">Please sign in to access your dashboard.</p>

          <div className="flex gap-2 mb-8 bg-slate-100 p-1 rounded-lg">
            {[UserRole.STUDENT, UserRole.FACULTY, UserRole.ADMIN].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${
                  role === r ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {getRoleIcon(r)}
                <span className="capitalize">{r.toLowerCase()}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email or Username</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-blue-50 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder={`e.g. ${role === UserRole.ADMIN ? 'admin' : role === UserRole.FACULTY ? 'faculty' : 'student'}`}
                required
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <a href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-blue-50 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 flex items-center gap-2">
                <span className="block w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-all transform active:scale-95 shadow-lg shadow-slate-200"
            >
              Sign In to Dashboard
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400">
              <strong>Demo Credentials:</strong><br/>
              Admin: admin / admin123<br/>
              Faculty: faculty / teach123<br/>
              Student: student / learn123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
