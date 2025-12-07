
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Download } from 'lucide-react';

const admissionData = [
  { name: 'May', students: 12 },
  { name: 'Jun', students: 45 },
  { name: 'Jul', students: 120 },
  { name: 'Aug', students: 85 },
  { name: 'Sep', students: 20 },
];

const feeTrendData = [
    { name: 'Week 1', amount: 120000 },
    { name: 'Week 2', amount: 250000 },
    { name: 'Week 3', amount: 180000 },
    { name: 'Week 4', amount: 320000 },
];

const ReportsModule: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold text-slate-800">Reports & Analytics</h1>
            <p className="text-slate-500">Deep dive into campus metrics.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium bg-white hover:bg-slate-50 text-slate-700">
            <Download size={16} /> Export All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Admission Trends */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-6">Admission Trends (2024)</h3>
              <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={admissionData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                          <Bar dataKey="students" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                      </BarChart>
                  </ResponsiveContainer>
              </div>
          </div>

          {/* Fee Collection Trend */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-6">Monthly Revenue Collection</h3>
              <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={feeTrendData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                          <Line type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={3} dot={{r: 4}} />
                      </LineChart>
                  </ResponsiveContainer>
              </div>
          </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
              <h3 className="font-bold text-slate-800">Downloadable Reports</h3>
          </div>
          <div className="divide-y divide-slate-100">
              {[
                  { name: 'Fee Collection Report (Monthly)', date: 'Oct 24, 2023', size: '2.4 MB' },
                  { name: 'Hostel Occupancy & Vacancy List', date: 'Oct 22, 2023', size: '1.1 MB' },
                  { name: 'Student Attendance Summary (Sem 3)', date: 'Oct 20, 2023', size: '4.5 MB' },
                  { name: 'Exam Results - B.Tech CS', date: 'Oct 15, 2023', size: '3.2 MB' },
              ].map((report, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
                              <Download size={20} />
                          </div>
                          <div>
                              <p className="font-medium text-slate-900">{report.name}</p>
                              <p className="text-xs text-slate-500">{report.date} • {report.size}</p>
                          </div>
                      </div>
                      <button className="text-sm font-medium text-blue-600 hover:underline">Download</button>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default ReportsModule;
