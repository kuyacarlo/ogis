import React from 'react';
import { Lock, X } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="neo-box max-w-lg w-full bg-white space-y-4 relative">
        <div className="flex justify-between items-center border-b border-[#dfc0b9] pb-2">
          <h3 className="text-lg font-bold text-[#a43720] flex items-center gap-2">
            <Lock className="w-4 h-4" /> Kizuna Privacy Guarantee
          </h3>
          <button onClick={onClose} className="text-[#58423d] hover:text-[#a43720]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs text-[#1e1c10] leading-relaxed">
          <p><strong>1. Zero Data Harvesting:</strong> Kizuna collects no analytics, ad identifiers, or behavioral tracking telemetry.</p>
          <p><strong>2. Local-First Memory Storage:</strong> All Shizuka reflections and Omoide scrapbooks remain locally stored and encrypted on your device.</p>
          <p><strong>3. Dunbar 15 Boundary:</strong> Content is strictly transmitted to your trusted 15 inner-circle friends.</p>
        </div>

        <div className="flex justify-end pt-2 border-t border-[#dfc0b9]">
          <button onClick={onClose} className="button-tactile">
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
