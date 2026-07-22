import React, { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Marquee from './components/common/Marquee';
import Toast from './components/common/Toast';
import PrivacyModal from './components/modals/PrivacyModal';
import HelpModal from './components/modals/HelpModal';
import DunbarModal from './components/modals/DunbarModal';
import AddNoteModal from './components/modals/AddNoteModal';

import SanctuaryTab from './components/tabs/SanctuaryTab';
import OmoideTab from './components/tabs/OmoideTab';
import FiresideTab from './components/tabs/FiresideTab';
import ShizukaTab from './components/tabs/ShizukaTab';

import { 
  MARQUEE_POOL, 
  INITIAL_TIMELINE_POSTS, 
  CHAPTER_DATA 
} from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('sanctuary');
  const [solitudeShield, setSolitudeShield] = useState(false);

  // Interactive Modal States
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [dunbarModalOpen, setDunbarModalOpen] = useState(false);
  const [addNoteModalOpen, setAddNoteModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Friend & Chapter Filter States
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState('Rainy Shrines');

  // Random Marquee Text State
  const [marqueeText, setMarqueeText] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * MARQUEE_POOL.length);
    setMarqueeText(MARQUEE_POOL[randomIndex]);
  }, []);

  // Sanctuary Feed Posts State
  const [leafText, setLeafText] = useState('');
  const [timelinePosts, setTimelinePosts] = useState(INITIAL_TIMELINE_POSTS);

  // Audio Voice Player State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(42);

  // Dynamic Scrapbook Note State
  const [newScrapbookText, setNewScrapbookText] = useState('');

  // Fireside State
  const [firesideText, setFiresideText] = useState('');
  const [isFiresideUnveiled, setIsFiresideUnveiled] = useState(false);

  // Shizuka Journal State
  const [shizukaText, setShizukaText] = useState('');
  const [selectedResonance, setSelectedResonance] = useState('Contemplative');
  const [savedReflections, setSavedReflections] = useState([
    { id: 1, date: 'October 24', text: 'Walking through the park when the wind picked up...' },
    { id: 2, date: 'October 22', text: 'The silence in the library felt like a physical blanket...' },
    { id: 3, date: 'October 20', text: 'Finally finished the third chapter. A quiet achievement...' },
    { id: 4, date: 'October 18', text: 'Rain against the windowpane is the best composer...' }
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSendLeaf = () => {
    if (!leafText.trim()) return;
    const newP = {
      id: Date.now(),
      author: 'You',
      authorCode: 'YOU',
      time: 'Just now',
      category: 'Thought / Sanctuary',
      image: null,
      text: leafText,
      warmth: 1,
      replies: 0
    };
    setTimelinePosts([newP, ...timelinePosts]);
    setLeafText('');
    showToast('Log entry transmitted to your circle!');
  };

  const handleAddScrapbookNote = () => {
    if (!newScrapbookText.trim()) return;
    const activeCh = CHAPTER_DATA[selectedChapter];
    if (activeCh) {
      activeCh.notes.push({
        id: Date.now(),
        author: 'You',
        time: 'Just now',
        text: newScrapbookText
      });
    }
    setNewScrapbookText('');
    setAddNoteModalOpen(false);
    showToast(`Memory note pinned to ${selectedChapter}!`);
  };

  const handleSealShizuka = () => {
    if (!shizukaText.trim()) return;
    const newRef = {
      id: Date.now(),
      date: 'Today',
      text: shizukaText
    };
    setSavedReflections([newRef, ...savedReflections]);
    setShizukaText('');
    showToast('Reflective log sealed in local vault');
  };

  const filteredPosts = selectedFriend 
    ? timelinePosts.filter(p => p.authorCode === selectedFriend)
    : timelinePosts;

  const currentChapter = CHAPTER_DATA[selectedChapter] || CHAPTER_DATA['Rainy Shrines'];

  return (
    <div className="min-h-screen text-[#1e1c10] pb-16 antialiased max-w-6xl mx-auto pt-6 px-4 relative">
      
      {/* Toast Notification */}
      <Toast toastMessage={toastMessage} />

      {/* Header Navigation & Badges */}
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        solitudeShield={solitudeShield}
        setSolitudeShield={setSolitudeShield}
        setHelpModalOpen={setHelpModalOpen}
        setPrivacyModalOpen={setPrivacyModalOpen}
        setDunbarModalOpen={setDunbarModalOpen}
        showToast={showToast}
      />

      {/* Marquee Reel */}
      <Marquee marqueeText={marqueeText} />

      {/* Main View Router */}
      <main className="min-w-0">
        {activeTab === 'sanctuary' && (
          <SanctuaryTab 
            leafText={leafText}
            setLeafText={setLeafText}
            handleSendLeaf={handleSendLeaf}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
            filteredPosts={filteredPosts}
            setDunbarModalOpen={setDunbarModalOpen}
            showToast={showToast}
          />
        )}

        {activeTab === 'omoide' && (
          <OmoideTab 
            currentChapter={currentChapter}
            selectedChapter={selectedChapter}
            setSelectedChapter={setSelectedChapter}
            setAddNoteModalOpen={setAddNoteModalOpen}
            isPlayingAudio={isPlayingAudio}
            setIsPlayingAudio={setIsPlayingAudio}
            audioProgress={audioProgress}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
            setDunbarModalOpen={setDunbarModalOpen}
            showToast={showToast}
          />
        )}

        {activeTab === 'fireside' && (
          <FiresideTab 
            firesideText={firesideText}
            setFiresideText={setFiresideText}
            isFiresideUnveiled={isFiresideUnveiled}
            setIsFiresideUnveiled={setIsFiresideUnveiled}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
            setDunbarModalOpen={setDunbarModalOpen}
            showToast={showToast}
          />
        )}

        {activeTab === 'shizuka' && (
          <ShizukaTab 
            shizukaText={shizukaText}
            setShizukaText={setShizukaText}
            handleSealShizuka={handleSealShizuka}
            selectedResonance={selectedResonance}
            setSelectedResonance={setSelectedResonance}
            savedReflections={savedReflections}
            showToast={showToast}
          />
        )}
      </main>

      {/* Interactive Modals */}
      <PrivacyModal 
        isOpen={privacyModalOpen} 
        onClose={() => setPrivacyModalOpen(false)} 
      />

      <HelpModal 
        isOpen={helpModalOpen} 
        onClose={() => setHelpModalOpen(false)} 
      />

      <DunbarModal 
        isOpen={dunbarModalOpen} 
        onClose={() => setDunbarModalOpen(false)} 
      />

      <AddNoteModal 
        isOpen={addNoteModalOpen} 
        onClose={() => setAddNoteModalOpen(false)} 
        selectedChapter={selectedChapter}
        newScrapbookText={newScrapbookText}
        setNewScrapbookText={setNewScrapbookText}
        handleAddScrapbookNote={handleAddScrapbookNote}
      />

    </div>
  );
}
