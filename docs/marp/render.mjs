import fs from 'fs';
import path from 'path';

const deckMdPath = '/home/kaoru/work/compe/ogis/docs/marp/deck.md';
const themeCssPath = '/home/kaoru/work/compe/ogis/docs/marp/theme.css';
const outputPath = '/home/kaoru/work/compe/ogis/docs/marp/deck.html';

const deckContent = fs.readFileSync(deckMdPath, 'utf8');
const themeCss = fs.readFileSync(themeCssPath, 'utf8');

const slides = deckContent
  .replace(/^---[\s\S]*?---/, '')
  .split('\n---\n')
  .filter(s => s.trim().length > 0);

function mdToHtml(md) {
  let html = md
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  return html;
}

let slidesHtml = slides
  .map((slide, idx) => {
    const isLead = slide.includes('<!-- _class: lead -->');
    const content = mdToHtml(slide.replace('<!-- _class: lead -->', ''));
    return `
      <section class="slide ${isLead ? 'lead' : ''}" id="slide-${idx + 1}">
        <div class="slide-content">
          ${content}
        </div>
        <footer class="slide-footer">
          <span>OGIS Contest 2026 | Team Antigravity</span>
          <span>Slide ${idx + 1} of ${slides.length}</span>
        </footer>
      </section>
    `;
  })
  .join('\n');

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kizuna (絆) — OGIS 2026 Presentation Deck</title>
  <style>
    ${themeCss}

    body {
      margin: 0;
      padding: 20px;
      background: #1a1918;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }

    .slide {
      width: 960px;
      height: 540px;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .slide-content {
      flex: 1;
      overflow-y: auto;
    }

    .slide-footer {
      display: flex;
      justify-content: space-between;
      border-top: 1px dashed #d4a574;
      padding-top: 8px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  ${slidesHtml}
</body>
</html>`;

fs.writeFileSync(outputPath, fullHtml);
console.log('✅ Rendered Marp slides to standalone HTML deck at:', outputPath);
