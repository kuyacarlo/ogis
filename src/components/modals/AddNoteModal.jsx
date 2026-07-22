import React from 'react';
import { FileText, X } from 'lucide-react';

export default function AddNoteModal({ 
  isOpen, 
  onClose, 
  selectedChapter, 
  newScrapbookText, 
  setNewScrapbookText, 
  handleAddScrapbookNote 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="neo-box max-w-lg w-full bg-white space-y-4 relative">
        <div className="flex justify-between items-center border-b border-[#dfc0b9] pb-2">
          <h3 className="text-lg font-bold text-[#a43720] flex items-center gap-2">
            <FileText className="w-4 h-4" /> Pin Memory to {selectedChapter}
          </h3>
          <button onClick={onClose} className="text-[#58423d] hover:text-[#a43720]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <textarea 
          value={newScrapbookText}
          onChange={(e) => setNewScrapbookText(e.target.value)}
          placeholder={`Write a warm memory note for ${selectedChapter}...`}
          className="w-full h-32 p-3 bg-[#fffde8] border border-[#e2d580] rounded text-sm text-[#1e1c10] focus:outline-none resize-none"
        />

        <div className="flex justify-end gap-2 pt-2 border-t border-[#dfc0b9]">
          <button onClick={onClose} className="px-3 py-1.5 border border-[#dfc0b9] rounded text-xs">
            Cancel
          </button>
          <button onClick={handleAddScrapbookNote} className="button-tactile">
            Pin Note
          </button>
        </div>
      </div>
    </div>
  );
}
