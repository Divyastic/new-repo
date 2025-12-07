
import React from 'react';
import { MOCK_NOTIFICATIONS } from '../../services/mockData';
import { Bell, Calendar, Info, AlertTriangle } from 'lucide-react';

const StudentNotifications: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-2xl font-bold text-slate-800">Notifications</h1>
         <p className="text-slate-500">Stay updated with campus announcements.</p>
      </div>

      <div className="space-y-4">
          {MOCK_NOTIFICATIONS.map((notif) => (
              <div key={notif.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                      notif.type === 'ALERT' ? 'bg-red-100 text-red-600' :
                      notif.type === 'DEADLINE' ? 'bg-orange-100 text-orange-600' :
                      'bg-blue-100 text-blue-600'
                  }`}>
                      {notif.type === 'ALERT' ? <AlertTriangle size={24} /> :
                       notif.type === 'DEADLINE' ? <Calendar size={24} /> :
                       <Info size={24} />}
                  </div>
                  <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-slate-800 text-lg">{notif.title}</h3>
                          <span className="text-xs text-slate-400 font-medium">{notif.date}</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{notif.message}</p>
                  </div>
              </div>
          ))}
          
          {/* Static older notifications */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 opacity-75">
               <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                   <Bell size={24} />
               </div>
               <div className="flex-1">
                   <div className="flex justify-between items-start mb-1">
                       <h3 className="font-bold text-slate-800 text-lg">Welcome to the new semester</h3>
                       <span className="text-xs text-slate-400 font-medium">2024-08-01</span>
                   </div>
                   <p className="text-slate-600 leading-relaxed">Classes will commence from August 5th. Please collect your ID cards from the admin block.</p>
               </div>
          </div>
      </div>
    </div>
  );
};

export default StudentNotifications;
