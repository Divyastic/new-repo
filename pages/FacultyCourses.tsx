
import React from 'react';
import { MOCK_COURSES } from '../services/mockData';
import { BookOpen, Users, Clock, MapPin, ClipboardList, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FacultyCourses: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">My Courses</h1>
        <p className="text-slate-500">Manage your assigned subjects and classes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_COURSES.map((course, index) => (
          <motion.div 
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                   <BookOpen size={24} />
                </div>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded uppercase">
                   {course.code}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-2">{course.name}</h3>
              
              <div className="space-y-2 text-sm text-slate-500 mb-6">
                 <div className="flex items-center gap-2">
                    <Users size={16} /> {course.enrolledCount} Students Enrolled
                 </div>
                 <div className="flex items-center gap-2">
                    <Clock size={16} /> {course.days.join(', ')} • {course.time}
                 </div>
                 <div className="flex items-center gap-2">
                    <MapPin size={16} /> Room {course.room}
                 </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-slate-100">
                 <Link 
                    to={`/faculty/attendance?course=${course.id}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"
                 >
                    <ClipboardList size={16} /> Attendance
                 </Link>
                 <Link 
                    to={`/faculty/grading?course=${course.id}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                 >
                    <CheckSquare size={16} /> Grades
                 </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FacultyCourses;