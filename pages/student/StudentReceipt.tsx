
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MOCK_STUDENTS } from '../../services/mockData';
import { Printer, Download, ArrowLeft, CheckCircle } from 'lucide-react';

const StudentReceipt: React.FC = () => {
  const location = useLocation();
  const state = location.state as { transactionId: string; amount: number; date: string; method: string } | null;
  const student = MOCK_STUDENTS[0];

  const handlePrint = () => {
      window.print();
  };

  if (!state) {
      return (
          <div className="p-8 max-w-7xl mx-auto text-center">
              <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 inline-block">
                  <h2 className="text-xl font-bold text-slate-800 mb-4">No Receipt Found</h2>
                  <p className="text-slate-500 mb-6">Please start a payment transaction from the Fees page.</p>
                  <Link to="/student/fees" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Go to Fees</Link>
              </div>
          </div>
      );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between print:hidden">
          <Link to="/student/fees" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium">
              <ArrowLeft size={18} /> Back to Fees
          </Link>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
              <Printer size={18} /> Print Receipt
          </button>
      </div>

      <div className="bg-white p-12 rounded-2xl shadow-lg border border-slate-200 print:shadow-none print:border-0 print:p-0" id="receipt-area">
          <div className="flex justify-between items-start border-b-2 border-slate-100 pb-8 mb-8">
              <div>
                  <h1 className="text-3xl font-bold text-slate-900 tracking-tight">CloudEduSync</h1>
                  <p className="text-slate-500 mt-1">Official Payment Receipt</p>
              </div>
              <div className="text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-3">
                      <CheckCircle size={14} /> Paid Successfully
                  </div>
                  <p className="text-slate-500 text-sm font-medium">Date: <span className="text-slate-800">{state.date}</span></p>
                  <p className="text-slate-500 text-sm font-medium">Txn ID: <span className="text-slate-800">{state.transactionId}</span></p>
              </div>
          </div>

          <div className="grid grid-cols-2 gap-12 mb-8">
              <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Received From</p>
                  <h3 className="font-bold text-slate-800 text-lg">{student.name}</h3>
                  <p className="text-slate-600">{student.rollNumber}</p>
                  <p className="text-slate-600">{student.program}, {student.department}</p>
              </div>
              <div className="text-right">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Payment Method</p>
                  <p className="font-medium text-slate-800 text-lg">{state.method}</p>
                  <p className="text-slate-600">Online Transaction</p>
              </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 mb-8 border border-slate-100">
              <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-600 font-medium">Tuition / Hostel Fees</span>
                  <span className="text-slate-900 font-bold">₹ {state.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-600 font-medium">Convenience Fee</span>
                  <span className="text-slate-900 font-bold">₹ 0</span>
              </div>
              <div className="border-t-2 border-dashed border-slate-200 pt-4 flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-slate-800">Total Paid</span>
                  <span className="text-3xl font-bold text-blue-600">₹ {state.amount.toLocaleString()}</span>
              </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-100">
              <p className="text-slate-400 text-xs uppercase tracking-wide font-medium">This is a computer-generated receipt</p>
              <p className="text-slate-400 text-xs mt-1">CloudEduSync Systems • contact@cloudedu.com • +91 98765 43210</p>
          </div>
      </div>
    </div>
  );
};

export default StudentReceipt;
