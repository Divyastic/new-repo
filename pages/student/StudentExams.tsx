
import React, { useState, useEffect } from 'react';
import { MOCK_EXAM_SCHEDULE, MOCK_STUDENTS } from '../../services/mockData';
import { Calendar, MapPin, Clock, Download, X, QrCode } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const StudentExams: React.FC = () => {
  const [showAdmitCard, setShowAdmitCard] = useState(false);
  const student = MOCK_STUDENTS[0];
  const location = useLocation();

  useEffect(() => {
    // Check if we navigated here with the intent to open the admit card
    if (location.state && (location.state as any).openAdmitCard) {
      setShowAdmitCard(true);
    }
  }, [location]);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
           <h1 className="text-2xl font-bold text-slate-800">Exams & Schedule</h1>
           <p className="text-slate-500">View upcoming exam dates and download admit card.</p>
        </div>
        <button 
            onClick={() => setShowAdmitCard(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-sm flex items-center gap-2"
        >
            <Download size={18} /> Admit Card
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                  <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Subject</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Code</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Date</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Time</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Venue</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                  {MOCK_EXAM_SCHEDULE.map((exam) => (
                      <tr key={exam.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 font-bold text-slate-800">{exam.subject}</td>
                          <td className="px-6 py-4 text-sm text-slate-600 font-mono">{exam.code}</td>
                          <td className="px-6 py-4">
                              <div className="flex items-center gap-2 text-sm text-slate-700">
                                  <Calendar size={16} className="text-blue-500" /> {exam.date}
                              </div>
                          </td>
                          <td className="px-6 py-4">
                              <div className="flex items-center gap-2 text-sm text-slate-700">
                                  <Clock size={16} className="text-orange-500" /> {exam.time}
                              </div>
                          </td>
                          <td className="px-6 py-4">
                              <div className="flex items-center gap-2 text-sm text-slate-700">
                                  <MapPin size={16} className="text-red-500" /> {exam.venue}
                              </div>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>

      {/* Admit Card Modal */}
      {showAdmitCard && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto">
              <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl relative">
                  <button 
                    onClick={() => setShowAdmitCard(false)}
                    className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 print:hidden z-10"
                  >
                      <X size={24} />
                  </button>
                  
                  <div className="p-8 print:p-0" id="admit-card">
                      <div className="border-2 border-slate-800 p-6 rounded-lg bg-white">
                          {/* Header */}
                          <div className="flex items-center justify-between border-b-2 border-slate-800 pb-4 mb-6">
                              <div className="flex items-center gap-4">
                                  <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center rounded-lg">
                                      <span className="font-bold text-xl">CES</span>
                                  </div>
                                  <div>
                                      <h2 className="text-2xl font-bold text-slate-900 uppercase">CloudEduSync University</h2>
                                      <p className="text-sm font-semibold text-slate-600 uppercase tracking-widest">Admit Card • Fall 2024</p>
                                  </div>
                              </div>
                              <div className="text-center">
                                  <QrCode size={64} className="text-slate-900" />
                              </div>
                          </div>

                          {/* Student Details */}
                          <div className="flex gap-6 mb-6">
                              <div className="w-32 h-40 bg-slate-100 border border-slate-300 flex items-center justify-center">
                                  <img src={student.avatar} alt="Student" className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1 grid grid-cols-2 gap-y-2 text-sm">
                                  <div className="font-bold text-slate-500 uppercase">Student Name</div>
                                  <div className="font-bold text-slate-900">{student.name}</div>
                                  
                                  <div className="font-bold text-slate-500 uppercase">Roll Number</div>
                                  <div className="font-bold text-slate-900 font-mono">{student.rollNumber}</div>
                                  
                                  <div className="font-bold text-slate-500 uppercase">Program</div>
                                  <div className="font-bold text-slate-900">{student.program}, {student.department}</div>
                                  
                                  <div className="font-bold text-slate-500 uppercase">Semester</div>
                                  <div className="font-bold text-slate-900">Semester {student.semester}</div>
                              </div>
                          </div>

                          {/* Exam Table */}
                          <table className="w-full border-collapse border border-slate-300 mb-8 text-sm">
                              <thead>
                                  <tr className="bg-slate-100">
                                      <th className="border border-slate-300 p-2 text-left">Date</th>
                                      <th className="border border-slate-300 p-2 text-left">Subject Code</th>
                                      <th className="border border-slate-300 p-2 text-left">Subject Title</th>
                                      <th className="border border-slate-300 p-2 text-left">Time</th>
                                      <th className="border border-slate-300 p-2 text-left">Sign</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {MOCK_EXAM_SCHEDULE.map(ex => (
                                      <tr key={ex.id}>
                                          <td className="border border-slate-300 p-2">{ex.date}</td>
                                          <td className="border border-slate-300 p-2">{ex.code}</td>
                                          <td className="border border-slate-300 p-2">{ex.subject}</td>
                                          <td className="border border-slate-300 p-2">{ex.time}</td>
                                          <td className="border border-slate-300 p-2"></td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>

                          {/* Footer */}
                          <div className="flex justify-between items-end mt-12 pt-4">
                              <div className="text-xs text-slate-500 max-w-xs">
                                  <p className="font-bold mb-1">Instructions:</p>
                                  <ul className="list-disc pl-4 space-y-1">
                                      <li>Bring this admit card and valid ID proof.</li>
                                      <li>Report to the exam hall 30 mins before time.</li>
                                      <li>Electronic gadgets are strictly prohibited.</li>
                                  </ul>
                              </div>
                              <div className="text-center">
                                  <div className="h-12 w-32 border-b border-slate-400 mb-2"></div>
                                  <p className="text-sm font-bold text-slate-900">Controller of Examinations</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3 print:hidden">
                      <button 
                        onClick={() => window.print()}
                        className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                      >
                          Print Admit Card
                      </button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default StudentExams;
