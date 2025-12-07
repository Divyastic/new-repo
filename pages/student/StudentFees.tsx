
import React, { useState } from 'react';
import { MOCK_STUDENTS, MOCK_INVOICES } from '../../services/mockData';
import { CreditCard, CheckCircle, AlertTriangle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentFees: React.FC = () => {
  const student = MOCK_STUDENTS[0];
  const invoices = MOCK_INVOICES.filter(inv => inv.studentId === student.id);
  const navigate = useNavigate();

  const totalFee = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidAmount = invoices.filter(i => i.status === 'PAID').reduce((sum, i) => sum + i.amount, 0);
  const pendingAmount = totalFee - paidAmount;

  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [processing, setProcessing] = useState(false);

  const handlePayClick = (invoiceId: string) => {
      setSelectedInvoice(invoiceId);
      setShowModal(true);
  };

  const processPayment = () => {
      if (!paymentMethod) return;
      setProcessing(true);
      setTimeout(() => {
          setProcessing(false);
          setShowModal(false);
          
          // Data to pass to Receipt Generator
          const receiptData = { 
              transactionId: `TXN_${Math.floor(Math.random() * 900000) + 100000}`,
              amount: invoices.find(i => i.id === selectedInvoice)?.amount || 0,
              date: new Date().toLocaleDateString('en-GB'),
              method: paymentMethod
          };

          navigate('/student/receipt', { state: receiptData });
      }, 1500);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Fees & Payments</h1>
        <p className="text-slate-500">Manage your tuition and hostel fee payments.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm font-medium">Total Fees</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-2">₹ {totalFee.toLocaleString()}</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm font-medium">Paid Amount</p>
            <h3 className="text-2xl font-bold text-green-600 mt-2">₹ {paidAmount.toLocaleString()}</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm font-medium">Pending Dues</p>
            <h3 className="text-2xl font-bold text-red-600 mt-2">₹ {pendingAmount.toLocaleString()}</h3>
        </div>
      </div>

      {/* Invoice List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
         <div className="p-6 border-b border-slate-200">
             <h3 className="font-bold text-slate-800">Fee Invoices</h3>
         </div>
         <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
               <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Description</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Due Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Amount</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-slate-500 uppercase">Action</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
               {invoices.map((inv) => (
                   <tr key={inv.id} className="hover:bg-slate-50">
                       <td className="px-6 py-4 font-medium text-slate-900">{inv.description}</td>
                       <td className="px-6 py-4 text-slate-500 text-sm">{inv.dueDate}</td>
                       <td className="px-6 py-4 font-bold text-slate-800">₹ {inv.amount.toLocaleString()}</td>
                       <td className="px-6 py-4">
                           <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                               inv.status === 'PAID' ? 'bg-green-100 text-green-700' : 
                               inv.status === 'OVERDUE' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                           }`}>
                               {inv.status}
                           </span>
                       </td>
                       <td className="px-6 py-4 text-right">
                           {inv.status !== 'PAID' ? (
                               <button 
                                 onClick={() => handlePayClick(inv.id)}
                                 className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                               >
                                   Pay Now
                               </button>
                           ) : (
                               <span className="text-green-600 text-sm flex items-center justify-end gap-1">
                                   <CheckCircle size={16} /> Paid
                               </span>
                           )}
                       </td>
                   </tr>
               ))}
            </tbody>
         </table>
      </div>

      {/* Payment Modal */}
      {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
                  <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                      <h3 className="text-lg font-bold text-slate-800">Select Payment Method</h3>
                      <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-700"><X size={24} /></button>
                  </div>
                  <div className="p-6 space-y-4">
                      <p className="text-sm text-slate-500 mb-4">
                          Pay <strong>₹ {invoices.find(i => i.id === selectedInvoice)?.amount.toLocaleString()}</strong> for {invoices.find(i => i.id === selectedInvoice)?.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                          {['UPI', 'Credit Card', 'Debit Card', 'Net Banking'].map((method) => (
                              <button
                                key={method}
                                onClick={() => setPaymentMethod(method)}
                                className={`p-4 border rounded-xl flex flex-col items-center justify-center gap-2 transition-all ${
                                    paymentMethod === method 
                                    ? 'border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600' 
                                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                                }`}
                              >
                                  <CreditCard size={24} />
                                  <span className="text-sm font-medium">{method}</span>
                              </button>
                          ))}
                      </div>
                  </div>
                  <div className="p-6 bg-slate-50 border-t border-slate-200">
                      <button 
                        onClick={processPayment}
                        disabled={!paymentMethod || processing}
                        className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                          {processing ? 'Processing...' : 'Proceed to Pay'}
                      </button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default StudentFees;
