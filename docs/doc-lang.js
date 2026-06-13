(function () {
  const lang = localStorage.getItem('rbl-lang') || 'en';

  function applyLang(l) {
    localStorage.setItem('rbl-lang', l);
    document.documentElement.lang = l;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === l);
    });
  }

  // Expose globally so onclick works
  window.setDocLang = function (l) { applyLang(l); };

  // Apply on load
  document.addEventListener('DOMContentLoaded', function () { applyLang(lang); });
})();
