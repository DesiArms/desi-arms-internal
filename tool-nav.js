/* ═══ Desi Arms — shared top nav (branding element 5) ═══
   The ONE list of suite tools. Order follows the dashboard cards in
   index.html. Adding a tool = one line here + its dashboard card.
   Each page holds <nav class="tool-nav" data-current="file.html">;
   this script fills it and wires the mobile "Tools" menu button. */
(function () {
  var TOOLS = [
    ['index.html',                  'Dashboard'],
    ['customization-pricing.html',  'Laser Engraving & Cerakote'],
    ['used-firearm-pricing.html',   'Used Firearm Pricing'],
    ['suppressor-comparison.html',  'Suppressor Comparison'],
    ['nv-optic-comparison.html',    'Night Vision & Thermal Finder'],
    ['desi-arms-task-list.html',    'Task Manager'],
    ['desi-arms-time-tracker.html', 'Time Tracker'],
    ['staff-schedule.html',         'Staff Schedule'],
    ['laser-library.html',          'Laser Library'],
    ['pos-scorecard.html',          'POS Scorecard']
  ];

  function build(nav, n) {
    var current = nav.getAttribute('data-current');
    var list = document.createElement('div');
    list.className = 'tool-nav-list';
    list.id = 'tool-nav-list' + (n ? '-' + n : '');
    TOOLS.forEach(function (t) {
      var a = document.createElement('a');
      a.href = t[0];
      a.textContent = t[1];
      if (t[0] === current) a.setAttribute('aria-current', 'page');
      list.appendChild(a);
    });

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tool-nav-toggle';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', list.id);
    btn.innerHTML = '<span aria-hidden="true">&#9776;</span> Tools';

    function setOpen(open) {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    }
    btn.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { setOpen(false); btn.focus(); }
    });

    nav.appendChild(btn);
    nav.appendChild(list);
  }

  Array.prototype.forEach.call(document.querySelectorAll('nav.tool-nav'), build);
})();
