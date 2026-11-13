/* Theme preview: switches the look by setting data-skin on <html>.
   Once a theme is chosen this file and the dock markup can be removed. */
(function () {
  'use strict';

  var THEMES = [
    { id: 'daylight', name: 'Daylight', desc: 'White space, big type, blue pills', a: '#ffffff', b: '#0071e3' },
    { id: 'midnight', name: 'Midnight', desc: 'Pure black with a stage-light glow', a: '#000000', b: '#2997ff' },
    { id: 'glass', name: 'Glass', desc: 'Frosted panels over a soft wallpaper', a: '#9cc4ff', b: '#ffc2d9' },
    { id: 'titanium', name: 'Titanium', desc: 'Warm metal, thin type, machined edges', a: '#d8d4cc', b: '#3a3835' },
    { id: 'bento', name: 'Bento', desc: 'Bright widget tiles in a tight grid', a: '#ffd60a', b: '#0a84ff' },
    { id: 'editorial', name: 'Editorial', desc: 'Serif type, set like a magazine', a: '#fbfbfd', b: '#d70015' },
    { id: 'source', name: 'Source', desc: 'Code editor colours and monospace', a: '#1f1f24', b: '#fc5fa3' },
    { id: 'classic', name: 'Classic', desc: 'The 1984 desktop, in black and white', a: '#ffffff', b: '#000000' }
  ];

  var KEY = 'site-skin';
  var root = document.documentElement;
  var nameEl = document.getElementById('dock-name');
  var descEl = document.getElementById('dock-desc');
  var swatchBox = document.getElementById('dock-swatches');
  var current = 0;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(id) {
    try { localStorage.setItem(KEY, id); } catch (e) { /* preview still works without storage */ }
  }

  function paint(i) {
    var t = THEMES[i];
    root.setAttribute('data-skin', t.id);
    if (nameEl) nameEl.textContent = t.name;
    if (descEl) descEl.textContent = t.desc;
    if (swatchBox) {
      Array.prototype.forEach.call(swatchBox.children, function (btn, n) {
        btn.setAttribute('aria-pressed', n === i ? 'true' : 'false');
      });
    }
  }

  function apply(i, remember) {
    current = (i + THEMES.length) % THEMES.length;
    var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !calm) {
      document.startViewTransition(function () { paint(current); });
    } else {
      paint(current);
    }
    if (remember) save(THEMES[current].id);
  }

  if (swatchBox) {
    THEMES.forEach(function (t, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'dock-swatch';
      btn.title = t.name;
      btn.setAttribute('aria-label', t.name + ' theme');
      btn.setAttribute('aria-pressed', 'false');
      btn.style.setProperty('--sw-a', t.a);
      btn.style.setProperty('--sw-b', t.b);
      btn.addEventListener('click', function () { apply(i, true); });
      swatchBox.appendChild(btn);
    });
  }

  var prev = document.getElementById('dock-prev');
  var next = document.getElementById('dock-next');
  if (prev) prev.addEventListener('click', function () { apply(current - 1, true); });
  if (next) next.addEventListener('click', function () { apply(current + 1, true); });

  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.key === 'ArrowRight') apply(current + 1, true);
    if (e.key === 'ArrowLeft') apply(current - 1, true);
  });

  // ?skin=name picks a theme by link; otherwise use the last one viewed.
  var wanted = null;
  try { wanted = new URLSearchParams(location.search).get('skin'); } catch (e) { /* ignore */ }
  wanted = wanted || saved();
  var start = 0;
  THEMES.forEach(function (t, i) { if (t.id === wanted) start = i; });
  current = start;
  paint(start);

  // Live clock for the "Local time" fact.
  var clock = document.getElementById('local-time');
  if (clock) {
    var fmt;
    try {
      fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jerusalem' });
    } catch (e) { fmt = null; }
    var tick = function () {
      if (!fmt) return;
      var now = new Date();
      clock.textContent = fmt.format(now);
      clock.setAttribute('datetime', now.toISOString());
    };
    tick();
    setInterval(tick, 20000);
  }
})();
