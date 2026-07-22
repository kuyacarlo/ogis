import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Toast({ toastMessage }) {
  if (!toastMessage) return null;
  
  return (
    <div className="fixed top-5 right-5 z-50 bg-[#1e1c10] text-[#fff9eb] px-4 py-2.5 rounded border border-[#dfc0b9] shadow-xl text-xs font-mono flex items-center gap-2 animate-bounce">
      <Sparkles className="w-4 h-4 text-[#a43720]" />
      <span>{toastMessage}</span>
    </div>
  );
}
