import React from 'react';
import { Shield } from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  solitudeShield, 
  setSolitudeShield, 
  setHelpModalOpen, 
  setPrivacyModalOpen, 
  setDunbarModalOpen, 
  showToast 
}) {
  return (
    <header className="neo-box mb-3 text-center">
      <div className="flex items-center justify-center gap-2 mb-1">
        <span className="w-8 h-8 rounded-full bg-[#a43720] text-white flex items-center justify-center font-bold text-base shadow-[2px_2px_0px_#2c2c2c] border border-[#86220c]">
          絆
        </span>
        <h1 className="neo-title">~* Kizuna (絆) *~</h1>
      </div>

      <p className="mt-1 text-base font-semibold text-[#58423d]">
        Hi! You found my sanctuary on <strong className="text-[#a43720]">THE INTERNET!!</strong>
      </p>
      <p className="mt-0.5 text-xs text-[#58423d]">
        Narrow & Deep Purposeful Connection Platform · Tsunagaranai Kachi (Disconnected by Design)
      </p>

      {/* 88x31 Retro Web Badges with 3D Press-Down Action */}
      <div className="flex justify-center items-center gap-3 mt-3">
        <button 
          onClick={() => setHelpModalOpen(true)}
          className="kz-badge-88x31 bg-[#a43720] text-white"
        >
          <span>絆 KIZUNA 88x31</span>
        </button>
        <button 
          onClick={() => setPrivacyModalOpen(true)}
          className="kz-badge-88x31 bg-[#506449] text-white"
        >
          <span>UNPLUGGED v1.0</span>
        </button>
        <button 
          onClick={() => setDunbarModalOpen(true)}
          className="kz-badge-88x31 bg-[#904917] text-white"
        >
          <span>DUNBAR 15 SAFE</span>
        </button>
      </div>

      {/* Stimmie.dev Top Navigation Links */}
      <nav className="neo-topnav mt-3.5" aria-label="Primary">
        <button 
          aria-current={activeTab === 'sanctuary' ? 'page' : undefined} 
          onClick={() => setActiveTab('sanctuary')}
        >
          home / sanctuary
        </button>
        <button 
          aria-current={activeTab === 'omoide' ? 'page' : undefined} 
          onClick={() => setActiveTab('omoide')}
        >
          omoide memories
        </button>
        <button 
          aria-current={activeTab === 'fireside' ? 'page' : undefined} 
          onClick={() => setActiveTab('fireside')}
        >
          fireside board
        </button>
        <button 
          aria-current={activeTab === 'shizuka' ? 'page' : undefined} 
          onClick={() => setActiveTab('shizuka')}
        >
          shizuka solitude
        </button>
        <button 
          onClick={() => {
            setSolitudeShield(!solitudeShield);
            showToast(solitudeShield ? 'Solitude Shield deactivated' : 'Solitude Shield activated');
          }}
          className="ml-auto text-xs font-bold flex items-center gap-1.5"
        >
          <Shield className="w-3.5 h-3.5 text-[#a43720]" />
          <span>{solitudeShield ? 'shield active' : 'shield inactive'}</span>
        </button>
      </nav>
    </header>
  );
}
