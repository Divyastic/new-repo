
import React from 'react';
import { MOCK_LIBRARY_BOOKS } from '../../services/mockData';
import { Book, Clock, CheckCircle, Search } from 'lucide-react';

const StudentLibrary: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-2xl font-bold text-slate-800">Library Catalog</h1>
            <p className="text-slate-500">Search books and manage your borrowed items.</p>
         </div>
         <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
             <input 
                type="text" 
                placeholder="Search by title, author..." 
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg w-64 focus:ring-2 focus:ring-blue-500 outline-none"
             />
         </div>
      </div>

      {/* Borrowed Books */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Book className="text-blue-600" /> Currently Borrowed
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_LIBRARY_BOOKS.filter(b => b.status === 'BORROWED').map(book => (
                  <div key={book.id} className="p-4 border border-slate-200 rounded-lg flex justify-between items-center bg-blue-50/50">
                      <div>
                          <h4 className="font-bold text-slate-900">{book.title}</h4>
                          <p className="text-sm text-slate-500">{book.author}</p>
                      </div>
                      <div className="text-right">
                          <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">Due: {book.dueDate}</span>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* Available Books List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                  <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Book Title</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Author</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-slate-500 uppercase">Action</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                  {MOCK_LIBRARY_BOOKS.map(book => (
                      <tr key={book.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 font-medium text-slate-900">{book.title}</td>
                          <td className="px-6 py-4 text-slate-500">{book.author}</td>
                          <td className="px-6 py-4">
                              {book.status === 'AVAILABLE' ? (
                                  <span className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-100 px-2 py-1 rounded-full w-fit">
                                      <CheckCircle size={12} /> Available
                                  </span>
                              ) : (
                                  <span className="flex items-center gap-1 text-orange-600 text-xs font-bold bg-orange-100 px-2 py-1 rounded-full w-fit">
                                      <Clock size={12} /> Borrowed
                                  </span>
                              )}
                          </td>
                          <td className="px-6 py-4 text-right">
                              <button disabled={book.status === 'BORROWED'} className="text-blue-600 text-sm font-medium hover:underline disabled:text-slate-400 disabled:no-underline">
                                  Reserve
                              </button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    </div>
  );
};

export default StudentLibrary;
