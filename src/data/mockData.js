// Kizuna Platform Mock Data & Archives

export const MARQUEE_POOL = [
  "★ builder of quiet digital spaces ★ tea enthusiast ★ 35mm film hoarder ★ zero dopamine badges ★ un-curated thoughts ★ no infinite scroll ★ slow web survivor ★",
  "🌸 offline in sagada 🌸 analog photo lab addict 🌸 mechanical keyboard luber 🌸 dunbar 15 safe 🌸 human warmth over algorithms 🌸",
  "📜 late night rain enjoyer 📜 sourdough starter parent 📜 100% human made text 📜 disconnected by design 📜 no corporate corporate 📜",
  "✨ deep conversations only ✨ non-commercial sanctuary ✨ 60s voice logs ★ warm paper aesthetic ★ welcome to kizuna ★"
];

export const INITIAL_TIMELINE_POSTS = [
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
];

export const INNER_CIRCLE_GRID = [
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

export const CHAPTER_DATA = {
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
