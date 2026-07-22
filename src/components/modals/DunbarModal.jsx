import React from 'react';
import { Users, X } from 'lucide-react';

export default function DunbarModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="neo-box max-w-lg w-full bg-white space-y-4 relative">
        <div className="flex justify-between items-center border-b border-[#dfc0b9] pb-2">
          <h3 className="text-lg font-bold text-[#a43720] flex items-center gap-2">
            <Users className="w-4 h-4" /> Dunbar 15 Cognitive Boundary
          </h3>
          <button onClick={onClose} className="text-[#58423d] hover:text-[#a43720]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs text-[#1e1c10] leading-relaxed">
          <p className="bg-[#faf3e0] p-2.5 rounded border border-[#dfc0b9] font-bold text-[#a43720]">
            Your Inner Circle is currently at maximum capacity (15/15 Active Friends).
          </p>
          <p>Anthropologist Robin Dunbar demonstrated that humans can maintain a maximum of 15 close, high-trust relationships. Beyond 15, trust deteriorates into performance.</p>
        </div>

        <div className="flex justify-end pt-2 border-t border-[#dfc0b9]">
          <button onClick={onClose} className="button-tactile">
            Close Boundary Info
          </button>
        </div>
      </div>
    </div>
  );
}
