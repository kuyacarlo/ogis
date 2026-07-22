import React from 'react';
import { Shield, Plus } from 'lucide-react';
import { INNER_CIRCLE_GRID } from '../../data/mockData';

export default function RightSidebar({ 
  topWidget = null, 
  selectedFriend, 
  setSelectedFriend, 
  setDunbarModalOpen, 
  showToast 
}) {
  return (
    <div className="sticky top-6 self-start space-y-6">
      {/* 1. Optional Top Widget (e.g. Scrapbook Chapters or Fireside Stats) */}
      {topWidget}

      {/* 2. Inner Circle 15-Friend Grid (PLACED AT THE END) */}
      <div className="command-card p-5">
        <div className="flex justify-between items-center mb-4 border-b border-[#dfc0b9] pb-2">
          <button 
            onClick={() => setDunbarModalOpen(true)}
            className="text-xs font-bold text-[#8b716c] font-mono hover:text-[#a43720]"
          >
            INNER CIRCLE
          </button>
          <span className="text-xs text-[#a43720] font-bold font-mono">15/15 Active</span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {INNER_CIRCLE_GRID.map((person, i) => (
            <div 
              key={i}
              onClick={() => {
                setSelectedFriend(selectedFriend === person.code ? null : person.code);
                showToast(selectedFriend === person.code ? 'Cleared friend filter' : `Filtering feed by ${person.name}`);
              }}
              className="text-center group cursor-pointer"
            >
              <div className={`w-11 h-11 mx-auto rounded border ${selectedFriend === person.code ? 'border-[#a43720] ring-2 ring-[#a43720]' : 'border-[#dfc0b9]'} group-hover:border-[#a43720] overflow-hidden transition-all`}>
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <span className="block text-[9px] text-[#58423d] mt-1 font-bold font-mono">{person.code}</span>
            </div>
          ))}

          <div 
            onClick={() => setDunbarModalOpen(true)}
            className="text-center cursor-pointer"
          >
            <div className="w-11 h-11 mx-auto rounded border-2 border-dashed border-[#dfc0b9] flex items-center justify-center text-[#58423d] hover:border-[#a43720]">
              <Plus className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="mt-6 pt-3 border-t border-[#dfc0b9] text-center">
          <button 
            onClick={() => setDunbarModalOpen(true)}
            className="text-[10px] text-[#58423d] font-bold font-mono flex items-center justify-center gap-1 mx-auto hover:text-[#a43720]"
          >
            <Shield className="w-3 h-3 text-[#a43720]" /> DUNBAR CAP: 15
          </button>
        </div>
      </div>
    </div>
  );
}
