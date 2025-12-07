import React, { useState } from 'react';
import { MOCK_HOSTEL_ROOMS } from '../services/mockData';
import { User } from 'lucide-react';

const HostelView: React.FC = () => {
  const [rooms] = useState(MOCK_HOSTEL_ROOMS);
  const [selectedFloor, setSelectedFloor] = useState(1);

  const getRoomColor = (occupants: number, capacity: number) => {
    if (occupants === 0) return 'bg-green-100 border-green-200 text-green-700 hover:bg-green-200';
    if (occupants < capacity) return 'bg-yellow-100 border-yellow-200 text-yellow-700 hover:bg-yellow-200';
    return 'bg-red-100 border-red-200 text-red-700 hover:bg-red-200';
  };

  const filteredRooms = rooms.filter(r => r.floor === selectedFloor);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Hostel Allocation</h1>
        <p className="text-slate-500">Manage room inventory and student occupancy.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="border-b border-slate-200 p-4 flex gap-4 overflow-x-auto">
            {[1, 2, 3].map(floor => (
                <button
                    key={floor}
                    onClick={() => setSelectedFloor(floor)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedFloor === floor 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                >
                    Floor {floor}
                </button>
            ))}
        </div>

        <div className="p-8">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Block A - Floor {selectedFloor}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {filteredRooms.filter(r => r.block === 'A').map(room => (
                    <div 
                        key={room.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${getRoomColor(room.occupants.length, room.capacity)}`}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-lg">{room.number}</span>
                            <span className="text-xs font-semibold px-2 py-0.5 bg-white/50 rounded-full">
                                {room.occupants.length}/{room.capacity}
                            </span>
                        </div>
                        <div className="flex gap-1">
                            {[...Array(room.capacity)].map((_, i) => (
                                <User 
                                    key={i} 
                                    size={16} 
                                    className={i < room.occupants.length ? 'fill-current' : 'opacity-20'} 
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="my-8 border-t border-slate-100"></div>

            <h3 className="text-lg font-bold text-slate-800 mb-6">Block B - Floor {selectedFloor}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {filteredRooms.filter(r => r.block === 'B').map(room => (
                    <div 
                        key={room.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${getRoomColor(room.occupants.length, room.capacity)}`}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-lg">{room.number}</span>
                            <span className="text-xs font-semibold px-2 py-0.5 bg-white/50 rounded-full">
                                {room.occupants.length}/{room.capacity}
                            </span>
                        </div>
                        <div className="flex gap-1">
                            {[...Array(room.capacity)].map((_, i) => (
                                <User 
                                    key={i} 
                                    size={16} 
                                    className={i < room.occupants.length ? 'fill-current' : 'opacity-20'} 
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="bg-slate-50 p-4 border-t border-slate-200 flex gap-6 text-sm">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-600">Available</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-slate-600">Partially Occupied</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-slate-600">Full</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HostelView;