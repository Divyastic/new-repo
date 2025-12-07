import React from 'react';
import { Users, DollarSign, BedDouble, GraduationCap, TrendingUp, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import KPICard from '../components/KPICard';

const attendanceData = [
  { name: 'CS', value: 92 },
  { name: 'IT', value: 88 },
  { name: 'ME', value: 76 },
  { name: 'EC', value: 85 },
];

const feeData = [
  { name: 'Collected', value: 75, color: '#2563eb' },
  { name: 'Outstanding', value: 25, color: '#ef4444' },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Admin Overview</h1>
          <p className="text-slate-500">Welcome back, Admin. Here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
             <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm">Export Report</button>
             <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 shadow-sm">Sync Sheets</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Total Students" value="1,245" trend="+12% vs last year" trendUp={true} icon={Users} color="blue" />
        <KPICard title="Fee Collection" value="₹ 1.2 Cr" trend="92% of target" trendUp={true} icon={DollarSign} color="green" />
        <KPICard title="Hostel Occupancy" value="84%" trend="12 beds remaining" trendUp={false} icon={BedDouble} color="orange" />
        <KPICard title="Avg Attendance" value="87%" trend="Stable" trendUp={true} icon={GraduationCap} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Attendance Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-800">Department Attendance</h3>
            <select className="text-sm border-slate-300 rounded-md shadow-sm border p-1">
                <option>This Month</option>
                <option>Last Month</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                    cursor={{fill: '#f1f5f9'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Fee Collection Pie */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <h3 className="text-lg font-bold text-slate-800 mb-6">Fee Status</h3>
           <div className="h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={feeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {feeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                 <span className="text-2xl font-bold text-slate-800">75%</span>
                 <span className="text-xs text-slate-500 uppercase">Collected</span>
              </div>
           </div>
           <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                 <span className="flex items-center gap-2 text-slate-600"><div className="w-3 h-3 rounded-full bg-blue-600"></div> Paid</span>
                 <span className="font-semibold text-slate-800">₹ 92,00,000</span>
              </div>
              <div className="flex justify-between text-sm">
                 <span className="flex items-center gap-2 text-slate-600"><div className="w-3 h-3 rounded-full bg-red-500"></div> Outstanding</span>
                 <span className="font-semibold text-slate-800">₹ 28,00,000</span>
              </div>
           </div>
        </div>
      </div>

      {/* Quick Actions / Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <h3 className="text-lg font-bold text-slate-800 mb-4">Pending Admissions</h3>
             <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">AS</div>
                            <div>
                                <h4 className="font-medium text-slate-800">Ankit Sharma</h4>
                                <p className="text-xs text-slate-500">B.Tech CS • 95% Merit</p>
                            </div>
                        </div>
                        <button className="text-sm text-blue-600 font-medium hover:underline">Review</button>
                    </div>
                ))}
             </div>
          </div>
           
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <h3 className="text-lg font-bold text-slate-800 mb-4">System Alerts</h3>
             <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                    <div>
                        <span className="font-bold">Backup Failed</span>
                        <p>Daily database backup failed at 03:00 AM. Check storage quota.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-50 text-yellow-700 rounded-lg text-sm">
                    <TrendingUp size={20} className="shrink-0 mt-0.5" />
                    <div>
                        <span className="font-bold">High Server Load</span>
                        <p>API latency increased by 20% in the last hour.</p>
                    </div>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default AdminDashboard;