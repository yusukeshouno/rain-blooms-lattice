(function () {
  const KEY = 'rbl-lang';

  function isJP(str) {
    return /[぀-鿿豈-﫿]/.test(str);
  }

  // Wrap a plain-text element's content at a separator into doc-en / doc-ja spans
  function splitEl(el, sep) {
    if (el.querySelector('.doc-en, .doc-ja')) return;
    if (el.childElementCount > 0) return;
    const text = el.textContent;
    const idx = text.indexOf(sep);
    if (idx === -1) return;
    const en = text.slice(0, idx).trim();
    const ja = text.slice(idx + sep.length).trim();
    if (!en || !isJP(ja)) return;
    el.innerHTML = `<span class="doc-en">${en}</span><span class="doc-ja">${ja}</span>`;
  }

  // Try splitting on ' / ' first, then ' · '
  function splitAny(el) {
    if (el.querySelector('.doc-en, .doc-ja')) return;
    if (el.childElementCount > 0) return;
    const text = el.textContent;
    for (const sep of [' / ', ' · ']) {
      const idx = text.indexOf(sep);
      if (idx === -1) continue;
      const en = text.slice(0, idx).trim();
      const ja = text.slice(idx + sep.length).trim();
      if (en && isJP(ja)) {
        el.innerHTML = `<span class="doc-en">${en}</span><span class="doc-ja">${ja}</span>`;
        return;
      }
    }
  }

  function processPage() {
    // ── h1: EN text node → doc-en, subtitle span → doc-ja ────────────
    document.querySelectorAll('.doc-header h1').forEach(h1 => {
      if (h1.querySelector('.doc-en')) return;
      const jaSpan = h1.querySelector('span');
      if (jaSpan) jaSpan.classList.add('doc-ja');
      [...h1.childNodes].forEach(n => {
        if (n.nodeType === 3 && n.textContent.trim()) {
          const s = document.createElement('span');
          s.className = 'doc-en';
          s.textContent = n.textContent;
          n.replaceWith(s);
        }
      });
    });

    // ── Headings, table headers, meta keys ───────────────────────────
    document.querySelectorAll('.doc-section h2, .doc-section h3').forEach(el => splitEl(el, ' / '));
    document.querySelectorAll('th').forEach(el => splitEl(el, ' / '));
    document.querySelectorAll('.doc-meta-key').forEach(el => splitEl(el, ' / '));
    document.querySelectorAll('.doc-bar-title').forEach(el => splitEl(el, ' · '));

    // ── Meta values with bilingual content ───────────────────────────
    document.querySelectorAll('.doc-meta-val').forEach(el => splitAny(el));

    // ── Table cells (all columns) ─────────────────────────────────────
    document.querySelectorAll('td').forEach(el => {
      if (el.childElementCount === 0) splitAny(el);
    });

    // ── .doc-body paragraphs that mix EN · JP in one element ─────────
    document.querySelectorAll('p.doc-body:not(.ja)').forEach(el => {
      if (el.childElementCount > 0) return;
      const text = el.textContent;
      const idx = text.indexOf(' · ');
      if (idx === -1) return;
      const ja = text.slice(idx + 3).trim();
      if (!isJP(ja)) return;
      const en = text.slice(0, idx).trim();
      el.innerHTML = `<span class="doc-en">${en}</span><span class="doc-ja">${ja}</span>`;
    });

    // ── Checklist items ───────────────────────────────────────────────
    document.querySelectorAll('.doc-checklist li').forEach(li => {
      if (li.querySelector('.doc-en')) return;
      const tNode = [...li.childNodes].find(n => n.nodeType === 3 && n.textContent.includes(' / '));
      if (!tNode) return;
      const parts = tNode.textContent.split(' / ');
      if (parts.length < 2 || !isJP(parts[1])) return;
      const en = document.createElement('span'); en.className = 'doc-en'; en.textContent = parts[0].trim();
      const ja = document.createElement('span'); ja.className = 'doc-ja'; ja.textContent = parts.slice(1).join(' / ').trim();
      tNode.replaceWith(en, ja);
    });

    // ── Doc-list items ────────────────────────────────────────────────
    document.querySelectorAll('.doc-list li').forEach(li => {
      if (li.querySelector('.doc-en')) return;
      const tNode = [...li.childNodes].find(n => n.nodeType === 3 && n.textContent.includes(' · ') && isJP(n.textContent));
      if (!tNode) return;
      const idx = tNode.textContent.indexOf(' · ');
      const en = document.createElement('span'); en.className = 'doc-en'; en.textContent = tNode.textContent.slice(0, idx).trim();
      const ja = document.createElement('span'); ja.className = 'doc-ja'; ja.textContent = tNode.textContent.slice(idx + 3).trim();
      tNode.replaceWith(en, ja);
    });

    // ── <br> + muted span pattern (td descriptions, step items) ──────
    document.querySelectorAll('span[style*="color:var(--muted)"]').forEach(span => {
      if (span.classList.contains('doc-ja') || span.classList.contains('doc-en')) return;
      if (!isJP(span.textContent)) return;
      span.classList.add('doc-ja');
      // Wrap preceding text nodes (the English part) in doc-en
      const parent = span.parentNode;
      [...parent.childNodes].forEach(n => {
        if (n === span) return;
        if (n.nodeName === 'BR') { n.remove(); return; }
        if (n.nodeType === 3 && n.textContent.trim()) {
          const s = document.createElement('span');
          s.className = 'doc-en';
          s.textContent = n.textContent;
          n.replaceWith(s);
        }
      });
    });

    // ── Step-item outer spans: wrap EN text node in doc-en ───────────
    document.querySelectorAll('li span:not(.doc-en):not(.doc-ja):not([style])').forEach(outer => {
      const jaChild = outer.querySelector('.doc-ja');
      if (!jaChild || outer.querySelector('.doc-en')) return;
      [...outer.childNodes].forEach(n => {
        if (n.nodeType === 3 && n.textContent.trim()) {
          const s = document.createElement('span');
          s.className = 'doc-en';
          s.textContent = n.textContent;
          n.replaceWith(s);
        }
      });
    });

    // ── ol lists that are pure Japanese (follow a .doc-lang-divider) ─
    document.querySelectorAll('ol').forEach(ol => {
      if (ol.querySelector('.doc-ja, .doc-en')) return;
      const text = ol.textContent.trim();
      if (isJP(text) && !text.match(/[a-zA-Z]{4,}/)) {
        ol.classList.add('doc-ja');
      }
    });
  }

  function applyLang(l) {
    localStorage.setItem(KEY, l);
    document.documentElement.lang = l;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === l);
    });
  }

  window.setDocLang = function (l) { applyLang(l); };

  document.addEventListener('DOMContentLoaded', function () {
    processPage();
    applyLang(localStorage.getItem(KEY) || 'en');
  });
})();
