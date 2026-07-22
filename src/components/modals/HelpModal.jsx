import React from 'react';
import { BookOpen, X } from 'lucide-react';

export default function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="neo-box max-w-lg w-full bg-white space-y-4 relative">
        <div className="flex justify-between items-center border-b border-[#dfc0b9] pb-2">
          <h3 className="text-lg font-bold text-[#a43720] flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Tsunagaranai Kachi Manifesto
          </h3>
          <button onClick={onClose} className="text-[#58423d] hover:text-[#a43720]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs text-[#1e1c10] leading-relaxed">
          <p><strong>What is Tsunagaranai Kachi (Disconnected by Design)?</strong></p>
          <p>Modern platforms force perpetual hyper-connectivity and dopamine loops. Kizuna intentionally disconnects hyper-feed mechanics to foster slow, deliberate human warmth.</p>
          <p><strong>Shizuka Solitude:</strong> A dedicated personal space for intrapersonal reflection before interpersonal sharing.</p>
        </div>

        <div className="flex justify-end pt-2 border-t border-[#dfc0b9]">
          <button onClick={onClose} className="button-tactile">
            Close Manifesto
          </button>
        </div>
      </div>
    </div>
  );
}
