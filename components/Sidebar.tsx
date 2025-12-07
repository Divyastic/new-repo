
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  Building2, 
  CreditCard, 
  LogOut,
  PieChart,
  BookOpen,
  ClipboardList,
  CheckSquare,
  FileText,
  Bell,
  Library,
  CalendarCheck
} from 'lucide-react';
import { UserRole } from '../types';

interface SidebarProps {
  role: UserRole;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, onLogout }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const getLinks = () => {
    if (role === UserRole.ADMIN) {
      return [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
        { icon: Users, label: 'Admissions', path: '/admin/admissions' },
        { icon: Building2, label: 'Hostel Allocation', path: '/admin/hostel' },
        { icon: CreditCard, label: 'Finance & Fees', path: '/admin/fees' },
        { icon: PieChart, label: 'Reports', path: '/admin/reports' },
      ];
    }
    if (role === UserRole.FACULTY) {
      return [
        { icon: LayoutDashboard, label: 'Faculty Dashboard', path: '/faculty' },
        { icon: BookOpen, label: 'My Courses', path: '/faculty/courses' },
        { icon: ClipboardList, label: 'Attendance', path: '/faculty/attendance' },
        { icon: CheckSquare, label: 'Grading', path: '/faculty/grading' },
      ];
    }
    if (role === UserRole.STUDENT) {
      return [
        { icon: LayoutDashboard, label: 'Home', path: '/student' },
        { icon: CreditCard, label: 'Fees', path: '/student/fees' },
        { icon: FileText, label: 'Receipt', path: '/student/receipt' },
        { icon: CalendarCheck, label: 'Exams', path: '/student/exams' },
        { icon: GraduationCap, label: 'Result', path: '/student/results' },
        { icon: Building2, label: 'Hostel Info', path: '/student/hostel' },
        { icon: Bell, label: 'Notification', path: '/student/notifications' },
        { icon: Library, label: 'Library', path: '/student/library' },
      ];
    }
    return [];
  };

  return (
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col shadow-xl z-20">
      <div className="p-6 border-b border-slate-700 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <GraduationCap size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight">CloudEduSync</h1>
          <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold">Lite Edition</span>
        </div>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {getLinks().map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
              isActive(link.path) 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <link.icon size={18} />
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-3 py-3 w-full rounded-lg text-sm font-medium text-slate-400 hover:bg-red-900/20 hover:text-red-400 transition-colors"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
