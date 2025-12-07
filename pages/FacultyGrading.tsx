
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOCK_COURSES, MOCK_STUDENTS } from '../services/mockData';
import { AssessmentType, GradeEntry } from '../types';
import { Save, Send, AlertTriangle } from 'lucide-react';

const FacultyGrading: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCourseId, setSelectedCourseId] = useState(searchParams.get('course') || MOCK_COURSES[0].id);
  const [assessmentType, setAssessmentType] = useState<AssessmentType>('MIDTERM');
  const [grades, setGrades] = useState<GradeEntry[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Mock fetching enrolled students
    const entries: GradeEntry[] = MOCK_STUDENTS.slice(0, 8).map(s => ({
        studentId: s.id,
        studentName: s.name,
        marks: 0,
        grade: 'F'
    }));
    setGrades(entries);
  }, [selectedCourseId]);

  const calculateGrade = (marks: number): string => {
      if (marks >= 90) return 'A';
      if (marks >= 80) return 'B';
      if (marks >= 70) return 'C';
      if (marks >= 60) return 'D';
      if (marks >= 40) return 'E';
      return 'F';
  };

  const handleMarkChange = (studentId: string, marks: number) => {
      const sanitizedMarks = Math.min(100, Math.max(0, marks));
      setGrades(prev => prev.map(g => 
          g.studentId === studentId 
            ? { ...g, marks: sanitizedMarks, grade: calculateGrade(sanitizedMarks) } 
            : g
      ));
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-2xl font-bold text-slate-800">Grading Portal</h1>
         <p className="text-slate-500">Enter and publish student grades for assessments.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
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
             <label className="block text-sm font-medium text-slate-700 mb-1">Assessment Type</label>
             <select 
                value={assessmentType} 
                onChange={(e) => setAssessmentType(e.target.value as AssessmentType)}
                className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
             >
                 <option value="ASSIGNMENT">Assignment</option>
                 <option value="TEST">Class Test</option>
                 <option value="MIDTERM">Mid-Term Exam</option>
                 <option value="PRACTICAL">Practical / Lab</option>
             </select>
         </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
           <thead className="bg-slate-50">
              <tr>
                 <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Student Name</th>
                 <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Marks (out of 100)</th>
                 <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Calculated Grade</th>
              </tr>
           </thead>
           <tbody className="bg-white divide-y divide-slate-200">
              {grades.map((entry) => (
                  <tr key={entry.studentId} className="hover:bg-slate-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                          {entry.studentName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <input 
                            type="number" 
                            min="0" max="100"
                            value={entry.marks}
                            onChange={(e) => handleMarkChange(entry.studentId, parseInt(e.target.value) || 0)}
                            className="w-24 border border-slate-300 rounded-md p-2 text-center font-mono focus:ring-2 focus:ring-blue-500 outline-none"
                          />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                              entry.grade === 'A' ? 'bg-green-100 text-green-700' :
                              entry.grade === 'F' ? 'bg-red-100 text-red-700' :
                              'bg-blue-100 text-blue-700'
                          }`}>
                              {entry.grade}
                          </span>
                      </td>
                  </tr>
              ))}
           </tbody>
        </table>
      </div>

      <div className="flex justify-end gap-4">
          <button className="px-6 py-3 bg-white text-slate-700 border border-slate-300 rounded-xl font-bold hover:bg-slate-50 flex items-center gap-2">
             <Save size={20} /> Save Draft
          </button>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-700 flex items-center gap-2">
             <Send size={20} /> Publish Grades
          </button>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3 text-yellow-800 text-sm">
          <AlertTriangle size={20} className="shrink-0" />
          <p>
              <strong>Note:</strong> Once grades are published, they will be instantly visible on student dashboards. 
              Please verify all entries before clicking Publish.
          </p>
      </div>
    </div>
  );
};

export default FacultyGrading;