import React, { useState } from 'react';
import { 
  Shield, 
  Heart, 
  Users, 
  Flame, 
  BookOpen, 
  Lock, 
  Unlock, 
  Volume2, 
  Send, 
  Play, 
  Pause, 
  Paperclip, 
  Smile, 
  Settings, 
  HelpCircle, 
  Sparkles, 
  Share2, 
  Plus,
  X,
  Check,
  FileText,
  BarChart2,
  Bookmark
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('sanctuary');
  const [solitudeShield, setSolitudeShield] = useState(false);
  const [cadenceSetting, setCadenceSetting] = useState('02. 3X');

  // Interactive Modal States
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [dunbarModalOpen, setDunbarModalOpen] = useState(false);
  const [addNoteModalOpen, setAddNoteModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Friend & Chapter Filter States
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState('Rainy Shrines');

  // Sanctuary Feed Posts (10 Grounded Log Entries)
  const [leafText, setLeafText] = useState('');
  const [timelinePosts, setTimelinePosts] = useState([
    {
      id: 1,
      author: 'Mei-lin',
      authorCode: 'MEI',
      time: '08:42 UTC',
      category: 'Omoide Captured / Ceramics',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80',
      text: 'Finally finished that ceramics workshop. There\'s something so grounding about the texture of raw clay between your hands. No notifications, just the wheel spinning.',
      warmth: 24,
      replies: 3
    },
    {
      id: 2,
      author: 'Julian',
      authorCode: 'JUL',
      time: '06:15 UTC',
      category: 'Status / Morning Walk',
      image: null,
      text: 'Fog over the river this morning was heavy. Made the world feel small and private. Highly recommended.',
      warmth: 12,
      replies: 1
    },
    {
      id: 3,
      author: 'Sora',
      authorCode: 'SOR',
      time: 'Yesterday',
      category: '35mm Analog / Kyoto Alley',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=80',
      text: 'Developed the black and white roll from last weekend. Rain on cobblestones captures light in a way digital sensors just flatten out.',
      warmth: 31,
      replies: 5
    },
    {
      id: 4,
      author: 'Elena',
      authorCode: 'ELA',
      time: 'Yesterday',
      category: 'Thought / Slow Reading',
      image: null,
      text: 'Spent 3 uninterrupted hours finishing Cal Newport\'s "Digital Minimalism". The idea of treating attention as sacred space hit close to home.',
      warmth: 19,
      replies: 2
    },
    {
      id: 5,
      author: 'Kai',
      authorCode: 'KAI',
      time: '2 days ago',
      category: 'Sound Journal / Espresso Dialing',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
      text: 'Nailed the extraction on the new light roast. 18g in, 36g out in 28 seconds. Jasmine and bergamot notes were vivid.',
      warmth: 15,
      replies: 4
    },
    {
      id: 6,
      author: 'Hana',
      authorCode: 'HAN',
      time: '2 days ago',
      category: 'Status / Mechanical Keyboard',
      image: null,
      text: 'Hand-lubing 68 switches on a rainy evening with tea brewing on the side. Peak zen activity.',
      warmth: 22,
      replies: 6
    },
    {
      id: 7,
      author: 'Arlo',
      authorCode: 'ARL',
      time: '3 days ago',
      category: 'Memory / Antique Discovery',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=80',
      text: 'Found a 1924 map of Manila harbor tucked inside a second-hand history book. The paper smells like woodsmoke and cedar.',
      warmth: 28,
      replies: 3
    },
    {
      id: 8,
      author: 'Zoe',
      authorCode: 'ZOE',
      time: '4 days ago',
      category: 'Thought / Offline Sagada',
      image: null,
      text: '3 days in Sagada without cellular signal. The first 12 hours felt like phantom limb syndrome, then your brain relaxes into real time.',
      warmth: 45,
      replies: 8
    },
    {
      id: 9,
      author: 'Mila',
      authorCode: 'MIL',
      time: '5 days ago',
      category: 'Craft / Sourdough Bake',
      image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&auto=format&fit=crop&q=80',
      text: 'First 80% hydration sourdough loaf with an open crumb! The starter named "Lazarus" is finally thriving.',
      warmth: 18,
      replies: 2
    },
    {
      id: 10,
      author: 'Ren',
      authorCode: 'REN',
      time: '6 days ago',
      category: 'Sound Journal / Night Rain',
      image: null,
      text: 'Heavy rain drumming against the zinc roof outside. Recorded a 2-minute binaural track for tonight\'s Shizuka session.',
      warmth: 27,
      replies: 4
    }
  ]);

  // Dynamic Omoide Chapter Archives (Making Scrapbook Chapters Alive!)
  const chapterData = {
    'The Arrival': {
      title: 'The Arrival at Enoshima',
      pageInfo: 'PAGE 01 • AUG 12, 2024',
      sharedWith: 'SHARED WITH KAITO',
      polaroid1: {
        img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop&q=80',
        caption: 'First glimpse of the ocean from the Enoden line!'
      },
      polaroid2: {
        img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&auto=format&fit=crop&q=80',
        caption: 'Warm eel bento before heading to the inn.'
      },
      voiceLog: {
        title: 'Arriving at the Ryokan',
        duration: '00:30 / 01:00'
      },
      notes: [
        { id: 101, author: 'Kaito T.', time: '11:15 AM', text: 'The wooden floors of the inn creaked so softly. We unpacked our bags while listening to cicadas outside.' }
      ]
    },
    'Kamakura Coast': {
      title: 'Kamakura Coastline Walk',
      pageInfo: 'PAGE 04 • AUG 14, 2024',
      sharedWith: 'SHARED WITH KAITO',
      polaroid1: {
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
        caption: 'Golden hour over Yuigahama beach.'
      },
      polaroid2: {
        img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
        caption: 'Sea salt ice cream melted in 30 seconds!'
      },
      voiceLog: {
        title: 'Ocean Breeze at Sunset',
        duration: '00:45 / 01:30'
      },
      notes: [
        { id: 102, author: 'You', time: '17:40 PM', text: 'Walked 8 kilometers along the coastline until our shoes were full of black volcanic sand.' }
      ]
    },
    'Rainy Shrines': {
      title: 'Summer in Kamakura Shrines',
      pageInfo: 'PAGE 07 • AUG 16, 2024',
      sharedWith: 'SHARED WITH KAITO',
      polaroid1: {
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
        caption: 'The waves were so loud...'
      },
      polaroid2: {
        img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
        caption: 'Best matcha we found!'
      },
      voiceLog: {
        title: 'Rainy Evening Reflection',
        duration: '00:42 / 01:15'
      },
      notes: [
        { id: 103, author: 'Kaito T.', time: '14:02 PM', text: 'Remember when we almost missed the last train because we were looking for that hidden shrine? The air smelled like salt and incense.' }
      ]
    },
    'Departure Day': {
      title: 'Departure & Souvenirs',
      pageInfo: 'PAGE 12 • AUG 18, 2024',
      sharedWith: 'SHARED WITH KAITO',
      polaroid1: {
        img: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&auto=format&fit=crop&q=80',
        caption: 'Quiet bamboo paths at Hokokuji temple.'
      },
      polaroid2: {
        img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop&q=80',
        caption: 'Got our Goshuin stamp book completed!'
      },
      voiceLog: {
        title: 'Final Train Back to Tokyo',
        duration: '00:55 / 02:00'
      },
      notes: [
        { id: 104, author: 'You', time: '19:10 PM', text: 'Buying train snacks at Kamakura station. Promised we would come back next autumn.' }
      ]
    }
  };

  // Audio Voice Player State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(42);

  // Dynamic Scrapbook Note Add State
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

  // Inner Circle 15-Friend Grid
  const innerCircleGrid = [
    { code: 'MEI', name: 'Mei-lin', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80' },
    { code: 'JUL', name: 'Julian', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80' },
    { code: 'SOR', name: 'Sora', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80' },
    { code: 'ELA', name: 'Elena', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80' },
    { code: 'KAI', name: 'Kai', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80' },
    { code: 'HAN', name: 'Hana', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80' },
    { code: 'ARL', name: 'Arlo', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80' },
    { code: 'ZOE', name: 'Zoe', img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=120&auto=format&fit=crop&q=80' },
    { code: 'MIL', name: 'Mila', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80' },
    { code: 'LUN', name: 'Luna', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80' },
    { code: 'REN', name: 'Ren', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80' },
    { code: 'FEL', name: 'Felix', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80' },
    { code: 'YUN', name: 'Yuki', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80' },
    { code: 'THE', name: 'Theo', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80' }
  ];

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
    const activeCh = chapterData[selectedChapter];
    activeCh.notes.push({
      id: Date.now(),
      author: 'You',
      time: 'Just now',
      text: newScrapbookText
    });
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

  const currentChapter = chapterData[selectedChapter] || chapterData['Rainy Shrines'];

  // Render Shared Sticky Right Sidebar Component
  const renderSharedRightSidebar = (extraWidget = null) => (
    <div className="sticky top-6 self-start space-y-6">
      {/* 1. Cadence Control Card */}
      <div className="command-card p-5">
        <span className="text-xs font-bold text-[#8b716c] block mb-3 border-b border-[#dfc0b9] pb-2 font-mono">
          CADENCE CONTROL
        </span>

        {/* Physical Dial Switch */}
        <div className="w-28 h-20 bg-[#e9e2d0] border-2 border-[#8b716c] rounded-lg flex flex-col items-center justify-center gap-1.5 shadow-inner mx-auto mb-3">
          <div className="w-1.5 h-4 bg-[#a43720] rounded-full"></div>
          <div className="bg-white border border-[#dfc0b9] px-3 py-0.5 rounded text-[10px] text-[#a43720] font-bold font-mono">
            {cadenceSetting}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 text-center">
          {[
            { id: '01. INF', label: '01. INF' },
            { id: '02. 3X', label: '02. 3X' },
            { id: '03. SUN', label: '03. SUN' }
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                setCadenceSetting(opt.id);
                showToast(`Cadence throttle updated: ${opt.id}`);
              }}
              className={`py-1 bg-white border border-[#dfc0b9] rounded text-[10px] font-mono ${cadenceSetting === opt.id ? 'border-[#a43720] bg-[#ffdad3] text-[#a43720] font-bold' : 'text-[#58423d]'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Inner Circle 15-Friend Grid */}
      <div className="command-card p-5">
        <div className="flex justify-between items-center mb-4 border-b border-[#dfc0b9] pb-2">
          <button 
            onClick={() => setDunbarModalOpen(true)}
            className="text-xs font-bold text-[#8b716c] font-mono hover:text-[#a43720]"
          >
            INNER CIRCLE
          </button>
          <span className="text-xs text-[#a43720] font-bold font-mono">15/15 Active</span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {innerCircleGrid.map((person, i) => (
            <div 
              key={i}
              onClick={() => {
                setSelectedFriend(selectedFriend === person.code ? null : person.code);
                showToast(selectedFriend === person.code ? 'Cleared friend filter' : `Filtering feed by ${person.name}`);
              }}
              className="text-center group cursor-pointer"
            >
              <div className={`w-11 h-11 mx-auto rounded border ${selectedFriend === person.code ? 'border-[#a43720] ring-2 ring-[#a43720]' : 'border-[#dfc0b9]'} group-hover:border-[#a43720] overflow-hidden transition-all`}>
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
              </div>
              <span className="block text-[9px] text-[#58423d] mt-1 font-bold font-mono">{person.code}</span>
            </div>
          ))}

          <div 
            onClick={() => setDunbarModalOpen(true)}
            className="text-center cursor-pointer"
          >
            <div className="w-11 h-11 mx-auto rounded border-2 border-dashed border-[#dfc0b9] flex items-center justify-center text-[#58423d] hover:border-[#a43720]">
              <Plus className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="mt-6 pt-3 border-t border-[#dfc0b9] text-center">
          <button 
            onClick={() => setDunbarModalOpen(true)}
            className="text-[10px] text-[#58423d] font-bold font-mono flex items-center justify-center gap-1 mx-auto hover:text-[#a43720]"
          >
            <Shield className="w-3 h-3 text-[#a43720]" /> DUNBAR CAP: 15
          </button>
        </div>
      </div>

      {/* 3. Extra Tab-Specific Widget */}
      {extraWidget}
    </div>
  );

  return (
    <div className="min-h-screen text-[#1e1c10] pb-16 antialiased max-w-6xl mx-auto pt-6 px-4 relative">
      
      {/* Active Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#1e1c10] text-[#fff9eb] px-4 py-2.5 rounded border border-[#dfc0b9] shadow-xl text-xs font-mono flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-[#a43720]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Stimmie.dev Style Header Box & Title Logo */}
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

        {/* 88x31 Retro Web Badges */}
        <div className="flex justify-center items-center gap-2.5 mt-2.5">
          <button 
            onClick={() => setHelpModalOpen(true)}
            className="kz-badge-88x31 bg-[#a43720] text-white px-2 py-0.5 text-[10px] font-mono hover:scale-105 transition-all cursor-pointer"
          >
            <span className="font-bold">絆 KIZUNA</span>
            <span className="bg-white text-[#a43720] px-1 font-bold text-[9px] rounded-xs">88x31</span>
          </button>
          <button 
            onClick={() => setPrivacyModalOpen(true)}
            className="kz-badge-88x31 bg-[#506449] text-white px-2 py-0.5 text-[10px] font-mono hover:scale-105 transition-all cursor-pointer"
          >
            <span className="font-bold">UNPLUGGED</span>
            <span className="bg-white text-[#506449] px-1 font-bold text-[9px] rounded-xs">v1.0</span>
          </button>
          <button 
            onClick={() => setDunbarModalOpen(true)}
            className="kz-badge-88x31 bg-[#904917] text-white px-2 py-0.5 text-[10px] font-mono hover:scale-105 transition-all cursor-pointer"
          >
            <span className="font-bold">DUNBAR 15</span>
            <span className="bg-white text-[#904917] px-1 font-bold text-[9px] rounded-xs">SAFE</span>
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

      {/* Retro Scrolling Marquee Banner */}
      <div className="neo-marquee-wrap mb-6" aria-hidden="true">
        <div className="neo-marquee-track">
          WELCOME TO KIZUNA SANCTUARY --- NARROW & DEEP CONNECTIONS --- DUNBAR 15 INNER CIRCLE --- ZERO DOPAMINE BADGES --- SOLITUDE SHIELD ACTIVE --- NO INFINITE SCROLL --- DISCONNECTED BY DESIGN --- WELCOME TO KIZUNA SANCTUARY --- NARROW & DEEP CONNECTIONS --- DUNBAR 15 INNER CIRCLE --- ZERO DOPAMINE BADGES --- SOLITUDE SHIELD ACTIVE --- NO INFINITE SCROLL --- DISCONNECTED BY DESIGN ---
        </div>
      </div>

      {/* Main Content Area */}
      <main className="min-w-0">
        
        {/* =================================================================== */}
        {/* TAB 1: SANCTUARY */}
        {/* =================================================================== */}
        {activeTab === 'sanctuary' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Main Column */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h1 className="font-bold text-3xl text-[#a43720] mb-1">Sanctuary Feed</h1>
                <p className="italic text-sm text-[#58423d]">
                  "A quiet, un-curated timeline stream from your 15 inner-circle friends. Zero algorithmic re-ordering."
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
              {renderSharedRightSidebar()}
            </div>

          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: OMOIDE (ALIVE SCRAPBOOK CHAPTERS) */}
        {/* =================================================================== */}
        {activeTab === 'omoide' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex justify-between items-end border-b border-[#dfc0b9] pb-3">
                <div>
                  <h1 className="font-bold text-3xl text-[#a43720] mb-1">Omoide Memories</h1>
                  <p className="italic text-sm text-[#58423d]">
                    "A private, shared scrapbook between you and those who matter most."
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

            {/* Right Sidebar: Sticky Unified Sidebar with Interactive Chapters */}
            <div className="lg:col-span-4">
              {renderSharedRightSidebar(
                <div className="board-card p-5">
                  <span className="text-xs font-bold block mb-3 border-b border-[#dfc0b9] pb-2 font-mono">
                    SCRAPBOOK CHAPTERS
                  </span>
                  <ul className="space-y-2.5 text-xs">
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
              )}
            </div>

          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: FIRESIDE */}
        {/* =================================================================== */}
        {activeTab === 'fireside' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-[#a43720] mb-1">Fireside Reflections</h1>
                <p className="italic text-sm text-[#58423d] border-l-2 border-[#a43720] pl-3">
                  A warm corner for your micro-group to share soft moments. Answer the prompt to see what others are feeling.
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
              {renderSharedRightSidebar(
                <div className="board-card p-5 text-center space-y-3">
                  <span className="text-xs font-bold block mb-2 border-b border-[#dfc0b9] pb-2 font-mono">GATHERED AT FIRE</span>
                  <div className="flex justify-center -space-x-2 my-2">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                  </div>
                  <p className="text-xs text-[#58423d]">3 of 5 friends pinned reflections.</p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: SHIZUKA */}
        {/* =================================================================== */}
        {activeTab === 'shizuka' && (
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
                  Seal Entry 🈲
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
        )}

      </main>

      {/* PRIVACY MODAL */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="neo-box max-w-lg w-full bg-white space-y-4 relative">
            <div className="flex justify-between items-center border-b border-[#dfc0b9] pb-2">
              <h3 className="text-lg font-bold text-[#a43720] flex items-center gap-2">
                <Lock className="w-4 h-4" /> Kizuna Privacy Guarantee
              </h3>
              <button onClick={() => setPrivacyModalOpen(false)} className="text-[#58423d] hover:text-[#a43720]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#1e1c10] leading-relaxed">
              <p><strong>1. Zero Data Harvesting:</strong> Kizuna collects no analytics, ad identifiers, or behavioral tracking telemetry.</p>
              <p><strong>2. Local-First Memory Storage:</strong> All Shizuka reflections and Omoide scrapbooks remain locally stored and encrypted on your device.</p>
              <p><strong>3. Dunbar 15 Boundary:</strong> No public discovery feeds or algorithmic recommendations. Content is strictly transmitted to your trusted 15 inner-circle friends.</p>
            </div>

            <div className="flex justify-end pt-2 border-t border-[#dfc0b9]">
              <button onClick={() => setPrivacyModalOpen(false)} className="button-tactile">
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HELP / MANIFESTO MODAL */}
      {helpModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="neo-box max-w-lg w-full bg-white space-y-4 relative">
            <div className="flex justify-between items-center border-b border-[#dfc0b9] pb-2">
              <h3 className="text-lg font-bold text-[#a43720] flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Tsunagaranai Kachi Manifesto
              </h3>
              <button onClick={() => setHelpModalOpen(false)} className="text-[#58423d] hover:text-[#a43720]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#1e1c10] leading-relaxed">
              <p><strong>What is Tsunagaranai Kachi (Disconnected by Design)?</strong></p>
              <p>Modern platforms force perpetual hyper-connectivity and dopamine loops. Kizuna intentionally disconnects hyper-feed mechanics to foster slow, deliberate human warmth.</p>
              <p><strong>Cadence Batching:</strong> Updates arrive 3x/week or via Sunday digest, protecting your deep focus.</p>
              <p><strong>Shizuka Solitude:</strong> A dedicated personal space for intrapersonal reflection before interpersonal sharing.</p>
            </div>

            <div className="flex justify-end pt-2 border-t border-[#dfc0b9]">
              <button onClick={() => setHelpModalOpen(false)} className="button-tactile">
                Close Manifesto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DUNBAR 15 MODAL */}
      {dunbarModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="neo-box max-w-lg w-full bg-white space-y-4 relative">
            <div className="flex justify-between items-center border-b border-[#dfc0b9] pb-2">
              <h3 className="text-lg font-bold text-[#a43720] flex items-center gap-2">
                <Users className="w-4 h-4" /> Dunbar 15 Cognitive Boundary
              </h3>
              <button onClick={() => setDunbarModalOpen(false)} className="text-[#58423d] hover:text-[#a43720]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#1e1c10] leading-relaxed">
              <p className="bg-[#faf3e0] p-2.5 rounded border border-[#dfc0b9] font-bold text-[#a43720]">
                Your Inner Circle is currently at maximum capacity (15/15 Active Friends).
              </p>
              <p>Anthropologist Robin Dunbar demonstrated that humans can maintain a maximum of 15 close, high-trust relationships ("sympathy group"). Beyond 15, trust deteriorates into performance.</p>
              <p>To add a new friend to your sanctuary, you must first archive or rotate an existing member into your extended circle.</p>
            </div>

            <div className="flex justify-end pt-2 border-t border-[#dfc0b9]">
              <button onClick={() => setDunbarModalOpen(false)} className="button-tactile">
                Close Boundary Info
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD SCRAPBOOK NOTE MODAL */}
      {addNoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="neo-box max-w-lg w-full bg-white space-y-4 relative">
            <div className="flex justify-between items-center border-b border-[#dfc0b9] pb-2">
              <h3 className="text-lg font-bold text-[#a43720] flex items-center gap-2">
                <FileText className="w-4 h-4" /> Pin Memory to {selectedChapter}
              </h3>
              <button onClick={() => setAddNoteModalOpen(false)} className="text-[#58423d] hover:text-[#a43720]">
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
              <button onClick={() => setAddNoteModalOpen(false)} className="px-3 py-1.5 border border-[#dfc0b9] rounded text-xs">
                Cancel
              </button>
              <button onClick={handleAddScrapbookNote} className="button-tactile">
                Pin Note
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
