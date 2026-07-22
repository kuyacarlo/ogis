import React from 'react';
import { Volume2, Play, Pause, Bookmark } from 'lucide-react';
import RightSidebar from '../common/RightSidebar';

export default function OmoideTab({ 
  currentChapter, 
  selectedChapter, 
  setSelectedChapter, 
  setAddNoteModalOpen, 
  isPlayingAudio, 
  setIsPlayingAudio, 
  audioProgress, 
  selectedFriend, 
  setSelectedFriend, 
  setDunbarModalOpen, 
  showToast 
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <div className="lg:col-span-8 space-y-6">
        <div className="flex justify-between items-end border-b border-[#dfc0b9] pb-3">
          <div>
            <h1 className="font-bold text-3xl text-[#a43720] mb-1">Omoide Memories</h1>
            <p className="italic text-sm text-[#58423d]">
              "A private scrapbook shared between you and your close circle."
            </p>
          </div>
          <span className="font-mono text-xs font-bold text-[#a43720] bg-[#ffdad3] px-2.5 py-1 rounded border border-[#dfc0b9]">
            {currentChapter.pageInfo}
          </span>
        </div>

        {/* Dynamic Chapter Scrapbook Board */}
        <div className="board-card p-6 space-y-6 transition-all duration-300">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-[#1e1c10]">{currentChapter.title}</h3>
              <span className="text-xs font-bold text-[#58423d] font-mono">{currentChapter.sharedWith}</span>
            </div>
            <button 
              onClick={() => setAddNoteModalOpen(true)}
              className="button-tactile"
            >
              ADD NOTE
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-2 bg-white border border-[#dfc0b9] transform -rotate-1 shadow-sm hover:rotate-0 transition-transform duration-300">
              <img src={currentChapter.polaroid1.img} alt="Polaroid 1" className="w-full h-44 object-cover mb-2" />
              <p className="italic text-base text-center text-[#1e1c10]">{currentChapter.polaroid1.caption}</p>
            </div>

            <div className="p-2 bg-white border border-[#dfc0b9] transform rotate-1 shadow-sm hover:rotate-0 transition-transform duration-300">
              <img src={currentChapter.polaroid2.img} alt="Polaroid 2" className="w-full h-44 object-cover mb-2" />
              <p className="italic text-base text-center text-[#1e1c10]">{currentChapter.polaroid2.caption}</p>
            </div>
          </div>
        </div>

        {/* Dynamic Voice Log Player */}
        <div className="board-card p-6 bg-[#faf3e0]">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#a43720] text-white flex items-center justify-center">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1e1c10]">{currentChapter.voiceLog.title}</h4>
                <span className="text-[10px] font-bold text-[#58423d] font-mono">VOICE LOG • {currentChapter.voiceLog.duration}</span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-[#a43720] border border-[#a43720] px-2 py-0.5 rounded font-mono">MONO RECORDING</span>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded border border-[#dfc0b9]">
            <button 
              onClick={() => {
                setIsPlayingAudio(!isPlayingAudio);
                showToast(isPlayingAudio ? 'Audio playback paused' : `Playing ${currentChapter.voiceLog.title}...`);
              }}
              className="w-8 h-8 rounded-full bg-[#a43720] text-white flex items-center justify-center hover:bg-[#86220c]"
            >
              {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            
            <div className="flex-1 space-y-1">
              <div className="h-2 bg-[#e9e2d0] rounded-full overflow-hidden">
                <div className="h-full bg-[#a43720] transition-all duration-300" style={{ width: `${audioProgress}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Scrapbook Notes List */}
        {currentChapter.notes.map(note => (
          <div key={note.id} className="board-card p-6 bg-[#fffde8] border-[#e2d580] space-y-4">
            <div className="space-y-3 italic text-lg text-[#1e1c10] leading-relaxed">
              <p>"{note.text}"</p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#e2d580] text-xs text-[#58423d] font-bold font-mono">
              <span>{note.author}</span>
              <span>{note.time}</span>
            </div>
          </div>
        ))}

      </div>

      {/* Right Sidebar: Chapters on Top, Inner Circle at the End */}
      <div className="lg:col-span-4">
        <RightSidebar 
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          setDunbarModalOpen={setDunbarModalOpen}
          showToast={showToast}
          topWidget={
            <div className="board-card p-5">
              <span className="text-xs font-bold block mb-3 border-b border-[#dfc0b9] pb-2 font-mono">
                SCRAPBOOK CHAPTERS
              </span>
              <ul className="space-y-2 text-xs font-normal">
                {[
                  { title: 'The Arrival', page: 'PAGE 01' },
                  { title: 'Kamakura Coast', page: 'PAGE 04' },
                  { title: 'Rainy Shrines', page: 'PAGE 07' },
                  { title: 'Departure Day', page: 'PAGE 12' }
                ].map(ch => (
                  <li 
                    key={ch.title}
                    onClick={() => {
                      setSelectedChapter(ch.title);
                      showToast(`Opened chapter: ${ch.title}`);
                    }}
                    className={`flex justify-between items-center cursor-pointer p-2 rounded transition-all ${selectedChapter === ch.title ? 'font-bold text-[#a43720] bg-[#ffdad3] border border-[#a43720]' : 'text-[#58423d] hover:bg-[#faf3e0] hover:text-[#a43720]'}`}
                  >
                    <span className="flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5 text-[#a43720]" />
                      <span>{ch.title}</span>
                    </span>
                    <span className="text-[10px] font-mono">{ch.page}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
      </div>

    </div>
  );
}
