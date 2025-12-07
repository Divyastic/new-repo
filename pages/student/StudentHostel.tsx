
import React from 'react';
import { MOCK_STUDENTS } from '../../services/mockData';
import { Home, Coffee, AlertCircle, Phone } from 'lucide-react';

const StudentHostel: React.FC = () => {
  const student = MOCK_STUDENTS[0];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-2xl font-bold text-slate-800">My Hostel</h1>
         <p className="text-slate-500">Room details and amenities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Room Details */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="h-32 bg-indigo-600 relative">
                  <div className="absolute -bottom-8 left-8">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg text-indigo-600">
                          <Home size={32} />
                      </div>
                  </div>
              </div>
              <div className="pt-12 p-8">
                  <h2 className="text-xl font-bold text-slate-800">Room {student.hostelRoom}</h2>
                  <p className="text-slate-500">Block G • Ground Floor</p>

                  <div className="mt-6 space-y-4">
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-600">Room Type</span>
                          <span className="font-medium">Double Sharing (AC)</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-600">Roommate</span>
                          <span className="font-medium">Priya Sharma</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                          <span className="text-slate-600">Warden</span>
                          <span className="font-medium">Mrs. K. Gupta</span>
                      </div>
                      <div className="flex justify-between">
                          <span className="text-slate-600">Warden Contact</span>
                          <span className="font-medium flex items-center gap-1 text-blue-600"><Phone size={14} /> +91 98765 00000</span>
                      </div>
                  </div>
              </div>
          </div>

          {/* Mess Menu */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Coffee className="text-orange-500" /> Today's Mess Menu
              </h3>
              <div className="space-y-6">
                  <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Breakfast (07:30 - 09:00)</p>
                      <p className="text-slate-800 font-medium">Aloo Paratha, Curd, Tea/Coffee</p>
                  </div>
                  <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Lunch (12:30 - 02:00)</p>
                      <p className="text-slate-800 font-medium">Rice, Dal Tadka, Seasonal Veg, Chapati, Salad</p>
                  </div>
                  <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Snacks (17:00 - 18:00)</p>
                      <p className="text-slate-800 font-medium">Veg Puff, Tea</p>
                  </div>
                  <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Dinner (20:00 - 21:30)</p>
                      <p className="text-slate-800 font-medium">Fried Rice, Manchurian, Kheer</p>
                  </div>
              </div>
          </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3 text-yellow-800 text-sm">
          <AlertCircle size={20} className="shrink-0" />
          <p>
              <strong>Notice:</strong> Hot water supply will be available from 6:00 AM to 9:00 AM only. Please conserve water.
          </p>
      </div>
    </div>
  );
};

export default StudentHostel;
