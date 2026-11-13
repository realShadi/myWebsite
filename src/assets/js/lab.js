/* The toys on the lab page. Each one finds its own tile by data-toy. */
(function () {
  'use strict';

  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }
  function toy(name) { return document.querySelector('[data-toy="' + name + '"]'); }

  // Copies text, and selects it instead when the clipboard is unavailable.
  function copy(text, source, button) {
    var done = function (label) {
      var original = button.textContent;
      button.textContent = label;
      setTimeout(function () { button.textContent = original; }, 1200);
    };
    var select = function () {
      var range = document.createRange();
      range.selectNodeContents(source);
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      done('Selected');
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done('Copied'); }, select);
    } else {
      select();
    }
  }

  // Commit message generator
  (function () {
    var tile = toy('commit');
    if (!tile) return;
    var out = tile.querySelector('[data-out]');
    var messages = [
      'fix: stop the footer from eating the last paragraph',
      'fix: make the button do what the label says',
      'fix: undo the thing I was sure about yesterday',
      'fix: handle the user whose name is an emoji',
      'fix: it was a missing semicolon',
      'fix: it was DNS',
      'fix: actually fix it this time',
      'fix: centre the div, for real',
      'feat: add dark mode to the dark mode',
      'feat: add a button nobody asked for',
      'feat: ship it before anyone notices',
      'chore: rename final_v2_really_final',
      'chore: bump everything and hope',
      'chore: delete the code that scared me',
      'chore: remove console.log("here")',
      'refactor: move the mess to a different file',
      'refactor: same bug, better variable names',
      'docs: explain what past me was thinking',
      'docs: update the README nobody reads',
      'perf: make it fast by doing less',
      'style: argue with the formatter and lose',
      'revert: pretend the last commit never happened'
    ];
    tile.querySelector('[data-go]').addEventListener('click', function () {
      var next = pick(messages);
      while (next === out.textContent) next = pick(messages);
      out.textContent = next;
    });
    var copyButton = tile.querySelector('[data-copy]');
    copyButton.addEventListener('click', function () {
      copy('git commit -m "' + out.textContent.replace(/"/g, '\\"') + '"', out, copyButton);
    });
  })();

  // Dice
  (function () {
    var tile = toy('dice');
    if (!tile) return;
    var out = tile.querySelector('[data-out]');
    var total = tile.querySelector('[data-total]');
    var more = tile.querySelector('[data-more]');
    var count = 2;
    function roll() {
      var sum = 0;
      out.textContent = '';
      for (var i = 0; i < count; i++) {
        var value = 1 + Math.floor(Math.random() * 6);
        sum += value;
        var die = document.createElement('span');
        die.className = 'die';
        die.textContent = value;
        out.appendChild(die);
      }
      total.textContent = 'Total ' + sum;
    }
    tile.querySelector('[data-go]').addEventListener('click', roll);
    more.addEventListener('click', function () {
      count = count >= 5 ? 1 : count + 1;
      more.textContent = count >= 5 ? 'Back to one' : 'Add a die';
      roll();
    });
  })();

  // Colour of the moment
  (function () {
    var tile = toy('colour');
    if (!tile) return;
    var out = tile.querySelector('[data-out]');
    var chip = tile.querySelector('[data-chip]');
    function hslToHex(h, s, l) {
      s /= 100; l /= 100;
      var k = function (n) { return (n + h / 30) % 12; };
      var a = s * Math.min(l, 1 - l);
      var f = function (n) {
        var value = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        return Math.round(255 * value).toString(16).padStart(2, '0');
      };
      return '#' + f(0) + f(8) + f(4);
    }
    tile.querySelector('[data-go]').addEventListener('click', function () {
      var hex = hslToHex(Math.floor(Math.random() * 360), 70 + Math.floor(Math.random() * 25), 58 + Math.floor(Math.random() * 14));
      chip.style.backgroundColor = hex;
      out.textContent = hex;
    });
    var copyButton = tile.querySelector('[data-copy]');
    copyButton.addEventListener('click', function () { copy(out.textContent, out, copyButton); });
  })();

  // Should I ship it?
  (function () {
    var tile = toy('oracle');
    if (!tile) return;
    var out = tile.querySelector('[data-out]');
    var answers = [
      'Ship it.',
      'Write one more test first.',
      'Not on a Friday.',
      'Ask again after coffee.',
      'Only if the README is up to date.',
      'Yes. Fix the rest next week.',
      'Did you try it on a phone?',
      'The build is green. Go.',
      'Sleep on it.',
      'Read the diff one more time.'
    ];
    tile.querySelector('[data-go]').addEventListener('click', function () {
      var next = pick(answers);
      while (next === out.textContent) next = pick(answers);
      out.textContent = next;
    });
  })();

  // Reaction time
  (function () {
    var tile = toy('reaction');
    if (!tile) return;
    var pad = tile.querySelector('[data-pad]');
    var bestLine = tile.querySelector('[data-best]');
    var KEY = 'lab-reaction-best';
    var timer = null;
    var startedAt = 0;
    var best = null;
    try { best = parseInt(localStorage.getItem(KEY), 10) || null; } catch (e) { best = null; }
    function showBest() { bestLine.textContent = best ? 'Best ' + best + ' ms' : 'No best time yet'; }
    function set(state, text) { pad.setAttribute('data-state', state); pad.textContent = text; }
    showBest();
    pad.addEventListener('click', function () {
      var state = pad.getAttribute('data-state');
      if (state === 'wait') {
        clearTimeout(timer);
        set('idle', 'Too soon. Press to try again');
        return;
      }
      if (state === 'go') {
        var time = Math.round(performance.now() - startedAt);
        if (!best || time < best) {
          best = time;
          try { localStorage.setItem(KEY, String(best)); } catch (e) { /* the score just won't be kept */ }
          showBest();
        }
        set('idle', time + ' ms. Press to try again');
        return;
      }
      set('wait', 'Wait for green');
      timer = setTimeout(function () {
        startedAt = performance.now();
        set('go', 'Press now');
      }, 1200 + Math.random() * 2600);
    });
  })();

  // Pixel pad
  (function () {
    var tile = toy('pixels');
    if (!tile) return;
    var grid = tile.querySelector('[data-grid]');
    var SIZE = 12;
    var cells = [];
    for (var row = 0; row < SIZE; row++) {
      for (var col = 0; col < SIZE; col++) {
        var cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'px';
        cell.setAttribute('aria-pressed', 'false');
        cell.setAttribute('aria-label', 'Row ' + (row + 1) + ', column ' + (col + 1));
        grid.appendChild(cell);
        cells.push(cell);
      }
    }
    grid.addEventListener('click', function (event) {
      var cell = event.target.closest('.px');
      if (!cell) return;
      cell.setAttribute('aria-pressed', cell.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    });
    // Mirrors a random half, which tends to produce small creatures.
    function scatter() {
      for (var r = 0; r < SIZE; r++) {
        for (var c = 0; c < SIZE / 2; c++) {
          var inside = r > 1 && r < SIZE - 2 && c > 0;
          var on = inside && Math.random() < 0.52;
          cells[r * SIZE + c].setAttribute('aria-pressed', String(on));
          cells[r * SIZE + (SIZE - 1 - c)].setAttribute('aria-pressed', String(on));
        }
      }
    }
    tile.querySelector('[data-go]').addEventListener('click', scatter);
    tile.querySelector('[data-clear]').addEventListener('click', function () {
      cells.forEach(function (cell) { cell.setAttribute('aria-pressed', 'false'); });
    });
    scatter();
  })();
})();
