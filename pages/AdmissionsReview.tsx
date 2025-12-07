import React, { useState } from 'react';
import { MOCK_ADMISSIONS } from '../services/mockData';
import { AdmissionStatus } from '../types';
import { Check, X, Eye, Download, Search, Filter } from 'lucide-react';

const AdmissionsReview: React.FC = () => {
  const [admissions, setAdmissions] = useState(MOCK_ADMISSIONS);

  const handleAction = (id: string, status: AdmissionStatus) => {
    setAdmissions(prev => prev.map(a => a.id === id ? { ...a, status } : a));
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
         <div>
            <h1 className="text-2xl font-bold text-slate-800">Admissions Queue</h1>
            <p className="text-slate-500">Review and approve incoming student applications.</p>
         </div>
         <div className="flex gap-2">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input type="text" placeholder="Search applicant..." className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-700 bg-white hover:bg-slate-50">
                <Filter size={18} /> Filter
            </button>
         </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Applicant</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Program</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Score</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Documents</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {admissions.map((app) => (
              <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                        {app.fullName.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-slate-900">{app.fullName}</div>
                      <div className="text-sm text-slate-500">{app.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {app.course}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {app.grade12Marks}% (12th)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                  <div className="flex gap-2">
                    {app.documents.map((doc, idx) => (
                        <a key={idx} href="#" className="flex items-center hover:underline" title={doc.name}>
                           <Download size={16} />
                        </a>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                   {app.status === 'PENDING' && <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Pending</span>}
                   {app.status === 'APPROVED' && <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">Approved</span>}
                   {app.status === 'REJECTED' && <span className="text-xs font-semibold bg-red-100 text-red-800 px-2 py-1 rounded-full">Rejected</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-2">
                    <button className="text-slate-400 hover:text-blue-600 p-1" title="View Details">
                        <Eye size={18} />
                    </button>
                    {app.status === 'PENDING' && (
                        <>
                            <button 
                                onClick={() => handleAction(app.id, AdmissionStatus.APPROVED)}
                                className="text-green-500 hover:text-green-700 p-1 bg-green-50 rounded" 
                                title="Approve"
                            >
                                <Check size={18} />
                            </button>
                            <button 
                                onClick={() => handleAction(app.id, AdmissionStatus.REJECTED)}
                                className="text-red-500 hover:text-red-700 p-1 bg-red-50 rounded" 
                                title="Reject"
                            >
                                <X size={18} />
                            </button>
                        </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionsReview;