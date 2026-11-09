document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;
  const icon = themeToggleBtn.querySelector('i');

  function applyTheme(dark) {
    document.body.classList.toggle('dark-mode', dark);
    // Switch icon class between fa-moon and fa-sun
    icon.classList.toggle('fa-sun', dark);
    icon.classList.toggle('fa-moon', !dark);
  }

  // Remember the choice so it carries over between index.html and certifications.html
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  applyTheme(saved === 'dark');

  themeToggleBtn.addEventListener('click', function() {
    const dark = !document.body.classList.contains('dark-mode');
    applyTheme(dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  });
});
