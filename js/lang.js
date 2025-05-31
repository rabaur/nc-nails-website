document.addEventListener('DOMContentLoaded', function() {
  const langToggle = document.getElementById('lang-toggle');
  const html = document.documentElement;
  function setLang(lang) {
    document.querySelectorAll('.lang-de').forEach(el => el.style.display = lang === 'de' ? '' : 'none');
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
    html.setAttribute('lang', lang);
    langToggle.textContent = lang === 'de' ? 'EN' : 'DE';
    localStorage.setItem('lang', lang);
  }
  langToggle.addEventListener('click', function() {
    setLang(html.getAttribute('lang') === 'de' ? 'en' : 'de');
  });
  // On load
  setLang(localStorage.getItem('lang') || 'de');
}); 