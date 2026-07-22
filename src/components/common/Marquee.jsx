import React from 'react';

export default function Marquee({ marqueeText }) {
  return (
    <div className="neo-marquee-wrap mb-6" aria-hidden="true">
      <div className="neo-marquee-track">
        {marqueeText || "★ builder of quiet digital spaces ★ tea enthusiast ★ 35mm film hoarder ★ zero dopamine badges ★ un-curated thoughts ★ no infinite scroll ★ slow web survivor ★"}
      </div>
    </div>
  );
}
