
import React from 'react';
import { MOCK_STUDENTS, MOCK_TIMETABLE } from '../services/mockData';
import KPICard from '../components/KPICard';
import { GraduationCap, Clock, CreditCard, Link as LinkIcon, Download, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard: React.FC = () => {
  const student = MOCK_STUDENTS[0]; // Himani Singh
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header Profile Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-6">
           <img src={student.avatar} alt="Profile" className="w-24 h-24 rounded-full border-4 border-slate-50 shadow-md" />
           <div className="text-center md:text-left flex-1">
             <h1 className="text-3xl font-bold text-slate-800">{student.name}</h1>
             <p className="text-slate-500 font-medium text-lg">{student.program} • {student.department}</p>
             <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Roll No: {student.rollNumber}</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Sem {student.semester}</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Batch {student.batch}</span>
             </div>
           </div>
           <div className="hidden md:block">
              <div className="text-right">
                  <p className="text-sm text-slate-500">Academic Year</p>
                  <p className="text-xl font-bold text-slate-800">2024-2025</p>
              </div>
           </div>
      </div>

      {/* KPI Stats - Cleaned up */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard title="Current GPA" value={student.gpa} trend="Excellent" trendUp={true} icon={GraduationCap} color="blue" />
        <KPICard title="Attendance" value={`${student.attendance}%`} trend="Regular" trendUp={true} icon={Clock} color="green" />
        <KPICard title="Fees Due" value={`₹ ${student.feesDue.toLocaleString()}`} trend={student.feesDue > 0 ? "Payment Pending" : "Paid"} trendUp={student.feesDue === 0} icon={CreditCard} color="orange" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: Timetable & Quick Actions */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Timetable Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-800">Weekly Timetable</h3>
                    <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-2 py-1 rounded">Current Week</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-100 text-sm text-center">
                        <thead className="bg-slate-50 text-slate-500">
                            <tr>
                                <th className="px-4 py-3 font-medium text-left">Time</th>
                                <th className="px-4 py-3 font-medium">Mon</th>
                                <th className="px-4 py-3 font-medium">Tue</th>
                                <th className="px-4 py-3 font-medium">Wed</th>
                                <th className="px-4 py-3 font-medium">Thu</th>
                                <th className="px-4 py-3 font-medium">Fri</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {MOCK_TIMETABLE.map((row, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-4 py-3 font-mono text-slate-500 text-left whitespace-nowrap">{row.time}</td>
                                    <td className="px-4 py-3">{row.mon || '-'}</td>
                                    <td className="px-4 py-3">{row.tue || '-'}</td>
                                    <td className="px-4 py-3">{row.wed || '-'}</td>
                                    <td className="px-4 py-3">{row.thu || '-'}</td>
                                    <td className="px-4 py-3">{row.fri || '-'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

        {/* Right Col: Quick Links */}
        <div className="space-y-6">
             <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                 <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <LinkIcon size={20} className="text-blue-600" />
                    Quick Actions
                 </h3>
                 <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium transition-colors border border-slate-200 group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-md shadow-sm group-hover:scale-110 transition-transform">
                                <CreditCard size={18} className="text-blue-600" />
                            </div>
                            Download ID Card
                        </div>
                        <Download size={16} className="text-slate-400 group-hover:text-blue-600" />
                    </button>

                    <button 
                        onClick={() => navigate('/student/exams', { state: { openAdmitCard: true } })}
                        className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium transition-colors border border-slate-200 group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-md shadow-sm group-hover:scale-110 transition-transform">
                                <FileText size={18} className="text-purple-600" />
                            </div>
                            Admit Card
                        </div>
                        <Download size={16} className="text-slate-400 group-hover:text-purple-600" />
                    </button>
                    
                    <button 
                         onClick={() => navigate('/student/library')}
                         className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium transition-colors border border-slate-200 group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-md shadow-sm group-hover:scale-110 transition-transform">
                                <Clock size={18} className="text-green-600" />
                            </div>
                            Library Catalog
                        </div>
                    </button>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
