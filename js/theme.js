document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const icon = themeToggleBtn.querySelector('i');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
      const darkModeActive = document.body.classList.toggle('dark-mode');

      // Switch icon class between fa-moon and fa-sun
      if (darkModeActive) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    });
  }
});
