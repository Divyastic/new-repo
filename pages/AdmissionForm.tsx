import React, { useState } from 'react';
import { Upload, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdmissionForm: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3); // Success step
    }, 1500);
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Application Submitted!</h2>
          <p className="text-slate-600 mb-6">
            Your application ID is <span className="font-mono font-bold">APP-2024-892</span>. 
            We will review your details and notify you via email shortly.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Admission Application 2024</h1>
          <p className="mt-2 text-slate-600">Join the next generation of innovators.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-slate-50 px-8 py-4 border-b border-slate-200 flex justify-between items-center">
             <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Step {step} of 2</span>
             <div className="flex gap-2">
                <div className={`h-2 w-12 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                <div className={`h-2 w-12 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
             </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-lg font-medium text-slate-900">Personal Details</h3>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">Full Name</label>
                    <input type="text" id="fullName" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2.5 bg-slate-50" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                    <input type="email" id="email" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2.5 bg-slate-50" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                    <input type="tel" id="phone" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2.5 bg-slate-50" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-slate-700">Date of Birth</label>
                    <input type="date" id="dob" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2.5 bg-slate-50" />
                  </div>
                </div>

                <h3 className="text-lg font-medium text-slate-900 pt-4">Program Selection</h3>
                <div>
                   <label htmlFor="program" className="block text-sm font-medium text-slate-700">Desired Program</label>
                   <select id="program" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2.5 bg-slate-50">
                      <option>B.Tech Computer Science</option>
                      <option>B.Tech Information Technology</option>
                      <option>B.Tech Electronics</option>
                      <option>B.Tech Mechanical</option>
                   </select>
                </div>

                <div className="flex justify-end pt-4">
                   <button 
                    type="button" 
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                   >
                     Next Step <ArrowRight size={18} />
                   </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                 <h3 className="text-lg font-medium text-slate-900">Academic Records</h3>
                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Grade 10 Marks (%)</label>
                        <input type="number" max="100" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2.5 bg-slate-50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Grade 12 Marks (%)</label>
                        <input type="number" max="100" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2.5 bg-slate-50" />
                    </div>
                 </div>

                 <div className="pt-4">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Upload Marksheets (PDF/JPG)</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                       <Upload className="mx-auto h-12 w-12 text-slate-400 group-hover:text-blue-500 transition-colors" />
                       <p className="mt-2 text-sm text-slate-600">Click to upload or drag and drop</p>
                       <p className="text-xs text-slate-400">PDF, JPG up to 5MB</p>
                    </div>
                 </div>

                 <div className="flex justify-between items-center pt-6">
                   <button 
                    type="button" 
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 text-slate-600 font-medium hover:text-slate-900"
                   >
                     <ArrowLeft size={18} /> Back
                   </button>
                   <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex items-center gap-2 bg-blue-600 text-white px-8 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                   >
                     {isSubmitting ? 'Submitting...' : 'Submit Application'}
                   </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;