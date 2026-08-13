document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Mapugngan nga ma-cancel sa ubang events ang click
      
      navMenu.classList.toggle('is-active');
      menuToggle.classList.toggle('is-active');
      
      const isExpanded = navMenu.classList.contains('is-active');
      menuToggle.setAttribute('aria-expanded', isExpanded);

      console.log('Hamburger clicked! Active status:', isExpanded); // Para sa debugging
    });

    // Close menu when clicking links
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking anywhere outside
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('is-active');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- CARD TOGGLE ---
  const cardToggleBtns = document.querySelectorAll('.card-toggle-btn');

  cardToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const button = e.currentTarget; 
      const card = button.closest('.card');
      const details = card?.querySelector('.card-details');

      if (details) {
        if (details.hasAttribute('hidden')) {
          details.removeAttribute('hidden');
          button.textContent = 'Show Less';
          button.setAttribute('aria-expanded', 'true');
        } else {
          details.setAttribute('hidden', '');
          button.textContent = 'Show More';
          button.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // --- THEME TOGGLE ---
  const themeToggleBtn = document.getElementById('theme-toggle');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');

      const isDark = document.body.classList.contains('dark-theme');
      themeToggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
  }

  // --- COPYRIGHT YEAR ---
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});