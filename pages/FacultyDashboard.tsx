
import React, { useState } from 'react';
import { MOCK_FACULTY, MOCK_COURSES, isAttendanceSubmittedToday } from '../services/mockData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, CheckSquare, ClipboardList, Clock, AlertCircle } from 'lucide-react';

const FacultyDashboard: React.FC = () => {
  const faculty = MOCK_FACULTY;
  const today = new Date();
  
  // Simulated stats
  const pendingGrading = 2; // Mock count
  const classesToday = MOCK_COURSES.filter(c => c.days.includes(today.toLocaleDateString('en-US', { weekday: 'short' })));
  const attendanceSubmittedCount = classesToday.filter(c => isAttendanceSubmittedToday(c.id)).length;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div className="flex items-center gap-4">
           <img src={faculty.avatar} alt="Profile" className="w-16 h-16 rounded-full border-4 border-white shadow-md" />
           <div>
             <h1 className="text-2xl font-bold text-slate-800">Hello, {faculty.name}</h1>
             <p className="text-slate-500">{faculty.designation} • {faculty.department}</p>
           </div>
        </div>
        <div className="flex gap-3">
             <Link to="/faculty/attendance" className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
                <ClipboardList size={18} /> Take Attendance
             </Link>
             <Link to="/faculty/grading" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2">
                <CheckSquare size={18} /> Enter Grades
             </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
        >
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-slate-500">Today's Classes</p>
                    <h3 className="text-3xl font-bold text-slate-800 mt-2">{classesToday.length}</h3>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                    <BookOpen size={24} />
                </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">Next: {classesToday[0]?.time || 'None'}</p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
        >
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-slate-500">Attendance Submitted</p>
                    <h3 className="text-3xl font-bold text-slate-800 mt-2">{attendanceSubmittedCount}/{classesToday.length}</h3>
                </div>
                <div className="p-3 rounded-lg bg-green-50 text-green-600">
                    <ClipboardList size={24} />
                </div>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5 mt-3">
                <div 
                    className="bg-green-500 h-1.5 rounded-full transition-all duration-500" 
                    style={{ width: `${classesToday.length ? (attendanceSubmittedCount / classesToday.length) * 100 : 0}%` }}
                ></div>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
        >
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-slate-500">Pending Grading</p>
                    <h3 className="text-3xl font-bold text-slate-800 mt-2">{pendingGrading}</h3>
                </div>
                <div className="p-3 rounded-lg bg-orange-50 text-orange-600">
                    <CheckSquare size={24} />
                </div>
            </div>
            <p className="text-xs font-medium text-orange-600 mt-2">Mid-term results due soon</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Schedule List */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-800 mb-6">Today's Schedule</h3>
            {classesToday.length > 0 ? (
                <div className="space-y-4">
                    {classesToday.map((course) => (
                        <div key={course.id} className="flex items-center p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                            <div className="w-16 text-center border-r border-slate-200 pr-4 mr-4">
                                <span className="block text-lg font-bold text-slate-800">{course.time.split(' ')[0]}</span>
                                <span className="text-xs text-slate-500 uppercase">{course.time.split(' ')[1]}</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-900">{course.name}</h4>
                                <p className="text-sm text-slate-500">{course.code} • Room {course.room}</p>
                            </div>
                            {isAttendanceSubmittedToday(course.id) ? (
                                <span className="px-3 py-1.5 text-xs font-medium bg-green-50 text-green-700 rounded-md">
                                    Done
                                </span>
                            ) : (
                                <Link to={`/faculty/attendance?course=${course.id}`} className="px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100">
                                    Mark Now
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-8 text-slate-500">
                    No classes scheduled for today.
                </div>
            )}
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-800 mb-6">Pending Tasks</h3>
            <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-lg bg-orange-50 border border-orange-100">
                    <div className="mt-1">
                        <AlertCircle className="text-orange-600" size={20} />
                    </div>
                    <div>
                        <h4 className="font-medium text-slate-900">Grade Mid-Term Exams</h4>
                        <p className="text-sm text-slate-600 mb-3">Database Systems (CS301)</p>
                        <Link to="/faculty/grading" className="text-sm font-semibold text-orange-700 hover:underline">
                            Start Grading &rarr;
                        </Link>
                    </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="mt-1">
                        <Clock className="text-slate-500" size={20} />
                    </div>
                    <div>
                        <h4 className="font-medium text-slate-900">Upload Course Syllabus</h4>
                        <p className="text-sm text-slate-600 mb-3">Cloud Computing (CS304)</p>
                        <button className="text-sm font-semibold text-blue-600 hover:underline">
                            Upload PDF &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;