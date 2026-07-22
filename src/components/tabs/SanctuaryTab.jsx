import React from 'react';
import { Paperclip, Smile } from 'lucide-react';
import RightSidebar from '../common/RightSidebar';

export default function SanctuaryTab({ 
  leafText, 
  setLeafText, 
  handleSendLeaf, 
  selectedFriend, 
  setSelectedFriend, 
  filteredPosts, 
  setDunbarModalOpen, 
  showToast 
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Main Column */}
      <div className="lg:col-span-8 space-y-6">
        <div>
          <h1 className="font-bold text-3xl text-[#a43720] mb-1">Sanctuary Feed</h1>
          <p className="italic text-sm text-[#58423d]">
            "A quiet stream from your 15 inner-circle friends. Zero algorithms."
          </p>
        </div>

        {/* Log Entry Creator */}
        <div className="command-card p-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-lg text-[#1e1c10]">Log Entry</h3>
            <span className="text-[10px] text-[#8b716c] font-mono font-bold">COMMAND ID: #774-A</span>
          </div>

          <textarea 
            value={leafText}
            onChange={(e) => setLeafText(e.target.value)}
            placeholder="Transmit a quiet thought to your 15 inner-circle friends..."
            className="w-full h-24 p-3 bg-[#faf3e0] border border-[#dfc0b9] rounded text-sm text-[#1e1c10] placeholder-[#58423d]/60 focus:outline-none focus:border-[#a43720] resize-none mb-3"
          />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => showToast('Photo attachment dialog simulated')}
                className="p-1.5 border border-[#dfc0b9] rounded bg-white text-[#58423d] hover:bg-[#faf3e0]"
              >
                <Paperclip className="w-4 h-4" />
              </button>
              <button 
                onClick={() => showToast('Hanko seal added')}
                className="p-1.5 border border-[#dfc0b9] rounded bg-white text-[#58423d] hover:bg-[#faf3e0]"
              >
                <Smile className="w-4 h-4" />
              </button>
            </div>
            <button 
              onClick={handleSendLeaf}
              className="button-tactile"
            >
              SUBMIT LOG
            </button>
          </div>
        </div>

        {/* Filter Indicator */}
        {selectedFriend && (
          <div className="flex justify-between items-center bg-[#faf3e0] p-2.5 rounded border border-[#dfc0b9] text-xs">
            <span className="font-bold text-[#a43720]">Showing posts from: {selectedFriend}</span>
            <button 
              onClick={() => setSelectedFriend(null)}
              className="text-[#58423d] hover:text-[#a43720] underline font-bold"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Timeline Stream */}
        <div className="space-y-6 border-l-2 border-[#dfc0b9] pl-6 relative">
          {filteredPosts.map(post => (
            <div key={post.id} className="relative">
              <div className="absolute -left-[31px] top-4 w-2.5 h-2.5 bg-[#a43720] border-2 border-white"></div>
              
              <div className="command-card p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" alt="Author" className="w-8 h-8 rounded border border-[#dfc0b9] object-cover" />
                    <div>
                      <h4 className="font-bold text-sm text-[#1e1c10]">{post.author}</h4>
                      <span className="text-xs text-[#a43720] font-bold font-mono">{post.category}</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#58423d] font-mono">{post.time}</span>
                </div>

                {post.image && (
                  <div className="rounded overflow-hidden border border-[#dfc0b9]">
                    <img src={post.image} alt="Log Attachment" className="w-full h-56 object-cover" />
                  </div>
                )}

                <p className="text-sm text-[#1e1c10] leading-relaxed">
                  "{post.text}"
                </p>

                <div className="flex items-center gap-6 pt-3 border-t border-[#dfc0b9] text-xs text-[#58423d]">
                  <button 
                    onClick={() => showToast(`Sent warmth to ${post.author}`)}
                    className="flex items-center gap-1 hover:text-[#a43720] cursor-pointer font-mono"
                  >
                    Warmth ({post.warmth})
                  </button>
                  <button 
                    onClick={() => showToast(`Opening private thread with ${post.author}`)}
                    className="flex items-center gap-1 hover:text-[#1e1c10] cursor-pointer font-mono"
                  >
                    Replies ({post.replies})
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Sticky Right Sidebar */}
      <div className="lg:col-span-4">
        <RightSidebar 
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          setDunbarModalOpen={setDunbarModalOpen}
          showToast={showToast}
        />
      </div>
    </div>
  );
}
