
import React from 'react';
import { MOCK_INVOICES } from '../services/mockData';
import KPICard from '../components/KPICard';
import { DollarSign, CreditCard, AlertTriangle, TrendingUp, Search, Download } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const FinanceModule: React.FC = () => {
  const totalCollected = MOCK_INVOICES.filter(i => i.status === 'PAID').reduce((acc, curr) => acc + curr.amount, 0);
  const totalPending = MOCK_INVOICES.filter(i => i.status !== 'PAID').reduce((acc, curr) => acc + curr.amount, 0);

  const data = [
    { name: 'Paid', value: totalCollected, color: '#16a34a' },
    { name: 'Pending', value: totalPending, color: '#dc2626' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
       <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Finance & Fees</h1>
          <p className="text-slate-500">Track collections, invoices, and outstanding dues.</p>
        </div>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-sm">
            + Create Invoice
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard title="Total Collected" value={`₹ ${totalCollected.toLocaleString()}`} trend="+8% this month" trendUp={true} icon={DollarSign} color="green" />
        <KPICard title="Pending Dues" value={`₹ ${totalPending.toLocaleString()}`} trend="Needs attention" trendUp={false} icon={AlertTriangle} color="orange" />
        <KPICard title="Scholarships" value="₹ 12.5L" trend="Disbursed YTD" trendUp={true} icon={TrendingUp} color="blue" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">Recent Transactions</h3>
                <div className="relative">
                    <Search className="absolute left-2.5 top-1.5 text-slate-400" size={16} />
                    <input type="text" placeholder="Search student..." className="pl-9 pr-4 py-1.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:border-blue-500" />
                </div>
            </div>
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {MOCK_INVOICES.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{inv.studentName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{inv.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-800">₹ {inv.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        inv.status === 'PAID' ? 'bg-green-100 text-green-800' : 
                        inv.status === 'OVERDUE' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900"><Download size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-800 mb-6">Collection Overview</h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="space-y-4 mt-4">
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-600"></div>
                        <span className="text-slate-600">Paid</span>
                    </div>
                    <span className="font-bold">75%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-600"></div>
                        <span className="text-slate-600">Pending</span>
                    </div>
                    <span className="font-bold">25%</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceModule;
