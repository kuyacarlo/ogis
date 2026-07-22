import React from 'react';
import { Shield, Lock } from 'lucide-react';

export default function ShizukaTab({ 
  shizukaText, 
  setShizukaText, 
  handleSealShizuka, 
  selectedResonance, 
  setSelectedResonance, 
  savedReflections, 
  showToast 
}) {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      
      <div className="p-4 rounded border border-[#a43720] bg-[#faf3e0] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-[#a43720]" />
          <div>
            <h4 className="text-xs font-bold text-[#a43720] font-mono">SOLITUDE SHIELD ACTIVE</h4>
            <p className="text-xs text-[#58423d]">Outer noise is silenced. Your digital breath is your own.</p>
          </div>
        </div>
      </div>

      <div className="board-card p-6 space-y-6">
        <div>
          <span className="italic text-xs text-[#58423d] block mb-1">— Daily Prompt</span>
          <h2 className="text-2xl font-bold text-[#1e1c10]">
            What quiet moment grounded you today?
          </h2>
        </div>

        <textarea 
          value={shizukaText}
          onChange={(e) => setShizukaText(e.target.value)}
          placeholder="The morning light caught the steam from my tea..."
          className="w-full h-44 p-4 ruled-lines border-b border-[#dfc0b9] text-base text-[#1e1c10] focus:outline-none resize-none"
        />

        <div className="flex justify-end">
          <button 
            onClick={handleSealShizuka}
            className="button-tactile"
          >
            Seal Entry
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <span className="text-xs font-bold block text-[#8b716c] font-mono">CURRENT RESONANCE</span>

        <div className="flex flex-wrap gap-3">
          {[
            { label: 'Peaceful' },
            { label: 'Contemplative' },
            { label: 'Weary' },
            { label: 'Recharged' }
          ].map(stamp => (
            <button
              key={stamp.label}
              onClick={() => {
                setSelectedResonance(stamp.label);
                showToast(`Resonance updated: ${stamp.label}`);
              }}
              className={`px-4 py-2 rounded text-xs font-bold border border-[#8b716c] ${selectedResonance === stamp.label ? 'bg-[#a43720] text-white border-[#86220c]' : 'bg-white text-[#1e1c10]'}`}
            >
              <span>{stamp.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-[#dfc0b9]">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-[#8b716c] font-mono">PAST REFLECTIONS</span>
          <span className="text-xs font-bold text-[#a43720] font-mono">{savedReflections.length} Entries Archived</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {savedReflections.map(ref => (
            <div key={ref.id} className="board-card p-4 space-y-2">
              <div className="flex justify-between items-center text-xs text-[#58423d] font-bold">
                <span>{ref.date}</span>
                <Lock className="w-3.5 h-3.5 text-[#8b716c]" />
              </div>
              <p className="italic text-sm text-[#1e1c10]">
                "{ref.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
