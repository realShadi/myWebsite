/* Shared behaviour for every page: the Jerusalem clock, the random page
   button and keeping the current tab in view on small screens. */
(function () {
  'use strict';

  var store = document.getElementById('site-pages');
  var root = (store && store.getAttribute('data-root')) || '';
  var zone = (store && store.getAttribute('data-timezone')) || 'UTC';

  // Clock
  var clocks = document.querySelectorAll('[data-clock]');
  if (clocks.length) {
    var format = null;
    try {
      format = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: zone });
    } catch (e) { /* leave the placeholder in place */ }
    var tick = function () {
      if (!format) return;
      var now = new Date();
      var text = format.format(now);
      clocks.forEach(function (clock) {
        clock.textContent = text;
        clock.setAttribute('datetime', now.toISOString());
      });
    };
    tick();
    setInterval(tick, 15000);
  }

  // Random page
  var pages = [];
  try { pages = JSON.parse(store.textContent); } catch (e) { pages = []; }
  document.querySelectorAll('[data-random-page]').forEach(function (button) {
    button.addEventListener('click', function () {
      var here = location.pathname;
      var choices = pages.filter(function (page) { return !here.endsWith('/' + page); });
      if (!choices.length) return;
      location.href = root + choices[Math.floor(Math.random() * choices.length)];
    });
  });

  // Keep the active tab visible when the tab bar scrolls sideways
  var tabs = document.querySelector('.tabs');
  var active = tabs && tabs.querySelector('.is-active');
  if (active) {
    tabs.scrollLeft += active.getBoundingClientRect().left - tabs.getBoundingClientRect().left - 16;
  }
})();
