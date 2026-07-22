import React from 'react';
import { Lock } from 'lucide-react';
import RightSidebar from '../common/RightSidebar';

export default function FiresideTab({ 
  firesideText, 
  setFiresideText, 
  isFiresideUnveiled, 
  setIsFiresideUnveiled, 
  selectedFriend, 
  setSelectedFriend, 
  setDunbarModalOpen, 
  showToast 
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <div className="lg:col-span-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#a43720] mb-1">Fireside Reflections</h1>
          <p className="italic text-sm text-[#58423d] border-l-2 border-[#a43720] pl-3">
            A warm corner for your micro-group to share soft moments.
          </p>
        </div>

        <div className="board-card p-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#a43720] border border-[#a43720] px-2 py-0.5 rounded font-mono">CURRENT PROMPT</span>
            <span className="text-xs font-bold text-[#58423d] font-mono">MAY 12 - MAY 18</span>
          </div>

          <h2 className="text-2xl font-bold text-[#1e1c10] leading-snug">
            "What made you feel light this week? A small kindness, a quiet morning, or perhaps a new song?"
          </h2>

          <textarea 
            value={firesideText}
            onChange={(e) => setFiresideText(e.target.value)}
            placeholder="Write your heart out here..."
            className="w-full h-36 p-4 ruled-lines border border-[#dfc0b9] rounded text-base text-[#1e1c10] focus:outline-none resize-none"
          />

          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-[#58423d] font-mono">TAGS: #GRATITUDE #MINDFULNESS</span>
            <button 
              onClick={() => {
                setIsFiresideUnveiled(true);
                showToast('Reflection pinned! Fireside responses unveiled');
              }}
              className="button-tactile"
            >
              Pin Reflection
            </button>
          </div>
        </div>

        {/* Unveiled Circle Responses */}
        {isFiresideUnveiled ? (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#a43720]">Gathered Reflections from Your Circle</h3>
            
            <div className="board-card p-5 bg-white space-y-2 border-l-4 border-l-[#a43720]">
              <div className="flex justify-between text-xs text-[#58423d] font-bold">
                <span>Kai</span>
                <span className="font-mono">Yesterday</span>
              </div>
              <p className="text-sm italic text-[#1e1c10]">
                "Sitting on the porch at dusk watching the rain. Didn't look at my phone once for two hours."
              </p>
            </div>

            <div className="board-card p-5 bg-white space-y-2 border-l-4 border-l-[#506449]">
              <div className="flex justify-between text-xs text-[#58423d] font-bold">
                <span>Elena</span>
                <span className="font-mono">2 days ago</span>
              </div>
              <p className="text-sm italic text-[#1e1c10]">
                "A barista remembered my tea order from last week. Small thing, but made me smile all morning."
              </p>
            </div>
          </div>
        ) : (
          <div className="board-card p-8 text-center max-w-md mx-auto space-y-4 shadow-lg border-2 border-[#a43720]">
            <div className="w-12 h-12 rounded-xl bg-[#ffdad3] text-[#a43720] flex items-center justify-center mx-auto text-xl">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1e1c10]">Awaiting Your Spark</h3>
            <p className="text-xs italic text-[#58423d]">
              The room is quiet. Share your light first to unveil the collective heart of your circle.
            </p>
            <button 
              onClick={() => {
                setIsFiresideUnveiled(true);
                showToast('Circle responses unveiled');
              }}
              className="button-tactile w-full py-2.5"
            >
              Unveil the Circle
            </button>
          </div>
        )}
      </div>

      {/* Sticky Right Sidebar */}
      <div className="lg:col-span-4">
        <RightSidebar 
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          setDunbarModalOpen={setDunbarModalOpen}
          showToast={showToast}
          topWidget={
            <div className="board-card p-5 text-center space-y-3">
              <span className="text-xs font-bold block mb-2 border-b border-[#dfc0b9] pb-2 font-mono">GATHERED AT FIRE</span>
              <div className="flex justify-center -space-x-2 my-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
              </div>
              <p className="text-xs text-[#58423d]">3 of 5 friends pinned reflections.</p>
            </div>
          }
        />
      </div>

    </div>
  );
}
