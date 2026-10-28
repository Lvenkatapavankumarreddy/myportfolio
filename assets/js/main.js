/**
 * Nova Astro x Venkata Pavan Kumar Reddy Lokasani Portfolio Logic
 * Design Reference: Nova Astro
 * Student Profile: Venkata Pavan Kumar Reddy Lokasani (B.Tech AI&DS - KL University)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initSkillsFilter();
  initContactForm();
  initFloatingDock();
  initCopyActions();
});

/* ==========================================================================
   1. THEME TOGGLER (Light / Dark Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('nova-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
    updateThemeIcon(storedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('nova-theme', next);
      updateThemeIcon(next);
      showToast(`Switched to ${next === 'dark' ? 'Obsidian Dark' : 'Warm Editorial'} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'dark') {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    icon.setAttribute('title', 'Switch to Light Mode');
  } else {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    icon.setAttribute('title', 'Switch to Dark Mode');
  }
}

/* ==========================================================================
   2. NAVIGATION & SCROLL HIGHLIGHTING
   ========================================================================== */
function initNavigation() {
  const sections = ['hero', 'about', 'education', 'skills', 'contact'];
  const navLinks = document.querySelectorAll('.site-nav-link, .dock-link');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-link');
  
  // Mobile drawer controls
  const toggleBtn = document.getElementById('mobile-drawer-toggle');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const drawer = document.getElementById('mobile-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeDrawer = () => {
    if (drawer) {
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) closeDrawer();
    });
  }

  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // ScrollSpy for Active Links
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 220;

    for (let i = sections.length - 1; i >= 0; i--) {
      const id = sections[i];
      const el = document.getElementById(id);
      if (el && scrollPos >= el.offsetTop) {
        navLinks.forEach((l) => {
          const href = l.getAttribute('href')?.replace('#', '');
          if (href === id) {
            l.classList.add('active');
          } else {
            l.classList.remove('active');
          }
        });
        break;
      }
    }
  }, { passive: true });
}

/* ==========================================================================
   4. SKILLS FILTERING
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'all';

      skillCards.forEach((card) => {
        const cat = card.getAttribute('data-category') || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. FLOATING BOTTOM DOCK (#floating-bar)
   ========================================================================== */
function initFloatingDock() {
  const dock = document.getElementById('floating-bar');
  const scrollTopBtn = document.getElementById('dock-scroll-top');

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (dock) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        dock.classList.add('visible');
      } else {
        dock.classList.remove('visible');
      }
    }, { passive: true });
  }
}

/* ==========================================================================
   6. CONTACT FORM & DIRECT MAILING
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value.trim() || 'New Portfolio Inquiry';
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.');
      return;
    }

    // Prefill mailto so user can send immediately from their client to Pavan
    const recipient = 'l.pavanreddy9989@gmail.com';
    const body = `Hi,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    showToast('Opening email client to send message...');
    window.location.href = mailtoUrl;

    form.reset();
  });
}

/* ==========================================================================
   7. QUICK COPY ACTIONS & TOAST
   ========================================================================== */
function initCopyActions() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${textToCopy}" to clipboard!`);
      }).catch(() => {
        showToast(`Copied: ${textToCopy}`);
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toast-root');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-root';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('visible');

  clearTimeout(toast.__timer);
  toast.__timer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

