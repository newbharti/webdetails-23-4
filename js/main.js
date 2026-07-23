/**
 * WORLD FACTS — Main JavaScript
 * Shared components: nav, modal, cookie banner
 */

// ── Navigation ──
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.header-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });
});



// ── Contact Modal ──
function openModal() {
  document.getElementById('contactModal')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('contactModal')?.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  // Open on all CTA buttons
  document.querySelectorAll('[data-modal="contact"]').forEach(btn => {
    btn.addEventListener('click', e => { e.preventDefault(); openModal(); });
  });

  // Close on overlay click
  const overlay = document.getElementById('contactModal');
  if (overlay) {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  }

  // Close on X
  document.querySelector('.modal-close')?.addEventListener('click', closeModal);

  // ESC key
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Form submit
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const agreed = form.querySelector('#agree-policy');
      if (!agreed?.checked) {
        alert('Please agree to our Privacy Policy, Terms & Conditions, and Disclaimer to proceed.');
        return;
      }
      form.style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
      setTimeout(closeModal, 3500);
      setTimeout(() => {
        form.style.display = 'block';
        document.getElementById('formSuccess').style.display = 'none';
        form.reset();
      }, 3700);
    });
  }
});

// ── Cookie Banner ──
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('wf_cookie_consent')) {
    setTimeout(() => {
      document.getElementById('cookieBanner')?.classList.add('visible');
    }, 1500);
  }

  document.getElementById('acceptCookies')?.addEventListener('click', () => {
    localStorage.setItem('wf_cookie_consent', 'accepted');
    document.getElementById('cookieBanner')?.classList.remove('visible');
  });

  document.getElementById('declineCookies')?.addEventListener('click', () => {
    localStorage.setItem('wf_cookie_consent', 'declined');
    document.getElementById('cookieBanner')?.classList.remove('visible');
  });
});
