
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOCK_COURSES, MOCK_STUDENTS, MOCK_ATTENDANCE_HISTORY } from '../services/mockData';
import { AttendanceStatus } from '../types';
import { Calendar, Save, CheckCircle, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const FacultyAttendance: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCourseId, setSelectedCourseId] = useState(searchParams.get('course') || MOCK_COURSES[0].id);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [students, setStudents] = useState<{id: string, name: string, roll: string, status: AttendanceStatus}[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Load students when course changes
  useEffect(() => {
    // In a real app, fetch students enrolled in this course from API
    // For mock, we just take the first 8 students for any course
    const enrolledStudents = MOCK_STUDENTS.slice(0, 8).map(s => ({
      id: s.id,
      name: s.name,
      roll: s.rollNumber,
      status: 'PRESENT' as AttendanceStatus // Default to present
    }));
    setStudents(enrolledStudents);
    setSubmitted(false);
  }, [selectedCourseId]);

  const handleStatusChange = (id: string, status: AttendanceStatus) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, status } : s));
  };

  const markAll = (status: AttendanceStatus) => {
    setStudents(prev => prev.map(s => ({ ...s, status })));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
        // Push to mock history
        students.forEach(s => {
            MOCK_ATTENDANCE_HISTORY.push({
                id: Math.random().toString(36).substr(2, 9),
                date,
                courseId: selectedCourseId,
                studentId: s.id,
                status: s.status
            });
        });

        setIsSubmitting(false);
        setSubmitted(true);
    }, 1500);
  };

  const stats = {
    present: students.filter(s => s.status === 'PRESENT').length,
    absent: students.filter(s => s.status === 'ABSENT').length,
    total: students.length
  };

  if (submitted) {
      return (
          <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
              <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Attendance Submitted!</h2>
                  <p className="text-slate-600 mb-6">
                      Attendance for <strong>{MOCK_COURSES.find(c => c.id === selectedCourseId)?.name}</strong> on {date} has been recorded.
                  </p>
                  <div className="flex gap-4 justify-center">
                      <button 
                          onClick={() => setSubmitted(false)}
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
                      >
                          Done
                      </button>
                  </div>
              </div>
          </div>
      );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h1 className="text-2xl font-bold text-slate-800">Mark Attendance</h1>
           <p className="text-slate-500">Record student presence for your classes.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
         <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Select Course</label>
             <select 
                value={selectedCourseId} 
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
             >
                 {MOCK_COURSES.map(c => (
                     <option key={c.id} value={c.id}>{c.code} - {c.name}</option>
                 ))}
             </select>
         </div>
         <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
             <div className="relative">
                <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg p-2.5 pl-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <Calendar className="absolute left-3 top-3 text-slate-400" size={18} />
             </div>
         </div>
         <div className="flex items-end gap-2">
             <button onClick={() => markAll('PRESENT')} className="flex-1 bg-green-50 text-green-700 py-2.5 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">Mark All Present</button>
             <button onClick={() => markAll('ABSENT')} className="flex-1 bg-red-50 text-red-700 py-2.5 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">Mark All Absent</button>
         </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
         <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-slate-700">Student List</h3>
            <div className="flex gap-4 text-sm font-medium">
                <span className="text-green-600">Present: {stats.present}</span>
                <span className="text-red-600">Absent: {stats.absent}</span>
                <span className="text-slate-600">Total: {stats.total}</span>
            </div>
         </div>
         <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
               <thead className="bg-white">
                  <tr>
                     <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Roll Number</th>
                     <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                     <th className="px-6 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  </tr>
               </thead>
               <tbody className="bg-white divide-y divide-slate-200">
                  {students.map((student) => (
                      <motion.tr 
                        key={student.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={student.status === 'ABSENT' ? 'bg-red-50' : ''}
                      >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-600">{student.roll}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{student.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap flex justify-center gap-2">
                              {['PRESENT', 'ABSENT', 'LATE', 'EXCUSED'].map((status) => (
                                  <button
                                    key={status}
                                    onClick={() => handleStatusChange(student.id, status as AttendanceStatus)}
                                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                                        student.status === status
                                        ? status === 'PRESENT' ? 'bg-green-600 text-white shadow-md'
                                        : status === 'ABSENT' ? 'bg-red-600 text-white shadow-md'
                                        : status === 'LATE' ? 'bg-yellow-500 text-white shadow-md'
                                        : 'bg-blue-500 text-white shadow-md'
                                        : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                                    }`}
                                  >
                                      {status.charAt(0)}
                                  </button>
                              ))}
                          </td>
                      </motion.tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      <div className="flex justify-end gap-4 sticky bottom-8">
          <button 
             onClick={() => markAll('PRESENT')}
             className="px-6 py-3 bg-white text-slate-700 border border-slate-300 rounded-xl font-bold shadow-lg hover:bg-slate-50 flex items-center gap-2"
          >
             <RotateCcw size={20} /> Reset
          </button>
          <button 
             onClick={handleSubmit}
             disabled={isSubmitting}
             className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-700 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
             {isSubmitting ? 'Saving...' : <><Save size={20} /> Submit Attendance</>}
          </button>
      </div>
    </div>
  );
};

export default FacultyAttendance;