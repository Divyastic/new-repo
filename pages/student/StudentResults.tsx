
import React from 'react';
import { MOCK_STUDENTS } from '../../services/mockData';
import { Trophy, TrendingUp } from 'lucide-react';

const StudentResults: React.FC = () => {
  const student = MOCK_STUDENTS[0];

  const results = [
    { code: 'CS201', subject: 'Data Structures', grade: 'A', marks: 88, credits: 4 },
    { code: 'CS202', subject: 'Operating Systems', grade: 'A+', marks: 92, credits: 4 },
    { code: 'MA201', subject: 'Mathematics II', grade: 'B+', marks: 78, credits: 3 },
    { code: 'CS204', subject: 'Digital Logic', grade: 'A', marks: 85, credits: 4 },
    { code: 'HU201', subject: 'Technical Writing', grade: 'O', marks: 95, credits: 2 },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-2xl font-bold text-slate-800">Exam Results</h1>
         <p className="text-slate-500">Semester 2 Performance Report</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                      <Trophy size={32} className="text-yellow-300" />
                  </div>
                  <div>
                      <p className="text-blue-100 font-medium">CGPA</p>
                      <h2 className="text-4xl font-bold">{student.gpa}</h2>
                  </div>
              </div>
              <div className="w-full bg-blue-900/30 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${(student.gpa/10)*100}%` }}></div>
              </div>
              <p className="mt-2 text-sm text-blue-200">Excellent Performance! You are in the top 5%.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                  <h3 className="text-lg font-bold text-slate-800">Total Credits Earned</h3>
                  <p className="text-4xl font-bold text-blue-600 mt-2">42<span className="text-lg text-slate-400 font-normal">/42</span></p>
              </div>
              <TrendingUp size={64} className="text-green-100" />
          </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                  <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Code</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Subject</th>
                      <th className="px-6 py-4 text-center text-xs font-medium text-slate-500 uppercase">Credits</th>
                      <th className="px-6 py-4 text-center text-xs font-medium text-slate-500 uppercase">Marks</th>
                      <th className="px-6 py-4 text-center text-xs font-medium text-slate-500 uppercase">Grade</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                  {results.map((res, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                          <td className="px-6 py-4 font-mono text-sm text-slate-600">{res.code}</td>
                          <td className="px-6 py-4 font-medium text-slate-900">{res.subject}</td>
                          <td className="px-6 py-4 text-center text-slate-600">{res.credits}</td>
                          <td className="px-6 py-4 text-center font-bold text-slate-800">{res.marks}</td>
                          <td className="px-6 py-4 text-center">
                              <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                                  res.grade === 'O' || res.grade === 'A+' ? 'bg-purple-100 text-purple-700' :
                                  res.grade === 'A' ? 'bg-green-100 text-green-700' :
                                  'bg-blue-100 text-blue-700'
                              }`}>
                                  {res.grade}
                              </span>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    </div>
  );
};

export default StudentResults;
